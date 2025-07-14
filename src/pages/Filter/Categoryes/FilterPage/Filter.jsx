// Filter.jsx
import React, { useState } from "react";
import "./Filter.css";
import { FaTh, FaThLarge, FaList } from "react-icons/fa";
import Sortoption from "../../../../component/SortOption/Sortoption";

import GridViewProducts from '../../../GridViewProducts/GridViewProducts';

// import LargeViewProducts from '../../../../component/ProductViews/LargeViewProducts';
// import ListViewProducts from '../../../../component/ProductViews/ListViewProducts';

function Filter() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div className="container-fluid shop-page py-4">
      <div className="row">
        {/* Sidebar - Filter */}
        <div className="col-12 col-md-3 mb-3">
          <h5 className="filter-title">
            <i className="fa-solid fa-sliders-h me-2"></i>FILTER BY
          </h5>
          <hr />
          {/* Add filter checkboxes, sliders, etc. here */}
        </div>

        {/* Main content area */}
        <div className="col-12 col-md-9">
          <div className="filter-coloumn d-flex flex-column flex-md-row align-items-start justify-content-between bg-light p-3 rounded mb-3 flex-wrap">
            {/* View toggle buttons */}
            <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
              <button
                className={`view-btn ${viewType === "grid" ? "active" : ""}`}
                onClick={() => setViewType("grid")}
              >
                <FaTh />
              </button>
              <button
                className={`view-btn ${viewType === "large" ? "active" : ""}`}
                onClick={() => setViewType("large")}
              >
                <FaThLarge />
              </button>
              <button
                className={`view-btn ${viewType === "list" ? "active" : ""}`}
                onClick={() => setViewType("list")}
              >
                <FaList />
              </button>
              <span className="text-muted small">Showing 12 of 30 results</span>
            </div>

           
            <Sortoption />
          </div>

          {/* Product view based on selection */}
          {viewType === 'grid' && <GridViewProducts />}
          {/* {viewType === 'large' && <LargeViewProducts />} */}
          {/* {viewType === 'list' && <ListViewProducts />} */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
