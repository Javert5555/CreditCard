import React, { useEffect, useState } from "react";

const FormUpperPart = () => {

    const [ cardNumber, setCardNumber ] = useState("");

    const changeCardNumber = ({ target }) => {
        let value = target.value.replace(/\s/g, "");
        target.value = value.replace(/\D/g, "");

        let count = target.value;

        if (count.length  > 4 && count.length <= 8) {
            count = `${count.slice(0,4)} ${count.slice(4)}`;
        } else if (count.length  > 8 && count.length <= 12) {
            count = `${count.slice(0,4)} ${count.slice(4,8)} ${count.slice(8)}`;
        } else if (count.length  > 12) {
            count = `${count.slice(0,4)} ${count.slice(4,8)} ${count.slice(8,12)} ${count.slice(12)}`;
        }

        setCardNumber(() => {
            return count;
        });
    };

    return (
        <div>
            <label htmlFor="card-number" className="input-form__label">
                <h2 className="input-form__title">Number:</h2>
                <input
                    id="card-number"
                    className="input-form__number"
                    name="number"
                    type="text"
                    maxLength={19}
                    value={cardNumber}
                    onChange={changeCardNumber}
                />
            </label>
            <label htmlFor="card-name" className="input-form__label">
                <h2 className="input-form__title">Card Holder:</h2>
                <input
                    id="card-name"
                    className="input-form__holder"
                    name="holder"
                    type="text"
                    // value={}
                    // onChange={}
                />
            </label>
        </div>
    );
}

export default FormUpperPart;