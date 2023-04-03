import "./Footer.scss";
import React from "react";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        sequi? Voluptates architecto quod, laboriosam ea quas avoluptatibus velit eaque quaerat. Libero obcaecati ipsam,ducimus animi, dicta id molestiae,reproribus quaerat exceptur
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">House no 34, block no 34,Khushab</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">Phone : 045 56743928</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">Email : yahyakamran099@gmail.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speaker</span>
                    <span className="text">Wireless Earbud</span>
                    <span className="text">Projector</span>
                    <span className="text">Home threater</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Retruns</span>
                    <span className="text">Terms & conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bar-content">
                    <div className="text">DEMOSTORE 2023 created by Yahya.  Premium E-commerce website</div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
