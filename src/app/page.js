import React from "react";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div>
      <img
        src="/preview.jpg"
        alt="Description of the image"
        style={{ width: "100%", maxWidth: "800px", height: "300px" }}
      />
      <div>
        <ProductList />
      </div>

    </div>
    
  );
}
