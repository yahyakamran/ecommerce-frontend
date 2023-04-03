import { useContext } from "react";

import "./Cart.scss";

import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

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
                        <button className="checkout-cta">
                            Checkout
                        </button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
};

export default Cart;
