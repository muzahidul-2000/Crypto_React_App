import { createContext, useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export const CoinContext=createContext();

function CoinContextProvider(props){
  const[allCoin,setAllCoin]=useState([]);
  const [currency,setCurrency]=useState({
    name:"usd",
    symbol:"$"
  })

  async function fetchAllCoin(){
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key':apiKey}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
      .then(response => response.json())
      .then(response =>setAllCoin(response))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchAllCoin();
  },[currency])

  const contextValue={
    allCoin,currency,setCurrency
  }
  return (
      <CoinContext.Provider value={contextValue}>
        {props.children}
      </CoinContext.Provider>
  )
}

export default CoinContextProvider;