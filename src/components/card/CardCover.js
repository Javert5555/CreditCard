import React from "react";
import InnerFrontForm from "./InnerForm/InnerFrontForm";
import "../../styles/card.scss";
import Visa from "../../assets/img/visa-logo-1.png"
import Chip from "../../assets/img/chip-2.png"

const CardCover = () => {
    return (
        <div className="card">
            <div className="card__front">
                <img className="card-chip" src={Chip} />
                <img className="visa-logo visa-logo_front" src={Visa} />
                <InnerFrontForm />
            </div>
            <div className="card__back">
                <div className="card__back__wallpaper"></div>
                <div className="card__back__strip"></div>
                <div className="card__back__cvv">
                    <p className="card__back__cvv__title">cvv</p>
                    <div className="card__back__cvv__strip">
                        <div className="card__back__cvv__strip__symbols">
                            <span className="card__back__cvv__strip__symbol">*</span>
                            <span className="card__back__cvv__strip__symbol">*</span>
                            <span className="card__back__cvv__strip__symbol">*</span>
                            <span className="card__back__cvv__strip__symbol">*</span>
                        </div>
                    </div>
                    <img className="visa-logo visa-logo_back" src={Visa} />
                </div>
            </div>
        </div>
    );
};

export default CardCover;