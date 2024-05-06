import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

var n = 1;

const BuyPopup = (props) => {
 // console.log(props.passedData.keyPoints);
  return props.yes ? (
    <div
      id="pop"
      className="pop-up-div"
      onClick={props.value}
      style={{ zIndex: "1" }}
    >
      <div className="pop-up-inner" onClick={(e) => e.stopPropagation()}>
        <div className="heading">
          <p className="head01">{props.passedData.name} </p>
        </div>
        <hr />
        <div className="heading">
          <p className="text-top">{props.passedData.textTop}</p>
          <ul className="text-decoration-none" style={{ listStyle: "square" }}>
            {Object.keys(props.passedData.keyPoints).map((key, index) => (
              <li className="text-top" key={index}>
                {props.passedData.keyPoints[key]}
              </li>
            ))}

            {/*<li className='text-top'>Once you purchase a key, message our bot on</li>
           <li className='text-top'>Once you purchase a key, message our bot on</li>
          <li className='text-top'>Once you purchase a key, message our bot on</li>*/}
          </ul>
        </div>
        <div className="Tags-hero heading mt-0 py-0">
          <p className="head02">Tags</p>
          <div className="d-flex">
            {Object.keys(props.passedData.tags).map((key, index) => (
              <div
                className={
                  key == 1
                    ? "tag bg-white text-black"
                    : key == 2
                    ? "tag"
                    : "tag bg-dark text-success"
                }
              >
                {props.passedData.tags[key]}
              </div>
            ))}
            {/*<div className='tag'>Shopping</div>
            <div className='tag bg-white text-black'>New products</div>*/}
          </div>
        </div>
        <div className="heading">
          <p className="mb-0">Products</p>
          <select className="select-variant centered">
            {Object.keys(props.passedData.variants).map((key, index) => (
              <option className="" key={index}>
                <p >{props.passedData.variants[1].name}</p>
                <p >{props.passedData.variants[1].price}</p>
                <p>{props.passedData.variants[1].stock}</p>
              </option>
            ))}

            {/*    <option value="volvo">"&lt;p className='text-success'&gt;gfgh&lt;/p&gt;products-dropdown-value"</option>
            <option value="mercedes">"products-dropdown-value"45678</option>
            <option value="audi">"products-dropdown-value"`1234567890</option>*/}
          </select>
        </div>
        <div className="heading pt-0">
          <p className="mb-0">Amount to add</p>
          <input
            type="number"
            className="select-variant centered"
            value={"1"}
            max={"500"}
            min={"1"}
          />
        </div>
        <div className="heading pt-0 px-0">
          <button
            className="button-1 centered text-center"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "90%" }}
          >
            <p className="mb-0 head1">
              <FontAwesomeIcon icon={faCartShopping} />
              Buy it at <span>{props.passedData.price}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BuyPopup;
