import { useEffect , useState } from "react";
import {fetchDataFromApi} from "../utils/api";

export const useFetch = (endpoint) => {
    const [ data , setData] = useState();

    useEffect(() => {
        makeApiCall();
    },[endpoint])

    const makeApiCall = async () =>{
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    }

    return {data};
}
