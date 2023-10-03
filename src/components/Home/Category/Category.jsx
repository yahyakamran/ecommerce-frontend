import "./Category.scss";

import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigator = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigator(`/category/${item.id}`)}>
            <img
              src={
                import.meta.env.VITE_REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
