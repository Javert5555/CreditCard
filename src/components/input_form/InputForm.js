import React from "react";
import FormBottomPart from "./form_parts/FormBottomPart";
import FormUpperPart from "./form_parts/FormUpperPart";
import "../../styles/input-form.scss";

const InputForm = ({ cardNumber, cardHolder, changeCardNumber, changeCardHolder}) => {

    return (
        <form className="input-form">
            <FormUpperPart
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                changeCardNumber={changeCardNumber}
                changeCardHolder={changeCardHolder}
            />
            <FormBottomPart />
            <input className="input-form__submit" type="submit" value="Submit" />
        </form>
    );
};

export default InputForm;