import React, { useEffect } from "react";
import setFocusStyles from "./setFocusStyles";

const FormUpperPart = ({ cardNumber, cardHolder, handlerCardNumber, handlerCardHolder}) => {
    
    const toNumberFocusStyles = {
        "top": "100px",
        "left": "15px",
        "width": "400px",
        "height": "42px",
        "opacity": "1",
    };

    const toHolderFocusStyles = {
        "top": "200px",
        "left": "15px",
        "width": "300px",
        "height": "63px",
        "opacity": "1",
    };


    useEffect(() => {
        let numberInput = document.querySelector(".input-form__number");


        numberInput.addEventListener("focus", () => {
            setFocusStyles(toNumberFocusStyles);
        });
        
        numberInput.addEventListener("blur", () => {
            setTimeout(() => {
                if (document.activeElement === document.querySelector("body")) {
                    setFocusStyles();
                }
            }, 300)
        });

        return () => {
            numberInput.removeEventListener("focus", setFocusStyles);
            numberInput.removeEventListener("blur", setFocusStyles); 
        }
    }, []);

    useEffect(() => {
        let holderInput = document.querySelector(".input-form__holder");

        holderInput.addEventListener("focus", () => {
            setFocusStyles(toHolderFocusStyles);
        });
        
        holderInput.addEventListener("blur", () => {
            setTimeout(() => {
                if (document.activeElement === document.querySelector("body")) {
                    setFocusStyles();
                }
            }, 300)
        });

        return () => {
            holderInput.removeEventListener("focus", setFocusStyles);
            holderInput.removeEventListener("blur", setFocusStyles); 
        }
    }, []);

    return (
        <div>
            <label htmlFor="card-number" className="input-form__label">
                <h2 className="input-form__title">Number:</h2>
                <input
                    id="card-number"
                    className="input-form__number"
                    name="number"
                    type="text"
                    maxLength={19}
                    value={cardNumber}
                    onChange={handlerCardNumber}
                />
            </label>
            <label htmlFor="card-name" className="input-form__label">
                <h2 className="input-form__title">Card Holder:</h2>
                <input
                    id="card-name"
                    className="input-form__holder"
                    name="holder"
                    type="text"
                    value={cardHolder}
                    onChange={handlerCardHolder}
                />
            </label>
        </div>
    );
}

export default FormUpperPart;