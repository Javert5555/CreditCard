import React from "react";
import FormBottomPart from "./form_parts/FormBottomPart";
import FormUpperPart from "./form_parts/FormUpperPart";
import PropTypes from "prop-types";
import "../../styles/input-form.scss";

const InputForm = ({
        cardNumber,
        cardHolder,
        cardMonth,
        cardYear,
        cardCVV,
        handlerCardNumber,
        handlerCardHolder,
        handlerCardMonth,
        handlerCardYear,
        handlerCardCVV,
        setCardNumber,
        setCardHolder,
        setCardCVV,
        setCardMonth,
        setCardYear
    }) => {

    const cardHolderInfo = {
        cardNumber: cardNumber.replace(/\s/g, ""),
        cardHolder: cardHolder,
        cardMonth: cardMonth,
        cardYear: cardYear,
        cardCVV: cardCVV
    };
    
    const showMessage = (message) => {
        const popUp = document.querySelector(".warning-popup");
        popUp.innerHTML = message;
        popUp.style.opacity = 1;
        document.querySelector(".wrapper").addEventListener("click", () => {popUp.style.opacity = 0});
        // setTimeout();
        window.addEventListener("resize", () => {popUp.style.opacity = 0});
    };

    const checkInputFields = () => {
        let warningStatus = false;
        if (
            cardNumber.match(/^(\d{4}\s{1}){3}\d{4}/gi) === null ||
            cardHolder.match(/^[a-zA-Z]+\s{1}[a-zA-Z]+/gi) === null ||
            cardMonth.match(/^\d{2}$/gi) === null ||
            cardYear.match(/^\d{4}$/gi) === null ||
            cardCVV.match(/^\d{4}$/gi) === null
        ){
            warningStatus = true;
        }
        return warningStatus;
    };
    
    const handlerInputSubmit = async (e) => {
        e.preventDefault();
        if (checkInputFields()) return;
        const response = await fetch('/holder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cardHolderInfo
            })
        });
        if (response.ok) {
            const answer = await response.text();
            showMessage(answer);
            setCardNumber(() => "")
            setCardHolder(() => "")
            setCardCVV(() => "")
            setCardMonth(() => "")
            setCardYear(() => "")
        } else if (response.status === 401) {
            const answer = (await response.json()).message;
            showMessage(answer);
        } else {
            const answer = (await response.json()).message;
            showMessage(answer);
        }     
    };

    return (
        <form className="input-form" onSubmit={handlerInputSubmit}>
            <FormUpperPart
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                handlerCardNumber={handlerCardNumber}
                handlerCardHolder={handlerCardHolder}
            />
            <FormBottomPart
                cardMonth={cardMonth}
                cardYear={cardYear}
                cardCVV={cardCVV}
                handlerCardMonth={handlerCardMonth}
                handlerCardYear={handlerCardYear}
                handlerCardCVV={handlerCardCVV}

            />
            <input className="input-form__submit" type="submit" value="Submit" />
        </form>
    );
};

InputForm.propTypes = {
    cardNumber: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
    cardMonth: PropTypes.string.isRequired,
    cardYear: PropTypes.string.isRequired,
    cardCVV: PropTypes.string.isRequired,
    handlerCardNumber: PropTypes.func.isRequired,
    handlerCardHolder: PropTypes.func.isRequired,
    handlerCardMonth: PropTypes.func.isRequired,
    handlerCardYear: PropTypes.func.isRequired,
    handlerCardCVV: PropTypes.func.isRequired,
};

export default InputForm;