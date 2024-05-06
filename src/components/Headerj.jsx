import React from "react";
import Logo from "../data/IMAGE.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import List from "./List";
import { useState } from "react";
import { Link } from "react-router-dom";

const Headerj = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="headers  ">
      <div className="d-flex justify-content-between">
        <a href="/">
          <img src={Logo} alt="Logo"  />
          </a>
        <List />
        <div className="bg ">
          <a className="cart text-decoration-none button-2" href="/cart">
            <FontAwesomeIcon icon={faCartShopping} /> 0.0$
          </a>
          <a className="button-2 text-decoration-none" href="/login"> login</a>
          <a className="button-1 head2 text-decoration-none" href="/Signup"> Sign up</a>
        </div>
        <div className="d-none  hamburger-hero ">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div
            id="hamburger"
            className={`mx-auto ${isOpen ? "d-block" : "d-none"}`}
          >
            <button className="text-white align-right button-X" onClick={()=> setIsOpen(!isOpen)} >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize:'40px' }}
              />
            </button>
            <button
              className="cart text-decoration-none button-2 border-none centered my-auto"
              style={{ border: "none", width: "90%" }}
            >
              <FontAwesomeIcon  icon={faCartShopping} /> 0.0$
            </button>
            <button
              className="button-2 text-decoration-none w-100 centered"
              style={{ border: "none", width: "90%" }}
            >
              login
            </button>
            <button className="button-1 head2 text-decoration-none w-100 centered"
            style={{ border: "none", width: "90%" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerj;
