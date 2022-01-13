import React from "react";
import FormBottomPart from "./form_parts/FormBottomPart";
import FormUpperPart from "./form_parts/FormUpperPart";
import "../../styles/input-form.scss";

const InputForm = ({
        cardNumber,
        cardHolder,
        cardCVV,
        cardMonth,
        cardYear,
        handlerCardNumber,
        handlerCardHolder,
        handlerCardCVV,
        handlerCardMonth,
        handlerCardYear
    }) => {

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
            <input className="input-form__submit" type="submit" value="Submit" />
        </form>
    );
};

export default InputForm;