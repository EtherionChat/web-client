import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import {
    CSSTransition, SwitchTransition, TransitionGroup
} from 'react-transition-group';
import styles from './credit-card.module.scss';
import Background from '../../../../assets/images/credit-card/card-background/1.jpeg';

export interface CreditCardProps {
    cardHolder: string;
    cardNumber: string;
    cardMonth: string;
    cardYear: string;
    cardCvv: string;
    isCardFlipped: boolean;
    currentFocusedElm: any;
    onCardElementClick: (key: any) => void;
    cardNumberRef: any;
    cardHolderRef: any;
    cardDateRef: any;
    cardYearRef: any;
}

const CARDS = {
    visa: '^4',
    amex: '^(34|37)',
    mastercard: '^5[1-5]',
    discover: '^6011',
    unionpay: '^62',
    troy: '^9792',
    diners: '^(30[0-5]|36)'
};

const cardBackgroundName = () => {
    let random = Math.floor(Math.random() * 25 + 1);
    return `${random}.jpeg`;
};

const BACKGROUND_IMG = cardBackgroundName();

const CreditCard = ({
    cardHolder,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvv,
    isCardFlipped,
    currentFocusedElm,
    onCardElementClick,
    cardNumberRef,
    cardHolderRef,
    cardDateRef,
    cardYearRef
}: CreditCardProps) => {
    const [style, setStyle] = useState(null);

    const cardType = (cardNumber: string) => {
        const number = cardNumber;
        let re;
        for (const [card, pattern] of Object.entries(CARDS)) {
            re = new RegExp(pattern);
            if (number.match(re) != null) {
                return card;
            }
        }

        return 'visa'; // default type
    };

    const useCardType = useMemo(() => {
        return cardType(cardNumber);
    }, [cardNumber]);

    const outlineElementStyle = (element: any) => {
        return element
            ? {
                width: `${element.offsetWidth}px`,
                height: `${element.offsetHeight}px`,
                transform: `translateX(${element.offsetLeft}px) translateY(${element.offsetTop}px)`
            }
            : null;
    };

    useEffect(() => {
        if (currentFocusedElm) {
            const style = outlineElementStyle(currentFocusedElm.current);
            setStyle(style as any);
        }
    }, [currentFocusedElm]);

    const maskCardNumber = (cardNumber: string) => {
        let cardNumberArr = cardNumber.split('');
        cardNumberArr.forEach((val, index) => {
            if (index > 4 && index < 14) {
                if (cardNumberArr[index] !== ' ') {
                    cardNumberArr[index] = '*';
                }
            }
        });

        return cardNumberArr;
    };
    // console.log(require(`../../../../assets/images/credit-card/card-background/${BACKGROUND_IMG}`));
    return (
        <div className={classNames(styles['card-item'], { [styles['-active']]: isCardFlipped })}>
            <div className={classNames(styles["card-item__side"], styles["-front"])}>
                <div
                    className={classNames(styles["card-item__focus"], { [styles["-active"]]: currentFocusedElm })}
                    style={style as any}
                />
                <div className={styles["card-item__cover"]}>
                    <img
                        alt=""
                        src={"https://raw.githubusercontent.com/jasminmif/react-interactive-paycard/85704532b5036a39d59606e8bc077c7036ac30d8/public/card-background/12.jpeg"}
                        className={styles["card-item__bg"]}
                    />
                </div>

                <div className={styles["card-item__wrapper"]}>
                    <div className={styles["card-item__top"]}>
                        <img
                            // src={require(`../../../../assets/images/credit-card/chip.png`)}
                            alt=""
                            className={styles["card-item__chip"]}
                        />
                        <div className={styles["card-item__type"]}>
                            <img
                                alt={useCardType}
                                // src={require(`../../../../assets/images/credit-card/card-type/${useCardType}.png`)}
                                className={styles["card-item__typeImg"]}
                            />
                        </div>
                    </div>

                    <label
                        className={styles["card-item__number"]}
                        ref={cardNumberRef}
                        onClick={() => onCardElementClick('cardNumber')}
                    >
                        <TransitionGroup
                            className={styles["slide-fade-up"]}
                            component="div"
                        >
                            {cardNumber ? (
                                maskCardNumber(cardNumber).map((val, index) => (
                                    <CSSTransition
                                        classNames={{
                                            enterActive: styles["slide-fade-up-enter-active"],
                                            exitActive: styles["slide-fade-up-exit-active"],
                                            exit: styles["slide-fade-up-exit"],
                                            enterDone: styles["slide-fade-up-enter-done"],
                                            enter: styles["slide-fade-up-enter"],
                                            exitDone: styles["slide-fade-up-exit-done"]
                                        }}
                                        timeout={250}
                                        key={index}
                                    >
                                        <div className={styles["card-item__numberItem"]}>
                                            {val}
                                        </div>
                                    </CSSTransition>
                                ))
                            ) : (
                                <CSSTransition
                                    classNames={{
                                        enterActive: styles["slide-fade-up-enter-active"],
                                        exitActive: styles["slide-fade-up-exit-active"],
                                        exit: styles["slide-fade-up-exit"],
                                        enterDone: styles["slide-fade-up-enter-done"],
                                        enter: styles["slide-fade-up-enter"],
                                        exitDone: styles["slide-fade-up-exit-done"]
                                    }}
                                    timeout={250}
                                >
                                    <div className={styles["card-item__numberItem"]}>
                                        #
                                    </div>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </label>
                    <div className={styles["card-item__content"]}>
                        <label
                            className={styles["card-item__info"]}
                            onClick={() => onCardElementClick('cardHolder')}
                            ref={cardHolderRef}
                        >
                            <div className={styles["card-item__holder"]}>Card Holder</div>
                            <div className={styles["card-item__name"]}>
                                <TransitionGroup
                                    component="div"
                                    className={styles["slide-fade-up"]}
                                >
                                    {cardHolder === 'FULL NAME' ? (
                                        <CSSTransition
                                            classNames={{
                                                enterActive: styles["slide-fade-up-enter-active"],
                                                exitActive: styles["slide-fade-up-exit-active"],
                                                exit: styles["slide-fade-up-exit"],
                                                enterDone: styles["slide-fade-up-enter-done"],
                                                enter: styles["slide-fade-up-enter"],
                                                exitDone: styles["slide-fade-up-exit-done"]
                                            }}
                                            timeout={250}
                                        >
                                            <div>FULL NAME</div>
                                        </CSSTransition>
                                    ) : (
                                        cardHolder
                                            .split('')
                                            .map((val, index) => (
                                                <CSSTransition
                                                    timeout={250}
                                                    classNames={{
                                                        enterActive: styles["slide-fade-right-enter-active"],
                                                        exitActive: styles["slide-fade-right-exit-active"],
                                                        exit: styles["slide-fade-right-exit"],
                                                        enterDone: styles["slide-fade-right-enter-done"],
                                                        enter: styles["slide-fade-right-enter"],
                                                        exitDone: styles["slide-fade-right-exit-done"]
                                                    }}
                                                    key={index}
                                                >
                                                    <span className={styles["card-item__nameItem"]}>
                                                        {val}
                                                    </span>
                                                </CSSTransition>
                                            ))
                                    )}
                                </TransitionGroup>
                            </div>
                        </label>
                        <div
                            className={styles["card-item__date"]}
                            onClick={() => onCardElementClick('cardDate')}
                            ref={cardDateRef}
                        >
                            <label className={styles["card-item__dateTitle"]}>
                                Expires
                            </label>
                            <label className={styles["card-item__dateItem"]}>
                                <SwitchTransition in-out>
                                    <CSSTransition
                                        classNames={{
                                            enterActive: styles["slide-fade-up-enter-active"],
                                            exitActive: styles["slide-fade-up-exit-active"],
                                            exit: styles["slide-fade-up-exit"],
                                            enterDone: styles["slide-fade-up-enter-done"],
                                            enter: styles["slide-fade-up-enter"],
                                            exitDone: styles["slide-fade-up-exit-done"]
                                        }}
                                        timeout={200}
                                        key={cardMonth}
                                    >
                                        <span>
                                            {!cardMonth ? 'MM' : cardMonth}{' '}
                                        </span>
                                    </CSSTransition>
                                </SwitchTransition>
                            </label>
                            /
                            <label
                                htmlFor="cardYear"
                                className={styles["card-item__dateItem"]}
                                ref={cardYearRef}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onCardElementClick('cardYear')
                                }}
                            >
                                <SwitchTransition out-in>
                                    <CSSTransition
                                        classNames={{
                                            enterActive: styles["slide-fade-up-enter-active"],
                                            exitActive: styles["slide-fade-up-exit-active"],
                                            exit: styles["slide-fade-up-exit"],
                                            enterDone: styles["slide-fade-up-enter-done"],
                                            enter: styles["slide-fade-up-enter"],
                                            exitDone: styles["slide-fade-up-exit-done"]
                                        }}
                                        timeout={250}
                                        key={cardYear}
                                    >
                                        <span>
                                            {!cardYear
                                                ? 'YY'
                                                : cardYear
                                                    .toString()
                                                    .substr(-2)}
                                        </span>
                                    </CSSTransition>
                                </SwitchTransition>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames(styles["card-item__side"], styles["-back"])}>
                <div className={styles["card-item__cover"]}>
                    <img
                        alt=""
                        // src={require(`../../../../assets/images/credit-card/card-background/${BACKGROUND_IMG}`)}
                        className={styles["card-item__bg"]}
                    />
                </div>
                <div className={styles["card-item__band"]} />
                <div className={styles["card-item__cvv"]}>
                    <div className={styles["card-item__cvvTitle"]}>CVV</div>
                    <div className={styles["card-item__cvvBand"]}>
                        <TransitionGroup>
                            {cardCvv.split('').map((val, index) => (
                                <CSSTransition
                                    classNames={{
                                        enterActive: styles["zoom-in-out-enter-active"],
                                        exitActive: styles["zoom-in-out-exit-active"],
                                        exit: styles["zoom-in-out-exit"],
                                        enterDone: styles["zoom-in-out-enter-done"],
                                        enter: styles["zoom-in-out-enter"],
                                        exitDone: styles["zoom-in-out-exit-done"]
                                    }}
                                    key={index}
                                    timeout={250}
                                >
                                    <span>*</span>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>
                    <div className={styles["card-item__type"]}>
                        <img
                            alt="card-type"
                            // src={require(`../../../../assets/images/credit-card/card-type/${useCardType}.png`)}
                            className={styles["card-item__typeImg"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;