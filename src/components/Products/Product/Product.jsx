import "./Product.scss";

import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Context } from "../../../utils/context";
import { useContext } from "react";

const Product = ({ id, data, product }) => {
  let { handleAddToFavourite } = useContext(Context);

  const navigate = useNavigate();

  const navigateToSinglePage = () => {
    navigate("/product/" + id);
  };

  return (
    <div className="product-card">
      <div className="thumnail" onClick={navigateToSinglePage}>
        <img
          src={
            import.meta.env.VITE_REACT_APP_DEV_URL +
            data?.img?.data[0]?.attributes.url
          }
          alt=""
        />
      </div>
      <div
        className="heart"
        onClick={() => {
          handleAddToFavourite(product);
        }}>
        <AiOutlineHeart />
      </div>
      <div className="product-details">
        <span className="Name">{data?.Title}</span>
        <span className="price">Rs {data?.Price}</span>
      </div>
    </div>
  );
};

export default Product;
