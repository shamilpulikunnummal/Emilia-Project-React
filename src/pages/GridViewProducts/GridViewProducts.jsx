// src/pages/GridViewProducts/GridViewProducts.jsx

import React from "react";
import productData from "../../assets/data/productData";
import "./GridViewProducts.css"; // Optional, for custom styling

const GridViewProducts = () => {
  return (
    <div className="container py- ">
      <div className="row">
        {productData.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex gap-2 align-items-center">
                  <span className="text-dark fw-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>
                  )}
                </div>
                <button className="btn btn-dark w-100 mt-3">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridViewProducts;


