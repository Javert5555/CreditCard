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
    }) => {
    
    const handlerInputSubmit = (e) => {
        e.preventDefault();
        // if (cardNumber.length === 19 && cardHolder !== "" && cardMonth !=="DEFAULT" && cardYear !=="DEFAULT" && cardCVV.length === 4) {
        //     alert("Nice card");
        // } else {
        //     alert("Bad card");
        // }
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