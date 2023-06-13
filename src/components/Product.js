import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card">
          <div key={product.id}>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>

            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <p className="product-price">Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
