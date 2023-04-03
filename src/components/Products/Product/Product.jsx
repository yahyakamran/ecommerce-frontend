import "./Product.scss";

import {useNavigate} from "react-router-dom";


const Product = ({id , data}) => {

        const navigate = useNavigate()

    return (
        <div className="product-card" onClick={()=>navigate("/product/" + id)}>
            <div className="thumnail">
                <img src={process.env.REACT_APP_DEV_URL + data?.img?.data[0]?.attributes.url} alt="" />
            </div>
            <div className="product-details">
                <span className="Name">{data?.Title}</span>
                <span className="price">Rs {data?.Price}</span>                
            </div>
        </div>
    );
};

export default Product;
