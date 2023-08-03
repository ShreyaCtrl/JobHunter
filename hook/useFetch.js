import { useState, useEffect } from "react";
import axios from "axios";
// import dotenv from 'dotenv';
import { RAPID_API_KEY } from "@env";

const RapidAPI = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RapidAPI,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    try {
        const response = await axios.request(options);

        setData(response.data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
        alert('There is an error');
    } finally {
        setIsLoading(false);
    }   
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;