import React from "react";
import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.7.17/v1/currencies/${currency}.json`
        fetch(url).then((res)=> res.json()).then((res)=>{setData(res[currency]);
    console.log(data);}
    
    )
        
    },[currency])
    return data;
}


export default useCurrencyInfo