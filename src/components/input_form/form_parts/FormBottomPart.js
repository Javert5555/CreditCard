import React from "react";

const FormBottomPart = ({ cardMonth, changeCardMonth}) => {

    return (
        <div className="input-form__bottom-part">
            <div className="input-form__exp-date">
                <h2 className="input-form__title">Expiration Date:</h2>
                <div className="input-form__exp-date_inner">
                    <label htmlFor="card-month" className="input-form__label">
                        <select
                            id="card-month"
                            className="input-form__month"
                            // defaultValue="DEFAULT"
                            value={cardMonth}
                            onChange={changeCardMonth}
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
                    <label htmlFor="card-year" className="input-form__label">
                        <select
                            id="card-year"
                            className="input-form__year"
                            defaultValue="DEFAULT"
                            // value={}
                            // onChange={}
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
            <label htmlFor="card-cvv" className="input-form__label">
                <h2 className="input-form__title">CVV:</h2>
                <input
                    id="card-cvv"
                    className="input-form__cvv"
                    name="cvv"
                    type="text"
                    maxLength={3}
                    // value={}
                    // onChange={}
                />
            </label>
        </div>
    );
}

export default FormBottomPart;