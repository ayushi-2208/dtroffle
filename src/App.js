import React from "react";
import Product from "./components/Product";
import "./App.css";

const App = () => {
  return (
    <div style={{marginBottom:"20px"}}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Product List
      </h1>

      <Product />
    </div>
  );
};

export default App;
