import useJsonFetch from "../hooks/useJsonFetch";
import React from "react";

export default function ExpectLoading(props) {
    const result = useJsonFetch("https://hooks2-api.herokuapp.com/loading");

    return (
        <div className='wrapper b1'>
            <div className='data'>DATA: {JSON.stringify(result.data)}</div>
            <div className='error'>ERROR: {JSON.stringify(result.error)}</div>
            <div className='loading'>LOADING: {JSON.stringify(result.loading)}</div>
        </div>
    );
}
