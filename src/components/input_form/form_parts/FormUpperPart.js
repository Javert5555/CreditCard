import React from "react";

const FormUpperPart = ({ cardNumber, cardHolder, handlerCardNumber, handlerCardHolder}) => {

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
                    onChange={handlerCardNumber}
                />
            </label>
            <label htmlFor="card-name" className="input-form__label">
                <h2 className="input-form__title">Card Holder:</h2>
                <input
                    id="card-name"
                    className="input-form__holder"
                    name="holder"
                    type="text"
                    value={cardHolder}
                    onChange={handlerCardHolder}
                />
            </label>
        </div>
    );
}

export default FormUpperPart;