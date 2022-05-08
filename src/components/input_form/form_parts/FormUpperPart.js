import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useOutlineAnimation from "./useOutlineAnimation";

const FormUpperPart = ({ cardNumber, cardHolder, handlerCardNumber, handlerCardHolder}) => {

    useOutlineAnimation(".card-front__number", ".input-form__number");
    useOutlineAnimation(".card-front__name", ".input-form__holder");

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
                    required
                    pattern="^(\d{4}\s{1}){3}\d{4}"
                />
            </label>
            <label htmlFor="card-name" className="input-form__label">
                <h2 className="input-form__title">Card Holder:</h2>
                <input
                    id="card-name"
                    className="input-form__holder"
                    name="holder"
                    type="text"
                    maxLength={100}
                    value={cardHolder}
                    onChange={handlerCardHolder}
                    required
                    pattern="^[a-zA-Z]+\s{1}[a-zA-Z]+"
                />
            </label>
        </div>
    );
};

FormUpperPart.propTypes = {
    cardNumber: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
    handlerCardNumber: PropTypes.func.isRequired,
    handlerCardHolder: PropTypes.func.isRequired,
};

export default FormUpperPart;