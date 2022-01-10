import React from "react";
import FormBottomPart from "./form_parts/FormBottomPart";
import FormUpperPart from "./form_parts/FormUpperPart";
import "../../styles/input-form.scss";

const InputForm = () => {

    return (
        <form className="input-form">
            <FormUpperPart />
            <FormBottomPart />
        </form>
    );
};

export default InputForm;