import React, { useEffect, useState } from "react";
import "./AgencyDashboard.css";
import Header from "../components/Header";
import api from "../api/axios";
import AgencyVisitTableRow from "../components/Agence/AgencyVisitTableRow";
import AgencyRequestTableRow from "../components/Agence/AgencyRequestTableRow";
import AgencyPropertyTableRow from "../components/Agence/AgencyPropertyTableRow";

const AgencyDashboard = () => {
  const [agencyProperties, setAgencyProperties] = useState(null);
  const [agency, setAgency] = useState(null);
  const [agencyPendingVisits, setAgencyPendingVisits] = useState(null);
  const [agencyPendingRequests, setAgencyPendingRequests] = useState(null);
  const getAgencyDashboardData = async () => {
    try{
      const response = await api.get("/api/agency/dashboard");
      setAgencyProperties(response.data.agencyProperties);
      setAgency(response.data.agency);
      setAgencyPendingVisits(response.data.agencyPendingVisits);
      setAgencyPendingRequests(response.data.agencyPendingRequests);
    }catch(error){
      console.log('failed to get dash data' , error)
    }
    };
  useEffect(() => {
    getAgencyDashboardData();
  }, []);
  if (agency === null) return <p>Loading ...</p>;
  return (
    <>
      <Header />
      <main className="main">
        <h1>Welcome back, {agency.name}</h1>
        <div className="sub">
          Here's what's happening with your listings today.
        </div>

        <div className="stats">
          <div className="stat">
            <div className="label">Properties handled</div>
            <div className="value">{agencyProperties.length}</div>
            <div className="delta flat">
              {
                agencyProperties.filter(
                  (property) => property.transaction_type === "rent",
                ).length
              }{" "}
              for rent ·{" "}
              {
                agencyProperties.filter(
                  (property) => property.transaction_type === "sale",
                ).length
              }{" "}
              for sale
            </div>
          </div>
          <div className="stat">
            <div className="label">Pending visits</div>
            <div className="value">{agencyPendingVisits.length}</div>
            <div className="delta up">
              +{agencyPendingVisits.length} this week
            </div>
          </div>
          <div className="stat">
            <div className="label">Pending requests</div>
            <div className="value">{agencyPendingRequests.length}</div>
            <div className="delta flat">Awaiting your review</div>
          </div>
          <div className="stat">
            <div className="label">Revenue this month</div>
            <div className="value">42,750 MAD</div>
            <div className="delta up">+12% vs last month</div>
          </div>
        </div>

        <div className="two-col">
          <div className="panel">
            <div className="panel-head">
              <h2>Property visit requests</h2>
              <span className="count">
                {agencyPendingVisits.length} pending
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Visitor</th>
                  <th>Property</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {agencyPendingVisits.map((visit) => (
                  <AgencyVisitTableRow reloadDash={getAgencyDashboardData} key={visit.id} visit={visit} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="panel">
            <div className="panel-head">
              <h2>Property requests</h2>
              <span className="count">
                {agencyPendingRequests.length} pending
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Requester</th>
                  <th>Looking for</th>
                  <th>Budget</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {agencyPendingRequests.map((request) => (
                  <AgencyRequestTableRow reloadDash={getAgencyDashboardData} key={request.id} request={request} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>Properties you handle</h2>
            <span className="count">{agencyProperties.length} total</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Price</th>
                <th>Status</th>
                <th>Visits</th>
              </tr>
            </thead>
            <tbody>
              {agencyProperties.map((property) => (
                <AgencyPropertyTableRow key={property.id} property={property} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default AgencyDashboard;
