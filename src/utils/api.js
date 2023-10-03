import axios from "axios";

const parms = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_REACT_APP_STRAPI_TOKEN_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_REACT_APP_DEV_URL + url,
      parms
    );
    return data;
  } catch (error) {
    console.log(error);
    console.log(import.meta.env.VITE_REACT_APP_DEV_URL);
    return error;
  }
};
