import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";
import AuthContext from "../services/AuthContext";
import $ from "jquery";
import { ReactSession } from 'react-client-session';

const AlertStyle = {
  display: "none"
}

const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    age: null,
    phone: "",
    country: "",
    userType: "",
  })

  const [trainer, setTrainer] = useState({
    userId: "",
    certificate: "",
    speciality: ""

  })

  const [userID, setUserID] = useState([])

  const [errorMessage, setErrorMessage] = useState('');

  const [className, setClassName] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setTrainer({ ...trainer, [e.target.name]: e.target.value });
  }

  ReactSession.setStoreType("localStorage");
  const username = ReactSession.get("email");

  userID.map((ID) => {
    console.log(ID._id)
    trainer.userId = ID._id
    })


  // jquery for trainer or trainee
  $("#Trainee").change(function () {
    var value = this.value;
    if (value == "Trainee") {
      $("#extra").hide();
    }
    else if (value == "Trainer") {
      $("#extra").show();
    }
  }
  );

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()


    const userData = {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      password: user.password,
      age: user.age,
      phone: user.phone,
      country: user.country,
      userType: user.userType,
    };
    ReactSession.set("email", user.email);

    const trainerData = {
      userId: trainer.userId,
      certificate: trainer.certificate,
      speciality: trainer.speciality
    };

    axios
      .post("http://localhost:5000/users/register", userData)

      .then((response) => {
        console.log(response.status)

        if (response.status === 200) {

          setErrorMessage(("Signed Up successfully"));
          setClassName("alert alert-success")
          document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
          getLoggedIn();
          navigate("/");
        }

      }).catch((error) => {
        if (error.response.status === 400) {
          setErrorMessage((error.response.data.message));
          setClassName("alert alert-danger1")
          document.getElementsByClassName("alert alert-danger1")[0].style.display = 'block';
        }

      });

    if (trainer.certificate != "" && trainer.speciality != "") {
      axios
        .post("http://localhost:5000/trainers", trainerData)


        .then((response1) => {
          console.log(response1.status)

          if (response1.status === 200) {
            setErrorMessage(("Signed Up successfully"));
            setClassName("alert alert-success")
            document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
            getLoggedIn();
            navigate("/");
          }

        }).catch((error1) => {
          if (error1.response1.status === 400) {
            setErrorMessage((error1.response1.data.message));
            setClassName("alert alert-danger1")
            document.getElementsByClassName("alert alert-danger1")[0].style.display = 'block';
          }

        });
    }


  console.log(userData);
};

axios.get('http://localhost:5000/users/?email=' + username)
.then(response2 => {
  setUserID(response2.data)
})
.catch(e => {
  console.log(e)
})






return (
  <div className="register-card">

    <img className='register-img' src={window.location.origin + '/doSome.png'} alt='Sign In'></img>
    <form onSubmit={handleSubmit} className="form-form">
      <div className="register-card2">
        <div className='register-Title'>Register</div>
        <div className='register-Text'>Trainee or Trainer?</div>
        <div className={className} style={AlertStyle} role="alert">{errorMessage} </div>
        <form className="register-form"  >
          <div>
            <input className="register-Input-name" type="text" id="fname" name="fname" placeholder='First Name' onChange={handleChange} value={user.fname}></input>
            <input className="register-Input-name" type="text" id="lname" name="lname" placeholder='Last Name' onChange={handleChange} value={user.lname}></input>
          </div>
          <div>
            <input className="register-Input-phone" type="number" id="phone" name="phone" placeholder='Phone Number' onChange={handleChange} value={user.phone}></input>
            <select className="select" id="country" name="country" onChange={handleChange} value={user.country}>
              <option value="" >Country</option >
              <option value="Afganistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire">Bonaire</option>
              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Canary Islands">Canary Islands</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Channel Islands">Channel Islands</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Island">Cocos Island</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote DIvoire">Cote DIvoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curaco">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Ter">French Southern Ter</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Indonesia">Indonesia</option>
              <option value="India">India</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea North">Korea North</option>
              <option value="Korea Sout">Korea South</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Midway Islands">Midway Islands</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nambia">Nambia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherland Antilles">Netherland Antilles</option>
              <option value="Netherlands">Netherlands (Holland, Europe)</option>
              <option value="Nevis">Nevis</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau Island">Palau Island</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Phillipines">Philippines</option>
              <option value="Pitcairn Island">Pitcairn Island</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Republic of Montenegro">Republic of Montenegro</option>
              <option value="Republic of Serbia">Republic of Serbia</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="St Barthelemy">St Barthelemy</option>
              <option value="St Eustatius">St Eustatius</option>
              <option value="St Helena">St Helena</option>
              <option value="St Kitts-Nevis">St Kitts-Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="St Maarten">St Maarten</option>
              <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
              <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
              <option value="Saipan">Saipan</option>
              <option value="Samoa">Samoa</option>
              <option value="Samoa American">Samoa American</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome & Principe">Sao Tome & Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tahiti">Tahiti</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks & Caicos Is">Turks & Caicos Is</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Erimates">United Arab Emirates</option>
              <option value="United States of America">United States of America</option>
              <option value="Uraguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City State">Vatican City State</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
              <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
              <option value="Wake Island">Wake Island</option>
              <option value="Wallis & Futana Is">Wallis & Futana Is</option>
              <option value="Yemen">Yemen</option>
              <option value="Zaire">Zaire</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <hr></hr>
          <div>
            <input className="register-Input-name" type="text" id="email" name="email" placeholder='Email' onChange={handleChange} value={user.email} ></input>
            <input className="register-Input-name" type="password" id="signin-password" name="password" placeholder='Password' onChange={handleChange} value={user.password} ></input>
          </div>
          <div className="age-trainer">
            <div>
              <input className="register-Input-phone" type="number" id="age" name="age" placeholder='Age' onChange={handleChange} value={user.age} ></input>
              {/* <label for="file1" class="btn new_cover">Upload new cover</label>
                                <input id="file1" name="file1" style="visibility:hidden;" type="file">  </input> */}
            </div>

            <select className="select" id="Trainee" name="userType" onChange={handleChange} value={user.userType}>
              <option value="">User Type</option>
              <option value="Trainee">Trainee</option>
              <option value="Trainer">Trainer</option>
            </select>
          </div>

          <div className="hide" id="extra" >
            <input type="text" className="register-Input-phone" name="certificate" onChange={handleChange} placeholder='Certificate' value={trainer.certificate} />
            <input type="text" className="register-Input-phone" name="speciality" onChange={handleChange} placeholder='Speciality' value={trainer.speciality} />
          </div>

        </form>
        <div className='register-ligne'>
          <input className='register-join-Now' type='submit' value="Submit" />
          <div className='register-register-block'>Don't have an account? <br></br><Link className='register-register-link' to={"/login"}>Please Sign In </Link> </div>
        </div>
      </div>
    </form>
  </div>

)

}

export default Register