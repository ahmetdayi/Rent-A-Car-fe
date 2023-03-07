import React from 'react';
import axios from "axios"

const Http = {

    POST: async (url,_data,_headers) => {
        const result = await axios({
            url:url,
            method:"POST",
            data:_data,
            headers:{
                ..._headers
            },
        });
        return result;
    },
    PUT: async (url,_data,_headers) => {
        const result = await axios({
            url:url,
            method:"PUT",
            data:_data,
            headers:{
                ..._headers
            },
        });
        return result;
    },
    DELETE: async (url,_data,_headers) => {
        const result = await axios({
            url:url,
            method:"DELETE",
            data:_data,
            headers:{
                ..._headers
            },
        });
        return result;
    },
    GET: async (url,_data,_headers) => {
        const result = await axios({
            url:url,
            method:"GET",
            data:_data,
            headers:{
                ..._headers
            },
        });
        return result;
    },
};

export default Http;