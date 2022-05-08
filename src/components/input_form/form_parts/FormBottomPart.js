import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useOutlineAnimation from "./useOutlineAnimation";

const FormBottomPart = ({ cardMonth, cardYear, cardCVV, handlerCardMonth, handlerCardYear, handlerCardCVV }) => {

    const months = [""],
        years = [""];

    for (let i = 1; i <= 12; i++) {
        i >= 10 ? months.push(String(i)) : months.push(`0${i}`);
    }

    for (let i = 2022; i <= 2040; i++) {
        years.push(String(i));
    }

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
                            required
                            id="card-month"
                            className="input-form__month"
                            value={cardMonth}
                            onChange={handlerCardMonth}
                        >
                            {months.map(month => {
                                return(!month ?
                                    <option value={month} key={`month-${month}`} disabled>Month</option> :
                                    <option value={month} key={`month-${month}`}>{month}</option>
                                );
                            })}
                        </select>
                    </label>
                    <label htmlFor="card-year" className="input-form__label input-form__label_year">
                        <select
                            id="card-year"
                            className="input-form__year"
                            value={cardYear}
                            onChange={handlerCardYear}
                            required
                        >
                            {years.map(year => {
                                return(!year ?
                                    <option value={year} key={`year-${year}`} disabled>Year</option> :
                                    <option value={year} key={`year-${year}`}>{year}</option>
                                );
                            })}
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
                        required
                        pattern="^\d{4}$"
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