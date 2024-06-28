import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const responce = await axios.get(
        "https://flipkartbackend-data.onrender.com/data"
      );
      setData(responce.data);
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item._id}>
            {/* <img src={item[0].image} alt="product" /> */}
            <h1>{item._id}</h1>
            <h1>{item.product_name}</h1>
            <h1>{item.discounted_price}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Data;
