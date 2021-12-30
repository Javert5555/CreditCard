import React, { useState } from "react";
import FourCardNumber from "./FourCardNumbers";
import "../../../styles/forms.scss";


const InnerFrontForm = () => {
    let cardNumberGroups = [];

    for (let i = 0; i < 4; i++) {
        cardNumberGroups.push(<FourCardNumber />);
    }

    return (
            <form>
                <label htmlFor="card-number" className="card-items__number focus">
                        {cardNumberGroups.map((numberGroup, index) => (
                            <div className="card-items__number__group" key={`card-items__number__group-${index}`}>
                                {numberGroup}
                            </div>
                        ))}
                </label>

                <label htmlFor="card-name" className="card-items__name focus">
                        <div className="card-items__name__title">Card Holder</div>
                        <div className="card-items__name_suptitle">full name</div>
                </label>

                <div className="card-items__date focus">
                    <div className="card-items__date__title">Expires</div>
                    <div className="card-items__date__info">
                        <label id="card-month" className="card-items__date__info__month">12</label>
                        <span className="card-items__date__info__slash">/</span>
                        <label id="card-year" className="card-items__date__info__year">22</label>
                    </div>
                </div>

            </form>
    );
};

export default InnerFrontForm;