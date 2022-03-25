import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate, Link, useParams } from 'react-router-dom'
import "../css/Payment.css";

const Payment = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  const navigate = useNavigate();

  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  const checkout = () => {

    const pay = async (e) => {
        e.preventDefault()
        const url =localStorage.getItem("url")
            localStorage.setItem("Payed", true)
            console.log(localStorage.getItem("Payed"))
            navigate(url)
    }

    return <button className='card-button-pay' onClick={pay}>Checkout</button>
}

  return (
    <div style={{marginTop: ""}}>
     <div> <img width='100%' height='740px' className='payment-image' src={window.location.origin + '/music hero-05.png'} alt='payment'></img></div>

    <div className="credit-card" style={{marginTop: "300px !important"}}>
      <div className="rccs__card rccs__card--unknown">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>

      {/* CARD NUMBER */}
      <br />
      <form>
        <div className="row">
          <div className="col-sm-11">
            <label for="name">Card Number
            <input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
            </label>
          </div>
        </div>
        <br />

        {/* CARD Name */}
        <div className="row">
          <div className="col-sm-11">
            <label for="name">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />

        <div className="row1">
          <div className = "Label1">
            <label for="month">Expiration Date</label>
          </div>
          <div className = "Label2">
            <label for="cvv">CVV</label>
          </div>
        </div>

        <div className="row rowlast">

          {/* CARD MONTH */}
          <div className="col-sm-4">
            <select
              className="form-control1"
              name="expiry"
              onChange={handleDate}
            >
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
         
          {/* CARD YEAR */}
          <div className="col-sm-4">
            <select
              className="form-control1"
              name="expiry"
              onChange={handleExpiry}
            >
              <option value=" ">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>

          {/* CARD CVC CODE */}
          <div className="col-sm-3">
            <input
              type="tel"
              name="cvc"
              maxlength="3"
              className=" form-control2 cvvstyle card"
              value={cvc}
              pattern="\d*"
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />

        {/* CARD CONFIRM BUTTON */}
       <div>{checkout()}</div>
      </form>
    </div>
    </div>
  );
};
export default Payment;