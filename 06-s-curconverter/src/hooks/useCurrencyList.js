import { useState } from "react";
import { useEffect } from "react";

function useCurrencyList(currency) {
  const [data, setData] = useState({});
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyList;
