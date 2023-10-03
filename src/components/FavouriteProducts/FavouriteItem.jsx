import "./FavouriteItem.scss";

import { MdClose } from "react-icons/md";

import { useContext } from "react";
import { Context } from "../../utils/context";

const FavouriteItem = ({ setShowFavourites }) => {
  let { favouriteItems, handleRemoveFromFavourite } = useContext(Context);

  return (
    <>
      <div className="favourite-item-content">
        Favourites
        <div className="layout">
          <div
            className="close-favourite"
            onClick={() => {
              setShowFavourites(false);
            }}>
            <MdClose />
          </div>
          <div className="favourite-items">
            {favouriteItems.map((item) => (
              <div key={item.id} className="favourite-item">
                <div className="image-container">
                  <img
                    src={
                      import.meta.env.VITE_REACT_APP_DEV_URL +
                      item?.attributes?.img?.data[0]?.attributes?.url
                    }
                    alt=""
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item?.attributes?.Title}</span>
                  <span className="desc">{item?.attributes?.Description}</span>
                </div>
                <div
                  className="close"
                  onClick={() => {
                    handleRemoveFromFavourite(item);
                  }}>
                  <MdClose />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteItem;
