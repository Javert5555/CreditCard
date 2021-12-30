import React from "react";
import InnerForm from "./InnerForm/InnerForm";
import "../../styles/card.scss";
import Visa from "../../assets/img/visa-logo-1.png"
import Chip from "../../assets/img/chip-2.png"

const CardCover = () => {
    return (
        <div className="card">
            <img className="card-chip" src={Chip} />
            <img className="visa-logo" src={Visa} />
            <InnerForm />
        </div>
    );
};

export default CardCover;