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

    const checkInputFields = () => {
        let warningMessage = "";
        let warningStatus = false;
        if (cardNumber.replace(/\s/g, "").length !== 16){
            warningMessage = "Укажите правильно номер (16 цифр).";
            warningStatus = true;
        } else if (cardHolder.length === 0) {
            warningMessage = "Укажите правильно фамилию и имя владельца.";
            warningStatus = true;
        } else if (cardMonth === "DEFAULT") {
            warningMessage = "Укажите месяц истечения службы";
            warningStatus = true;
        } else if (cardYear === "DEFAULT") {
            warningMessage = "Укажите год истечения службы";
            warningStatus = true;
        } else if (cardCVV.length !== 4) {
            warningMessage = "Укажите правильно CVV код (4 цифры).";
            warningStatus = true;
        }
        if (warningStatus) {
            const popUp = document.querySelector(".warning-popup");
            popUp.innerHTML = warningMessage;
            popUp.style.opacity = 1;
            document.querySelector(".wrapper").addEventListener("click", () => {popUp.style.opacity = 0});
            // window.addEventListener("resize", () => {popUp.style.opacity = 0});
            // window.removeEventListener("resize", () => {popUp.style.opacity = 0});
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
            console.log(answer);
            setCardNumber(() => "")
            setCardHolder(() => "")
            setCardCVV(() => "")
            setCardMonth(() => "DEFAULT")
            setCardYear(() => "DEFAULT")
        } else if (response.status === 401) {
            const answer = (await response.json()).message;
            console.log(response.status);
            console.log(answer);
        } else {
            const answer = (await response.json()).message;
            console.log(response.status);
            console.log(answer); // ???
        }     
    };

    return (
        <form className="input-form">
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
            <input onClick={handlerInputSubmit} className="input-form__submit" type="submit" value="Submit" />
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