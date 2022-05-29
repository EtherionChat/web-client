import React, { useState, useRef, useCallback } from 'react';
import Form from './form';
import CreditCard from './credit-card';
import styles from './index.module.scss';

const initialState: any = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    isCardFlipped: false
};

const CreditCardForm = () => {
    const [state, setState] = useState(initialState);
    const [currentFocusedElm, setCurrentFocusedElm] = useState(null);
    const formNumberRef = useRef()
    const formHolderRef = useRef()
    const formDateRef = useRef()
    const formCvvRef = useRef()
    const formYearRef = useRef()
    const cardNumberRef = useRef()
    const cardHolderRef = useRef()
    const cardDateRef = useRef()
    const cardYearRef = useRef()

    const updateStateValues = useCallback(
        (keyName: string, value: any) => {
            setState({
                ...state,
                [keyName]: value || initialState[keyName]
            });
        },
        [state]
    );

    // References for the Form Inputs used to focus corresponding inputs.
    const formFieldsRefObj: any = {
        cardNumber: formNumberRef,
        cardHolder: formHolderRef,
        cardDate: formDateRef,
        cardCvv: formCvvRef,
        cardYear: formYearRef
    };

    const focusFormFieldByKey = useCallback((key: any) => {
        formFieldsRefObj[key].current.focus();
    }, []);

    // This are the references for the Card DIV elements.
    const cardElementsRef: any = {
        cardNumber: cardNumberRef,
        cardHolder: cardHolderRef,
        cardDate: cardDateRef,
        cardYear: cardYearRef
    };

    const onCardFormInputFocus = (_event: any, inputName: any) => {
        const refByName = cardElementsRef[inputName];
        setCurrentFocusedElm(refByName);
    };

    const onCardInputBlur = useCallback(() => {
        setCurrentFocusedElm(null);
    }, []);

    return (
        <div className={styles["wrapper"]}>
            <Form
                cardMonth={state.cardMonth}
                cardYear={state.cardYear}
                onUpdateState={updateStateValues}
                onCardInputFocus={onCardFormInputFocus}
                onCardInputBlur={onCardInputBlur}
                cardNumberRef={formNumberRef}
                cardHolderRef={formHolderRef}
                cardDateRef={formDateRef}
                cardCvv={formCvvRef}
                cardYearRef={formYearRef}
            >
                <CreditCard
                    cardNumber={state.cardNumber}
                    cardHolder={state.cardHolder}
                    cardMonth={state.cardMonth}
                    cardYear={state.cardYear}
                    cardCvv={state.cardCvv}
                    isCardFlipped={state.isCardFlipped}
                    currentFocusedElm={currentFocusedElm}
                    onCardElementClick={focusFormFieldByKey}
                    cardNumberRef={cardNumberRef}
                    cardHolderRef={cardHolderRef}
                    cardDateRef={cardDateRef}
                    cardYearRef={cardYearRef}
                ></CreditCard>
            </Form>
        </div>
    );
};

export { CreditCardForm };