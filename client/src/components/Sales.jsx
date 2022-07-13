import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Stylesheet/Sales.css";

const Sales = () => {
  const [mounted, setMounted] = useState(true);
  const [product, setProducts] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("https://affordy.herokuapp.com/api/products");

    if (mounted) {
      setProducts(data);
      localStorage.setItem("data", JSON.stringify(data));
    }

    return () => {
      setMounted(false);
    };
  }, [mounted]);

  console.log(product);
  return (
    <div className="Products_container">
      {product && (
        <div className="Products">
          {product.map((item) => {
            return (
              <div className="Item">
                <img className="img" src={item.image} alt="" />
                <div className="animation">
                  <h4>{item.name}</h4>
                  <h4>{`Contact: ${item.email}`}</h4>
                  <h3>{`Owner: ${item.owner}`}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sales;
