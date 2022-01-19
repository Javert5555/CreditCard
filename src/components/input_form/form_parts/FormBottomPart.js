import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useOutlineAnimation from "./useOutlineAnimation";

const FormBottomPart = ({ cardMonth, cardYear, cardCVV, handlerCardMonth, handlerCardYear, handlerCardCVV }) => {
    const handlerCvv = ({ target }) => {
        if (target.id === "card-cvv") {
            document.querySelector(".card-front").style.transform = "rotateY(180deg)";
            document.querySelector(".card-back").style.transform = "rotateY(360deg)";
        } else {
            document.querySelector(".card-front").style.transform = "rotateY(0deg)";
            document.querySelector(".card-back").style.transform = "rotateY(180deg)";
        }
        // if you click on the cvv code, the card will rotate 180 degrees
        // else the card stays in the same position or is rotated to its original position
    };
    
    useEffect(() => {
        window.addEventListener("click", handlerCvv);
        return () => {
            window.removeEventListener("click", handlerCvv);
        }
    }, []);

    useOutlineAnimation(".card-front__date", ".input-form__month");
    useOutlineAnimation(".card-front__date", ".input-form__year");
    useOutlineAnimation(".card", ".input-form__cvv");

    return (
        <div className="input-form__bottom-part">
            <div className="input-form__exp-date">
                <h2 className="input-form__title">Expiration Date:</h2>
                <div className="input-form__exp-date_inner">
                    <label htmlFor="card-month" className="input-form__label input-form__label_month">
                        <select
                            id="card-month"
                            className="input-form__month"
                            value={cardMonth}
                            onChange={handlerCardMonth}
                        >
                            <option value="DEFAULT" disabled>Month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>

                        </select>
                    </label>
                    <label htmlFor="card-year" className="input-form__label input-form__label_year">
                        <select
                            id="card-year"
                            className="input-form__year"
                            value={cardYear}
                            onChange={handlerCardYear}
                        >
                            <option value="DEFAULT" disabled>Year</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                        </select>
                    </label>
                </div>
            </div>
            <div id="input-form__label_cvv" className="input-form__cvv-container">
                <label htmlFor="card-cvv" className="input-form__label">
                    <h2 className="input-form__title">CVV:</h2>
                    <input
                        id="card-cvv"
                        className="input-form__cvv"
                        name="cvv"
                        type="text"
                        maxLength={4}
                        value={cardCVV}
                        onChange={handlerCardCVV}
                    />
                </label>
            </div>
        </div>
    );
};

FormBottomPart.propTypes = {
    cardMonth: PropTypes.string.isRequired,
    cardYear: PropTypes.string.isRequired,
    cardCVV: PropTypes.string.isRequired,
    handlerCardMonth: PropTypes.func.isRequired,
    handlerCardYear: PropTypes.func.isRequired,
    handlerCardCVV: PropTypes.func.isRequired,
};

export default FormBottomPart;