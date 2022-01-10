import React from "react";
import InnerFrontForm from "./inner_form/InnerFrontForm";
import "../../styles/card.scss";
import Visa from "../../assets/img/visa-logo-1.png"
import Chip from "../../assets/img/chip-2.png"

const CardCover = () => {
    return (
        <div className="card">
            <div className="card-front">
                <img className="card-chip" src={Chip} />
                <img className="visa-logo visa-logo_front" src={Visa} />
                <InnerFrontForm />
            </div>
            <div className="card-back">
                <div className="card-back__wallpaper"></div>
                <div className="card-back__strip"></div>
                <div className="card-back__cvv">
                    <p className="card-back__cvv-title">cvv</p>
                    <div className="card-back__cvv-strip">
                        <div className="card-back__cvv-symbols">
                            <span className="card-back__cvv-symbol">*</span>
                            <span className="card-back__cvv-symbol">*</span>
                            <span className="card-back__cvv-symbol">*</span>
                            <span className="card-back__cvv-symbol">*</span>
                        </div>
                    </div>
                    <img className="visa-logo visa-logo_back" src={Visa} />
                </div>
            </div>
        </div>
    );
};

export default CardCover;