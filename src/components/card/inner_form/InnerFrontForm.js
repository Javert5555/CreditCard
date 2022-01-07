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
                <label htmlFor="card-number" className="card-front__number focus">
                        {cardNumberGroups.map((numberGroup, index) => (
                            <div className="card-front__number-group" key={`card-front__number-group-${index}`}>
                                {numberGroup}
                            </div>
                        ))}
                </label>

                <label htmlFor="card-name" className="card-front__name focus">
                        <div className="card-front__name-title">Card Holder</div>
                        <div className="card-front__name-suptitle">full name</div>
                </label>

                <div className="card-front__date focus">
                    <div className="card-front__date-title">Expires</div>
                    <div className="card-front__date-info">
                        <label id="card-month" className="card-front__date-info-month">12</label>
                        <span className="card-front__date-info-slash">/</span>
                        <label id="card-year" className="card-front__date-info-year">22</label>
                    </div>
                </div>
            </form>
    );
};

export default InnerFrontForm;