import React, { useEffect } from "react";
import InnerFrontForm from "./inner_form/InnerFrontForm";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import Visa from "../../assets/img/visa-logo-1.png"
import Chip from "../../assets/img/chip-2.png"

const CardCover = ({ cardNumber, cardHolder, cardMonth, cardYear, cardCVV }) => {

    useEffect(() => {
        let codeCVVElement = document.querySelector(".card-back__cvv-symbols");
        codeCVVElement.innerHTML = cardCVV.replace(/\d/g, "*");
    }, [cardCVV])

    return (
        <div className="card">
            <div className="card-front">
                <div id="focus"></div>
                <img className="card-chip" src={Chip} />
                <img className="visa-logo visa-logo_front" src={Visa} />
                <InnerFrontForm
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardMonth={cardMonth}
                    cardYear={cardYear}
                />
            </div>
            <div className="card-back">
                <div className="card-back__wallpaper"></div>
                <div className="card-back__strip"></div>
                <div className="card-back__cvv">
                    <p className="card-back__cvv-title">cvv</p>
                    <div className="card-back__cvv-strip">
                        <div className="card-back__cvv-symbols">{cardCVV}</div>
                    </div>
                    <img className="visa-logo visa-logo_back" src={Visa} />
                </div>
            </div>
        </div>
    );
};

CardCover.propTypes = {
    cardNumber: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
    cardMonth: PropTypes.string.isRequired,
    cardYear: PropTypes.string.isRequired,
    cardCVV: PropTypes.string.isRequired,
};

export default CardCover;