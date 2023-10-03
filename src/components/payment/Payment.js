import React from "react";
import "./Payment.scss";
import { BsDash } from "react-icons/bs";

import prod from "../../assets/products/earbuds-prod-1.webp";
import PersonalDetails from "./PersonalDetail/PersonalDetails.js";

export default function Payment() {
  return (
    <>
      <div className="payment-containner">
        <div className="layout">
          <div className="top">
            <h1 className="heading">Payments</h1>
            <div className="payment-sections-navigators">
              <span className="number">1</span>
              <div className="section-title">Personal Details</div>
              <BsDash />
              <BsDash />
              <BsDash />
              <BsDash />
              <BsDash />
              <span className="number">2</span>
              <div className="section-title">Shipping Details</div>
              <BsDash />
              <BsDash />
              <BsDash />
              <BsDash />
              <BsDash />
              <span className="number">3</span>
              <div className="section-title">Payment</div>
            </div>
          </div>
          <div className="sections">
            <div className="left">
              <div className="order-summary">
                <div className="left-heading">Order Summary</div>
                <span className="text">Check your items before shipping</span>
                <div className="product-wrapper">
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                  <div className="products">
                    <div className="image-container">
                      <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">product</span>
                      <div className="text">
                        <span className=" highlight">Rs 560</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="section">
                <PersonalDetails />
              </div>
              <div className="next-btn">Next</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
