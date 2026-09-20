import React, { useEffect, useState } from "react";
import "./PropertiesPage.css";
import api from "../api/axios";
import Header from "../components/Header";
import PropertyCard from "../components/PropertiesPageComp/PropertyCard";

const PropertiesPage = () => {
  const [properties, setProperties] = useState(null);
  const getProperties = async () => {
    try {
      const response = await api.get("/api/properties?limit=20");
      setProperties(response.data.data);
    } catch (error) {
      console.log("FAILED FETCH HOME PROPERTIES");
    }
  };
  useEffect(() => {
    getProperties();
  }, []);
  if(!properties)return <p>Loading...</p>
  return (
    <>
      <Header />
      <div class="props-page">
        <aside class="props-sidebar">
          <div class="sidebar-head">
            <h2>Filters</h2>
            <button class="reset-link">Reset</button>
          </div>

          <div class="filter-block">
            <label>Search</label>
            <input type="text" placeholder="Title, address or city..." />
          </div>

          <div class="filter-block">
            <label>Transaction</label>
            <div class="pill-group">
              <button class="pill active">All</button>
              <button class="pill">For Rent</button>
              <button class="pill">For Sale</button>
            </div>
          </div>

          <div class="filter-block">
            <label>City</label>
            <select>
              <option>All cities</option>
              <option>Rabat</option>
              <option>Casablanca</option>
              <option>Fes</option>
              <option>Marrakech</option>
            </select>
          </div>

          <div class="filter-block">
            <label>Max price (MAD)</label>
            <input type="number" placeholder="No limit" />
          </div>

          <div class="filter-block">
            <label>Bedrooms</label>
            <select>
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
        </aside>

        <main class="props-main">
          <div class="props-toolbar">
            <h1>Properties</h1>
            <span class="result-count">{properties.length} results</span>
          </div>

          <div class="props-grid">
            {properties!==null && properties.map((property , index) =>  <PropertyCard key={index} property={property}/>)}
          </div>
        </main>
      </div>
    </>
  );
};

export default PropertiesPage;
