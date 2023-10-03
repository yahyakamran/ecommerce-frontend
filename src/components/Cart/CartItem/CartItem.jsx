import { useContext } from "react";

import "./CartItem.scss";
import { MdClose } from "react-icons/md";

import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleProductQuantity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="image-container">
            <img
              src={
                import.meta.env.VITE_REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.Title}</span>
            <MdClose onClick={() => handleRemoveFromCart(item)} />
            <div className="quantity-buttons">
              <span onClick={() => handleProductQuantity("dec", item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleProductQuantity("inc", item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className=" highlight">Rs{item.attributes.Price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
