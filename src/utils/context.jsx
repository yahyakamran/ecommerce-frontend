import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [favouriteItems, setFavouriteItems] = useState([]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.Price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  useEffect(() => {}, [favouriteItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);

    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  const handleAddToFavourite = (product) => {
    let favouriteProducts = [...favouriteItems];
    let index = favouriteProducts?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      favouriteProducts = [...favouriteItems];
    } else {
      favouriteProducts = [...favouriteItems, product];
    }
    setFavouriteItems(favouriteProducts);
  };
  const handleRemoveFromFavourite = (product) => {
    let favouriteProducts = [...favouriteItems];
    favouriteProducts = favouriteProducts?.filter((p) => p.id !== product.id);
    setFavouriteItems(favouriteProducts);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleProductQuantity,
        setFavouriteItems,
        favouriteItems,
        handleAddToFavourite,
        handleRemoveFromFavourite,
      }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
