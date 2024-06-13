import { useState, useEffect, useRef } from 'react';
import axios from "axios";
const cache = {};

const useFetchUser = (userId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [triggerFetch, setTriggerFetch] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            if (cache[userId]) {
                setData(cache[userId]);
                setLoading(false);
                return;
            }
            await axios.get(`https://dummyjson.com/users/${userId}`)
                .then((response) => {
                    setLoading(false);
                    cache[userId] = response.data;
                    setData(response.data);
                })
                .catch((error)=>{
                    setError(error);
                })
                .finally(() =>{
                    setLoading(false);
                })
            ;
        };

        if (userId) {
            fetchData();
        }
    }, [userId, triggerFetch]);

    const refresh = () => {
        setTriggerFetch(prev => !prev);
    };

    return { data, loading, error, refresh };
};

export default useFetchUser;