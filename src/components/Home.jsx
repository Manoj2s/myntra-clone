import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import "./Home.css";

const Home = ({ category }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchData = async (page, category) => {
    try {
      const response = await axios.get(
        `https://flipkartbackend-data.onrender.com/data?page=${page}&limit=10&category=${category}`
      );
      const newData = response.data;
      setData((prevData) => [...prevData, ...newData]);
      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData(page, category);
  }, [page, category]);

  const lastItemElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className="homeContainer">
      {data.map((item, index) => {
        const imageUrls = JSON.parse(item.image)[0];
        if (data.length === index + 1) {
          return (
            <div className="itemBox" key={item._id} ref={lastItemElementRef}>
              <img
                src={imageUrls}
                alt={item.product_name}
                className="productImage"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <h1>{item.product_name}</h1>
              <p className="retailPrice">Retail Price: {item.retail_price}</p>
              <p className="discountPrice">
                Discounted Price: {item.discounted_price}
              </p>
              <div className="buttonContainer">
                <button className="wishlistButton">Add to Wishlist</button>
                <button className="bagButton">Add to Bag</button>
              </div>
            </div>
          );
        } else {
          return (
            <div className="itemBox" key={item._id}>
              <img
                src={imageUrls}
                alt={item.product_name}
                className="productImage"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <h1>{item.product_name}</h1>
              <p className="retailPrice">Retail Price: {item.retail_price}</p>
              <p className="discountPrice">
                Discounted Price: {item.discounted_price}
              </p>
              <div className="buttonContainer">
                <button className="wishlistButton">Add to Wishlist</button>
                <button className="bagButton">Add to Bag</button>
              </div>
            </div>
          );
        }
      })}
      {!hasMore && <p>No more products to display</p>}
    </div>
  );
};

export default Home;
