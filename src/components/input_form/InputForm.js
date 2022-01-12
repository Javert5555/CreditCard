import React from "react";
import FormBottomPart from "./form_parts/FormBottomPart";
import FormUpperPart from "./form_parts/FormUpperPart";
import "../../styles/input-form.scss";

const InputForm = ({ cardNumber, cardHolder, cardMonth, changeCardNumber, changeCardHolder, changeCardMonth}) => {

    return (
        <form className="input-form">
            <FormUpperPart
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                changeCardNumber={changeCardNumber}
                changeCardHolder={changeCardHolder}
            />
            <FormBottomPart
                cardMonth={cardMonth}
                changeCardMonth={changeCardMonth}
            />
            <input className="input-form__submit" type="submit" value="Submit" />
        </form>
    );
};

export default InputForm;