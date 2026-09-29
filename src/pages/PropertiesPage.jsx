import React, { useEffect, useState } from "react";
import "./PropertiesPage.css";
import api from "../api/axios";
import Header from "../components/Header";
import PropertyCard from "../components/PropertiesPageComp/PropertyCard";

const PropertiesPage = () => {
  const [properties, setProperties] = useState(null);
  const [maxPrice, setMaxPrice] = useState("");
  const [queryCondition, setQueryCondition] = useState({
    "transactionType[eq]": "",
    "city[eq]": "",
    "price[lte]": "",
    "bedrooms[gte]": "",
    "bathrooms[gte]": "",
    "floors[gte]": "",
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setQueryCondition((prev) => ({
        ...prev,
        "price[lte]": maxPrice,
      }));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [maxPrice]);
  const getProperties = async () => {
    try {
      const params = Object.fromEntries(
        Object.entries(queryCondition) // convirte it to array of ket pares [[key,value],...]
          .filter(([key, value]) => value !== ""),
      );
      const response = await api.get("/api/properties", {
        params: {
          limit: 40,
          ...params,
        },
      });
      setProperties(response.data.data);
    } catch (error) {
      console.log("FAILED FETCH HOME PROPERTIES");
    }
  };
  useEffect(() => {
    getProperties();
  }, [queryCondition]);
  if (!properties) return <p>Loading...</p>;
  return (
    <>
      <Header existNavBar={true} existButton={true} />
      <div className="props-page">
        <aside className="props-sidebar">
          <div className="sidebar-head">
            <h2>Filters</h2>
            <button
              className="reset-link"
              onClick={() => {
                setQueryCondition({
                  "transactionType[eq]": "",
                  "city[eq]": "",
                  "price[lte]": "",
                  "bedrooms[gte]": "",
                  "bathrooms[gte]": "",
                  "floors[gte]": "",
                });
              }}
            >
              Reset
            </button>
          </div>
          <div className="filter-block">
            <label>Search</label>
            <input type="text" placeholder="Title, address or city..." />
          </div>
          <div className="filter-block">
            <label>Transaction</label>
            <div className="pill-group">
              <button
                className={`pill 
              ${queryCondition["transactionType[eq]"] === "" ? "active" : ""}

              `}
                onClick={(e) =>
                  setQueryCondition((prev) => ({
                    ...prev,
                    "transactionType[eq]": "",
                  }))
                }
              >
                All
              </button>
              <button
                className={`pill 
              ${queryCondition["transactionType[eq]"] === "rent" ? "active" : ""}

              `}
                defaultValue="rent"
                onClick={(e) =>
                  setQueryCondition((prev) => ({
                    ...prev,
                    "transactionType[eq]": "rent",
                  }))
                }
              >
                For Rent
              </button>
              <button
                className={`pill 
              ${queryCondition["transactionType[eq]"] === "sale" ? "active" : ""}

              `}
                onClick={(e) =>
                  setQueryCondition((prev) => ({
                    ...prev,
                    "transactionType[eq]": "sale",
                  }))
                }
              >
                For Sale
              </button>
            </div>
          </div>

          <div className="filter-block">
            <label>City</label>
            <select
              value={queryCondition["city[eq]"]}
              onChange={(e) =>
                setQueryCondition((prev) => ({
                  ...prev,
                  "city[eq]": e.target.value,
                }))
              }
            >
              <option value="">All cities</option>
              <option value="rabat">Rabat</option>
              <option value="casablanca">Casablanca</option>
              <option value="fed">Fes</option>
              <option value="marrakech">Marrakech</option>
            </select>
          </div>
          <div className="filter-block">
            <label>Max price (MAD)</label>
            <input
              type="number"
              placeholder="No limit"
              onChange={(e) => setMaxPrice((prev) => e.target.value)}
            />
          </div>

          <div className="filter-block">
            <label>Bedrooms</label>
            <select
              onChange={(e) =>
                setQueryCondition((prev) => ({
                  ...prev,
                  "bedrooms[gte]": e.target.value,
                }))
              }
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="filter-block">
            <label>Bathrooms</label>
            <select
              onChange={(e) =>
                setQueryCondition((prev) => ({
                  ...prev,
                  "bathrooms[gte]": e.target.value,
                }))
              }
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="filter-block">
            <label>Floors</label>
            <select
              onChange={(e) =>
                setQueryCondition((prev) => ({
                  ...prev,
                  "floors[gte]": e.target.value,
                }))
              }
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </aside>

        <main className="props-main">
          <div className="props-toolbar">
            <h1>Properties</h1>
            <span className="result-count">{properties.length} results</span>
          </div>

          <div className="props-grid">
            {properties !== null &&
              properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default PropertiesPage;
