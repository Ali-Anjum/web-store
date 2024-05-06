import React from "react";
import Search_bar from "../Search_Bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
  return (
    <div>
            <form>
      <div className="div-text-login text-center ">
        <p className="head01 bold"> Sign-Up</p>
      </div>
      <div className="div-username div-email">
        <Search_bar
          Icondisplay={"d-none "}
          centered={"centered"}
          width={"75%"}
          text={" Username"}
          InputWidth={'100'}
        />


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
      <div className="div-password div-email">
        <Search_bar 
          Icondisplay={"d-none"}
          centered={"centered"}
          width={"75%"}
          text={" Password"}
          InputWidth={'100'}
        />
        </div>
        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={null}/>

        <div>
        <button className="button-1  centered button-login head02 ">
          <span>Sign up</span>
          
           </button>

        </div>

    </form>
    </div>
  )
}

export default SignUp