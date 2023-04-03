import axios from "axios";


const parms = {
    headers : {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN_KEY,  
    },
}

export const fetchDataFromApi = async (url) =>{
    try {

        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            parms
        )       
        return data

    } catch (error) {

        console.log(error);
        return error;

    }
}