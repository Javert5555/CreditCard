import React, { useEffect, useState } from "react";
import CardCover from "./card/CardCover";
import InputForm from "./input_form/InputForm";
import "../index.scss"

const Wrapper = () => {

    const [ cardNumber, setCardNumber ] = useState("");
    const [ cardHolder, setCardHolder ] = useState("");
    const [ cardMonth, setCardMonth ] = useState("DEFAULT");

    const changeCardMonth = ({target}) => {
        console.log(target.value)
        setCardMonth(() => target.value);
    };

    const changeCardHolder = ({ target }) => {
        setCardHolder(() => target.value);
    };

    const changeCardNumber = ({ target }) => {
        let value = target.value.replace(/\s/g, ""); // delete all spaces
        target.value = value.replace(/\D/g, ""); // delete not numbers

        let number = target.value;

        if (number.length  > 4 && number.length <= 8) {
            number = `${number.slice(0,4)} ${number.slice(4)}`;
        } else if (number.length  > 8 && number.length <= 12) {
            number = `${number.slice(0,4)} ${number.slice(4,8)} ${number.slice(8)}`;
        } else if (number.length  > 12) {
            number = `${number.slice(0,4)} ${number.slice(4,8)} ${number.slice(8,12)} ${number.slice(12)}`;
        }

        setCardNumber(() => {
            return number;
        });
    };

    return (
        <div className="wrapper">
            <div className="veil">
                <CardCover
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardMonth={cardMonth}
                />
                <InputForm
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardMonth={cardMonth}
                    changeCardNumber={changeCardNumber}
                    changeCardHolder={changeCardHolder}
                    changeCardMonth={changeCardMonth}
                />
            </div>
        </div>
    );

};

export default Wrapper;