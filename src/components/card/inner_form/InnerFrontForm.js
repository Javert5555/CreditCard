import React, { useEffect, useState } from "react";
import FourCardNumber from "./FourCardNumbers";
import "../../../styles/inner-forms.scss";


const InnerFrontForm = ({ cardNumber, cardHolder, cardMonth }) => {
    let cardNumberGroups = [];

    for (let i = 0; i < 4; i++) {
        cardNumberGroups.push(<FourCardNumber />);
    }

    useEffect(() => {
        let counts = cardNumber.replace(/\s/g, "").split("");
        let countItems = document.querySelectorAll(".card-front__number-count");
        for (let countItem of countItems) {
            countItem.innerHTML = "#";
        }
        counts.map((count, index) => {
            if (index > 3 && index < 12) {
                countItems[index].innerHTML = "*";
            } else {
                countItems[index].innerHTML = count;
            }
        });
    }, [cardNumber]);

    useEffect(() => {
        let holderName = document.querySelector(".card-front__name-suptitle");
        if (cardHolder.length === 0) {
            holderName.innerHTML = "Full Name";
        } else {
            holderName.innerHTML = cardHolder;
        }

    }, [cardHolder])

    useEffect(() => {
        let monthDate = document.querySelector(".card-front__date-info-month");
        if (cardMonth === "DEFAULT") {
            monthDate.innerHTML = "mm";
        } else {
            monthDate.innerHTML = cardMonth;
        }

    }, [cardMonth])


    return (
            <form>
                <label htmlFor="card-number" className="card-front__number focus">
                        {cardNumberGroups.map((numberGroup, index) => (
                            <div className="card-front__number-group" key={`card-front__number-group-${index}`}>
                                {numberGroup}
                            </div>
                        ))}
                </label>

                <label htmlFor="card-name" className="card-front__name focus">
                        <div className="card-front__name-title">Card Holder</div>
                        <div className="card-front__name-suptitle">Full Name</div>
                </label>

                <div className="card-front__date focus">
                    <div className="card-front__date-title">Expires</div>
                    <div className="card-front__date-info">
                        <label htmlFor="card-month" className="card-front__date-info-month">mm</label>
                        <span className="card-front__date-info-slash">/</span>
                        <label htmlFor="card-year" className="card-front__date-info-year">yy</label>
                    </div>
                </div>
            </form>
    );
};

export default InnerFrontForm;