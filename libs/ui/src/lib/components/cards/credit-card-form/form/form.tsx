import { Group, NumberInput, Select, TextInput } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './form.module.scss';

export interface FormProps {
    cardMonth: string;
    cardYear: string;
    onUpdateState: (keyName: string, value: any) => void;
    cardNumberRef: any;
    cardHolderRef: any;
    cardDateRef: any;
    onCardInputFocus: (event: any, inputName: string) => void;
    onCardInputBlur: () => void;
    cardCvv: any;
    children: React.ReactNode;
    cardYearRef: any;
}

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
    const month = i + 1;
    return month <= 9 ? '0' + month : String(month);
});
const yearsArr = Array.from({ length: 10 }, (_x, i) => String(currentYear + i));

export default function Form({
    cardMonth,
    cardYear,
    onUpdateState,
    cardNumberRef,
    cardHolderRef,
    cardDateRef,
    onCardInputFocus,
    onCardInputBlur,
    cardCvv,
    children,
    cardYearRef
}: FormProps) {
    const [cardNumber, setCardNumber] = useState('');
    const [cardDateMonth, setCardDateMonth] = useState('');
    const [cardDateYear, setCardDateYear] = useState('');

    useIsomorphicEffect(() => {
        onUpdateState("cardMonth", cardDateMonth);
    }, [cardDateMonth])

    useIsomorphicEffect(() => {
        onUpdateState("cardYear", cardDateYear);
    }, [cardDateYear])

    // const handleFormChange = (val: any) => {
    //     onUpdateState("cardCvv", String(val));
    // };

    // TODO: We can improve the regex check with a better approach like in the card component.
    const onCardNumberChange = (event: any) => {
        let { value, name } = event.target;
        let cardNumber = value;
        value = value.replace(/\D/g, '');
        if (/^3[47]\d{0,13}$/.test(value)) {
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
            // diner's club, 14 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        } else if (/^\d{0,16}$/.test(value)) {
            // regular cc number, 16 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
                .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
        }

        setCardNumber(cardNumber.trimRight());
        onUpdateState(name, cardNumber);
    };

    const onCvvFocus = (event: any) => {
        onUpdateState('isCardFlipped', true);
    };

    const onCvvBlur = (event: any) => {
        onUpdateState('isCardFlipped', false);
    };

    // NOTE: Currently the cursor on the card number field gets reset if we remove a number, the code bellow was used
    // in class components, need to transform this to work with functional components.
    // getSnapshotBeforeUpdate() {
    //     return this.props.cardNumberRef.current.selectionStart;
    // }

    // const componentDidUpdate = function (prevProps, prevState, cursorIdx) {
    //     const node = cardNumberRef.current;
    //     const { cardNumber: cardNum } = state;
    //     const { cardNumber: prevCardNum } = prevState;
    //     if (
    //         cardNum.length > prevCardNum.length &&
    //         cardNum[cursorIdx - 1] === ' '
    //     ) {
    //         cursorIdx += 1;
    //     } else if (prevCardNum[cursorIdx - 1] === ' ') {
    //         cursorIdx -= 1;
    //     }
    //     node.selectionStart = node.selectionEnd = cursorIdx;
    // };

    return (
        <div className={styles["card-form"]}>
            <div className={styles["card-list"]}>{children}</div>
            <div className={styles["card-form__inner"]}>
                <div className={styles["card-input"]}>
                    <TextInput
                        placeholder="Card Number"
                        label="Card Number"
                        size="lg"
                        required
                        name="cardNumber"
                        // hideControls
                        type="tel"
                        autoComplete="off"
                        onChange={(event) => onCardNumberChange(event)}
                        maxLength={19}
                        ref={cardNumberRef}
                        onFocus={(e) => onCardInputFocus(e, 'cardNumber')}
                        onBlur={onCardInputBlur}
                        value={cardNumber}
                    />
                </div>

                <div className={styles["card-input"]}>
                    <TextInput
                        placeholder="Card Holder"
                        label="Card Holder"
                        size="lg"
                        required
                        name="cardHolder"
                        autoComplete="off"
                        onChange={(event) => onUpdateState(event.target.name, event.target.value)}
                        ref={cardHolderRef}
                        onFocus={(event) => onCardInputFocus(event, 'cardHolder')}
                        onBlur={onCardInputBlur}
                    />
                </div>

                <div className={styles["card-form__row"]}>
                    <div className={styles["card-form__col"]}>
                        <Group grow>
                            <Select
                                data={monthsArr}
                                searchable
                                placeholder="Month"
                                label="Expiration Date"
                                size="lg"
                                value={cardMonth}
                                ref={cardDateRef}
                                onChange={setCardDateMonth as any}
                                required
                                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                                onBlur={onCardInputBlur}
                            />
                            <Select
                                data={yearsArr}
                                searchable
                                placeholder="Year"
                                label="ㅤ"
                                size="lg"
                                value={cardYear}
                                ref={cardYearRef}
                                onChange={setCardDateYear as any}
                                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                                onBlur={onCardInputBlur}
                            />
                        </Group>
                    </div>
                    <div className={classNames(styles["card-form__col"], styles["-cvv"])}>
                        <div className={styles["card-input"]}>
                            <NumberInput
                                placeholder="CVV"
                                label="CVV"
                                size="lg"
                                required
                                name="cardCvv"
                                hideControls
                                maxLength={4}
                                autoComplete="off"
                                onChange={(val) => onUpdateState("cardCvv", String(val))}
                                onFocus={onCvvFocus}
                                onBlur={onCvvBlur}
                                ref={cardCvv}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}