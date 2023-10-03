import { useContext } from "react";

import "./Cart.scss";

import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import GooglePayButton from "@google-pay/button-react"

import { Context } from "../../utils/context";

const Cart = ({setShowCart}) => {
    const {cartSubTotal,cartItems} = useContext(Context)

    return (
        <div className="cart-panel">
            <div className="opac-layyer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="cart-heading">Shoping Cart</span>
                    <span className="close-btn" 
                    onClick={() => setShowCart(false)}
                    >
                        <MdClose/>
                        <span className="text">close</span>
                    </span>
                </div>
                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX/>
                    <span>No Item in the Cart</span>
                    <button className="retrun-cta">RETRUN TO SHOPING</button>
                </div>}
                {!!cartItems?.length &&
                <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="sub-total">
                        <span className="text">Subtotal:</span>
                        <span className="text total">RS {cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <GooglePayButton
                            environment="TEST"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                {
                                    type: 'CARD',
                                    parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                    },
                                },
                                ],
                                merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                                },
                                transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: '100.00',
                                currencyCode: 'USD',
                                countryCode: 'US',
                                },
                            }}
                            onLoadPaymentData={paymentRequest => {
                                console.log('load payment data', paymentRequest);
                            }}
                            buttonType="pay"
                        />
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
};

export default Cart;
