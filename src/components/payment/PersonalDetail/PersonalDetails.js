import React from "react";

import "./PersonalDetails.scss";

export default function PersonalDetails() {
  return (
    <div className="personal-details-containner">
      <div className="heading">Payment Details</div>
      <div className="text">
        Complete your purchase by providing your personal details
      </div>
      <div className="sub-heading">Name</div>
      <input type="text" />
      <div className="sub-heading">Email Address</div>
      <input type="email" />
      <div className="sub-heading">Number</div>
      <input type="number" />
      <div className="sub-heading">Gender</div>
      <span>Male</span>
      <input type="radio" name="gender" />
      <span>Female</span>
      <input type="radio" name="gender" />
    </div>
  );
}
