//this is a custom hook
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {

    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //https://stackoverflow.com/questions/31556450/what-is-mounting-in-react-js
        let isMounted = true; 
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        //cancel the request if the component is not loaded during the request 
        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;

    }, [dataUrl]); // dataUrl as a dep to run useEffect 

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;