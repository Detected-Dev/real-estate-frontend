import React, { useEffect, useState } from "react";
import "./PropertyDetailsPage.css";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import LocationMap from "../components/LocationMap"; // adjust the path to match where you saved it

const PropertyDetailsPage = () => {
  const [currentProperty, setCurrentProperty] = useState(null)
  const dateForm = new Date();

  const {id} = useParams();
  
    const getProperty = async() => {
    try{
      const response = await  api.get(`/api/properties/${id}`);
      setCurrentProperty(response.data.data)
    }catch(erro){
        console.log('Failed Fetching Property')
    }
    }
  useEffect(() => {
    getProperty();
  },[id])
  if(!currentProperty)return <p>Loading ...</p>
  const {agency} = currentProperty;
  return (
    <>
      <Header />
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/properties">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
          <a href="/properties">Properties</a> / <span>Property</span>
        </div>

        <div className="title-row">
          <div>
            <h1 className="p-title">{currentProperty.title}</h1>
            <div className="p-address">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
              </svg>
              {currentProperty.address} , {currentProperty.city} {currentProperty.postal_code}
            </div>
          </div>
          <div className="badges">
            <span className="badge badge-txn">{currentProperty.transaction_type}</span>
            <span className="badge badge-status">{currentProperty.status}</span>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="cell main"></div>
          <div className="cell" ></div>
          <div className="cell hide-mobile">
            <div className="gallery-count">View all photos</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat">
            <div className="stat-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
              Price
            </div>
            <div className="stat-value">{currentProperty.transaction_type === 'rent' 
                                    ? `${currentProperty.price} MAD / month ` 
                                    : `${currentProperty.price} MAD`}</div>
          </div>
          <div className="stat">
            <div className="stat-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
              Surface
            </div>
            <div className="stat-value">{currentProperty.surface } m²</div>
          </div>
          <div className="stat">
            <div className="stat-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2M21 18v2M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3" />
              </svg>
              Bedrooms
            </div>
            <div className="stat-value">{currentProperty.bedrooms}</div>
          </div>
          <div className="stat">
            <div className="stat-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 12h16M6 12V6a2 2 0 012-2h2M6 12v8M18 12v8M6 20h12" />
              </svg>
              Bathrooms
            </div>
            <div className="stat-value"> {currentProperty.bathrooms}</div>
          </div>
        </div>

        <div className="content-grid">
          <div className="main-col">
            <div className="card">
              <h2>Description</h2>
              <p className="desc-text">
                {currentProperty.description}
              </p>
            </div>

            <div className="card">
              <h2>Property Details</h2>
              <table className="detail-table">
                <tbody>

                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                    Property Type
                  </td>
                  <td>
                    {currentProperty.property_type.name}
                  </td>
                </tr>
                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
                    </svg>
                    Transaction Type
                  </td>
                  <td>{currentProperty.transaction_type}</td>
                </tr>
                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Status
                  </td>
                  <td>{currentProperty.status}</td>
                </tr>
                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M3 21l18-18M8 3H3v5M16 21h5v-5" />
                    </svg>
                    Floors
                  </td>
                  <td>{currentProperty.floors}</td>
                </tr>
                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
                    </svg>
                    City
                  </td>
                  <td>{currentProperty.city}</td>
                </tr>
                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    Postal Code
                  </td>
                  <td>{currentProperty.postal_code}</td>
                </tr>
                <tr>
                  <td>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    Listed
                  </td>
                  <td>
                    {`${dateForm.getDate(currentProperty.created_at)}/${dateForm.getMonth(currentProperty.created_at)}/${dateForm.getFullYear(currentProperty.created_at)} `}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="card">
              <h2>Location</h2>
              <LocationMap
                latitude={currentProperty.latitude}
                longitude={currentProperty.longitude}
                title={currentProperty.title}
                address={currentProperty.address}
              />
            </div>
          </div>

          <aside>
            <div className="sticky-wrap">
              <div className="card">
                <div className="agency-top">
                  <div className="agency-photo">{agency.name.slice(0,2).toUpperCase()}</div>
                  <div>
                    <div className="agency-name">{agency.name.toUpperCase()}</div>
                    <div className="agency-role">Listing agency</div>
                  </div>
                </div>
                <button className="btn btn-primary">Schedule a tour</button>
                <button className="btn btn-secondary">Ask a question</button>
                <div className="contact-fields">
                  <input type="text" placeholder="Your name" />
                  <input type="text" placeholder="Phone or email" />
                  <textarea placeholder="I'd like to see this property on..."></textarea>
                </div>
                <button className="btn btn-primary">Send message</button>
                <div className="agency-meta">
                  <span>Direct</span>
                  <a href="tel:+212522000000">{agency.telephone}</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="similar-block">
          <h2>Similar Properties</h2>


          <a className="list-card" href="/property/1058">
            <div className="list-thumb"></div>
            <div className="list-main">
              <div className="lt">Spacious Family Villa</div>
              <div className="ld">Private garden and two-car garage.</div>
            </div>
            <div className="list-stats">
              <div className="list-stat">
                <div className="stat-label">Transaction Type</div>
                <div className="stat-value">sale</div>
              </div>
              <div className="list-stat">
                <div className="stat-label">Price</div>
                <div className="stat-value">3,100,000.00 MAD</div>
              </div>
              <div className="list-stat">
                <div className="stat-label">Surface</div>
                <div className="stat-value">280.00 m²</div>
              </div>
              <div className="list-stat">
                <div className="stat-label">Bedrooms</div>
                <div className="stat-value">5</div>
              </div>
              <div className="list-stat">
                <div className="stat-label">Bathrooms</div>
                <div className="stat-value">4</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailsPage;
