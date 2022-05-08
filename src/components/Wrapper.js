import React, { useEffect, useState } from "react";
import CardCover from "./card/CardCover";
import InputForm from "./input_form/InputForm";
import UploadImg from "./upload_img/UploadImg";
import "../index.scss";
import "../styles/popup.scss";

const Wrapper = () => {

    const [ cardNumber, setCardNumber ] = useState("");
    const [ cardHolder, setCardHolder ] = useState("");
    const [ cardCVV, setCardCVV ] = useState("");
    const [ cardMonth, setCardMonth ] = useState("");
    const [ cardYear, setCardYear ] = useState("");

    const handlerCardYear = ({ target }) => {
        setCardYear(() => target.value);
    };

    const handlerCardMonth = ({ target }) => {
        setCardMonth(() => target.value);
    };

    const handlerCardCVV = ({ target }) => {
        const value = target.value;
        target.value = value.replace(/\D/g, ""); // delete not numbers

        setCardCVV(() => target.value);
    };

    const handlerCardHolder = ({ target }) => {
        let value = target.value.replace(/(^[^ ]* )|[ ]+/g, '$1');
        value = value.replace(/[^A-Za-z ]|^\s/g, "");
        setCardHolder(() => value);
    };

    const handlerCardNumber = ({ target }) => {
        const value = target.value.replace(/\s/g, ""); // delete all spaces
        target.value = value.replace(/\D/g, ""); // delete not numbers

        let number = target.value;

        if (number.length  > 4 && number.length <= 8) {
            number = `${number.slice(0,4)} ${number.slice(4)}`;
        } else if (number.length  > 8 && number.length <= 12) {
            number = `${number.slice(0,4)} ${number.slice(4,8)} ${number.slice(8)}`;
        } else if (number.length  > 12) {
            number = `${number.slice(0,4)} ${number.slice(4,8)} ${number.slice(8,12)} ${number.slice(12)}`;
        }

        setCardNumber(() => number);
    };

    return (
        <div className="wrapper">
            <div className="veil">
                <div className="warning-popup"></div>
                <CardCover
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardMonth={cardMonth}
                    cardYear={cardYear}
                    cardCVV={cardCVV}
                />
                <InputForm
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardMonth={cardMonth}
                    cardYear={cardYear}
                    cardCVV={cardCVV}
                    handlerCardNumber={handlerCardNumber}
                    handlerCardHolder={handlerCardHolder}
                    handlerCardMonth={handlerCardMonth}
                    handlerCardYear={handlerCardYear}
                    handlerCardCVV={handlerCardCVV}
                    setCardNumber={setCardNumber}
                    setCardHolder={setCardHolder}
                    setCardCVV={setCardCVV}
                    setCardMonth={setCardMonth}
                    setCardYear={setCardYear}
                />
                <div className="wrapper__link">
                    <a href="https://github.com/Javert5555/CreditCard" target="_blank">GitHub</a>
                </div>
                <UploadImg />
            </div>
        </div>
    );

};

export default Wrapper;