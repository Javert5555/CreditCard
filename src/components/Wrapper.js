import React from "react";
import CardCover from "./card/CardCover";
import InputForm from "./input_form/InputForm";
import "../index.scss"

const Wrapper = () => (
    <div className="wrapper">
        <div className="veil">
            <CardCover />
            <InputForm />
        </div>
    </div>
);

export default Wrapper;