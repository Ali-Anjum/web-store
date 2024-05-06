import React ,{useRef }from "react";
import Search_bar from "../Search_Bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import ReCAPTCHA from "react-google-recaptcha";
// require('dotenv').config()



const Login = () => {
  const captchaRef = useRef(null)
  const handleSubmit = (e) =>{
    e.preventDefault();
    const token = captchaRef.current.getValue();
    console.log('captcha check','6LeHBCQpAAAAANIw0O2jGskeYCodP3FtRH21IUes')
    captchaRef.current.reset();

}
  
  return (

    <form onSubmit={handleSubmit}>
      <div className="div-text-login text-center ">
        <p className="head01 bold"> Login</p>
      </div>
      <div className="div-email">
        <Search_bar
          Icondisplay={"d-none"}
          centered={"centered"}
          width={"75%"}
          text={" Type your email"}
          InputWidth={'100'}
        />


      </div>
      <div className="div-password div-email password">
        <Search_bar type={'password'}
          Icondisplay={"d-none"}
          centered={"centered"}
          width={"75%"}
          text={"Password"}
          InputWidth={"100"}
        />
        </div>
        <div className="centered mx-auto w-25 ">
        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef}/>
        </div>


        <div>
        <button className="button-1  centered button-login head02 ">
        <FontAwesomeIcon icon={faRightToBracket} className="button-login-icon " />
          <span>Login</span>
          
           </button>

        </div>

    </form>
  );
};

export default Login;
