import React, { useEffect, useState } from "react";
import CardCover from "./card/CardCover";
import InputForm from "./input_form/InputForm";
import "../index.scss"

const Wrapper = () => {

    const [ cardNumber, setCardNumber ] = useState("");
    const [ cardHolder, setCardHolder ] = useState("");

    const changeCardHolder = ({ target }) => {
        console.log(target.value)
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
                />
                <InputForm
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    changeCardNumber={changeCardNumber}
                    changeCardHolder={changeCardHolder}
                />
            </div>
        </div>
    );

};

export default Wrapper;