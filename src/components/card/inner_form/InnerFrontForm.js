import React, { useEffect, useState } from "react";
import FourCardNumber from "./FourCardNumbers";
import setFocusStyles from "../../input_form/form_parts/setFocusStyles";
import "../../../styles/inner-forms.scss";


const InnerFrontForm = ({ cardNumber, cardHolder, cardMonth, cardYear }) => {
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
                // hide the 8 central digits of the card
            } else {
                countItems[index].innerHTML = count;
            }
        });
    }, [cardNumber]);

    useEffect(() => {
        let holderName = document.querySelector(".card-front__name-suptitle");
        if (cardHolder.length === 0) {
            holderName.innerHTML = "Full Name";
        } else if (cardHolder.length >= 25) {
            holderName.innerHTML = `${cardHolder.slice(0,23)}&#133`;
            // if the line exceeds the element boundaries, trim it
        } else {
            holderName.innerHTML = cardHolder;
        }

    }, [cardHolder]);

    useEffect(() => {
        let monthDate = document.querySelector(".card-front__date-info-month");
        if (cardMonth === "DEFAULT") {
            monthDate.innerHTML = "mm";
        } else {
            monthDate.innerHTML = cardMonth;
        }

    }, [cardMonth]);

    useEffect(() => {
        let cardDate = document.querySelector(".card-front__date-info-year");
        if (cardYear === "DEFAULT") {
            cardDate.innerHTML = "yy";
        } else {
            cardDate.innerHTML = cardYear.slice(2,4);
        }

    }, [cardYear]);

    // const holderClasses = ["card-front__name", "card-front__name-title", "card-front__name-suptitle"];
    // const numberClasses = ["card-front__number", "card-front__number-group", "card-front__number-item", "card-front__number-count"];
    
    // const toNumberFocusStyles = {
    //     "top": "100px",
    //     "left": "15px",
    //     "width": "400px",
    //     "height": "42px",
    //     "opacity": "1",
    // };

    // const toHolderFocusStyles = {
    //     "top": "200px",
    //     "left": "15px",
    //     "width": "300px",
    //     "height": "63px",
    //     "opacity": "1",
    // };


    // window.addEventListener("click", ({ target }) => {
    //     if(holderClasses.some((holderClass) => holderClass === target.className)) {
    //         setFocusStyles(toHolderFocusStyles);
    //         console.log(123)
    //     } else if (numberClasses.some((numberClass) => numberClass === target.className)) {
    //         setFocusStyles(toNumberFocusStyles);
    //     }
    // })



    return (
            <form>
                <label htmlFor="card-number" className="card-front__number"> {/* focus */}
                        {cardNumberGroups.map((numberGroup, index) => (
                            <div className="card-front__number-group" key={`card-front__number-group-${index}`}>
                                {numberGroup}
                            </div>
                        ))}
                </label>

                <label htmlFor="card-name" className="card-front__name"> {/* focus */}
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