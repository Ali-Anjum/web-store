import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoinSign,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Search_bar from "../Search_Bar";
import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";
var x=1

const Cart = () => {
  return (
    <div className="d-flex w-100 hero-cart">
      <div className="col1 m-0  ">

        <div className="your-cart-div d-flex justify-content-between head01">
          <p className=" your-cart  text-capitalize bold ">Your cart</p>
          <p className="products">0 products</p>
        </div>
        {(x==0)?<CartEmpty/>
        :<CartFilled/>}
      </div>
      <div className="col2 ">
        <p className="head01">Checkout options</p>
        <div>
          <p className="products">Payment methods</p>
          <div className="payment-method-nth-childs">
            <div className=" d-flex justify-content-between payment-method-nth-child pointer border-dark mb-2 ">
              <p className="head02 bold my-auto ">Crypto</p>
              <p  className="my-auto">
                {" "}
               <FontAwesomeIcon  icon={faBitcoinSign} />
              </p>
            </div>
            <div className=" d-flex justify-content-between payment-method-nth-child pointer">
              <p className="head02 bold my-auto">Cashapp</p>
              <p  className="my-auto">
                {" "}
                <FontAwesomeIcon icon={faDollarSign} />
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between use-bal-div ">
            <p className="products ">Use account balance (0.00$)</p>
            <input className="" checked type="checkbox" />
          </div>
          <div className="email-div payment-method mx-0 p-0">
            <p className="products">Continue as guest</p>
            <Search_bar
              width={"100%"}
              text={" Type your email"}
              Icondisplay={"d-none"}
              InputWidth={"100"}
            />
          </div>
          <div className="sub-bal">
            <div className="sub-total d-flex justify-content-between">
              <p className="head02 ">subtotal</p>
              <p> 0.00$</p>
            </div>

            <div className="bal d-flex justify-content-between">
              <p>Bal</p>
              <p>29$</p>
            </div>
          </div>
          <div className="total-div d-flex justify-content-between head01 bold">
            <p>Total</p>
            <p> 35$</p>
          </div>
          <button className="button-1 w-100 head02 centered bold  " style={{border:'none'}}>
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
