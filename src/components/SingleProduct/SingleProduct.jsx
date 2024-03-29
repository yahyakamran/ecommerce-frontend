import { useState, useContext } from "react";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const { handleAddToCart } = useContext(Context);

  if (!data) return;
  const product = data.data[0].attributes;

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div className="single-product-content">
      <div className="layout">
        <div className="page-content">
          <div className="left">
            <img
              src={
                import.meta.env.VITE_REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.Title}</span>
            <span className="price">RS. {product.Price}</span>
            <span className="desc">{product.Description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <div
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}>
                <FaCartPlus size={20} />
                Add to cart
              </div>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="bold-text">
                Category:{" "}
                <span>{product.categories.data[0].attributes.Title}</span>
              </span>
              <span className="bold-text">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
