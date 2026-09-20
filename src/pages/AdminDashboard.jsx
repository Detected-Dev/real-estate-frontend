import api from "../api/axios";
import {useEffect, useState } from "react";
import Header from "../components/Header";
import "./Dash.css";
import AgencyTableRow from "../components/admin/AgencyTableRow";
import PropertyTableRow from "../components/admin/PropertyTableRow";
import PropertyDetails from "../components/admin/PropertyDetails";
import DeletePropertyConfirm from "../components/admin/AdminDeleteConfirm";
import AgencyForm from "../components/admin/AgencyForm";

const AdminDashboard = () => {
  const [toggleActions, setToggleActions] = useState({
      propertyDetails : null ,
      deleteProperty : null,
      deleteAgency : null,
      addAgencyBtn : false,
      editAgency : null
  })
  //FETCH DATA 
  const [users, setUsers] = useState(null);
  const [agencies, setAgencies] = useState(null);
  const [properties, setProperties] = useState(null);
  const [propertiesRequests, setPropertiesRequests] = useState(null);
  const [transactions, setTransactions] = useState(null);
  // ADMIN STATES 

  const getProperties = async () => {
    try {
      const response = await api.get("/api/properties?page=1"); // => BACK HERE LATER AND CONTINUE THE PAGINATE !!!!
      setProperties(response.data.data);
    } catch (error) {
      console.log("FAiled fetching Properties");
    }
  };
  const getUsers = async () => {
    try {
      const response = await api.get("/api/users");
      setUsers(response.data.data);
    } catch (error) {
      console.log("FAiled fetching Users");
    }
  };
  const getAgencies = async () => {
    try {
      const response = await api.get("/api/agencies");
      setAgencies(response.data.data);
    } catch (error) {
      console.log("FAiled fetching Agencies");
    }
  };
  const getPropertiesRequests = async () => {
    try {
      const response = await api.get("/api/property-requests");
      setPropertiesRequests(response.data.data);
    } catch (error) {
      console.log("FAiled fetching Agencies");
    }
  };
  const getTransactions = async () => {
    try {
      const response = await api.get("/api/transactions");
      setTransactions(response.data.data);
    } catch (error) {
      console.log("FAiled fetching Agencies");
    }
  };

  useEffect(() => {
    getProperties();
    getUsers();
    getAgencies();
    getPropertiesRequests();
    getTransactions();
  }, []);
    return (
    <>
      <Header extraLogo="Admin" existNavBar={false} existButton={false} />
      <main className="main">
        <div className="page-title">
          <h1>Dashboard</h1>
          <p>General overview of your real estate platform</p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <div className="stat-icon blue icon_box">
              <img className="dash_svg_icons" src="/agency.svg" alt="" />
            </div>
            <div>
              <h3>Agencies</h3>
              <strong>{agencies !== null && agencies.length}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple icon_box">
              <img  className='dash_svg_icons' src="/user.svg" alt="" />
            </div>
            <div>
              <h3>Users</h3>
              <strong>{users !== null && users.length}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green icon_box">
              <img  className='dash_svg_icons' src="/property.svg" alt="" />
            </div>
            <div>
              <h3>Properties</h3>
              <strong>{properties !== null && properties.length}</strong>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon orange icon_box">
              <img  className='dash_svg_icons' src="/request.svg" alt="" />
            </div>
            <div>
              <h3>Pending Requests</h3>
              <strong>
                {propertiesRequests !== null && propertiesRequests.length}
              </strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon cyan icon_box">
              <img  className='dash_svg_icons' src="/transaction.svg" alt="" />
            </div>
            <div>
              <h3>Transactions</h3>
              <strong>{transactions !== null && transactions.length}</strong>
            </div>
          </div>
        </div>

        <section className="management">
          <div className="section-header">
            <div className="section-info">
              <div className="section-icon">
                <img  className='dash_svg_icons' src="/settings.svg" alt="" />
              </div>

              <div>
                <h2>Properties Management</h2>
                <p>Manage and view all properties on the platform.</p>
              </div>
            </div>

          </div>

          <div className="table-box">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {properties &&
                  properties.map((property) => (
                    <PropertyTableRow key={property.id} property={property} setToggleActions={setToggleActions} />
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="management">
          <div className="section-header">
            <div className="section-info">
              <div className="section-icon">
                <img  className='dash_svg_icons' src="/settings.svg" alt="" />
              </div>

              <div>
                <h2>Agencies Management</h2>
                <p>Manage and view all real estate agencies on the platform.</p>
              </div>
            </div>

            <button className="add-button" onClick={() => setToggleActions(prev =>({
              ...prev , addAgencyBtn : true
            }) )}>+ &nbsp; Add an agency</button>
          </div>

          <div className="table-box">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Logo</th>
                  <th>Agency Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {agencies !== null &&
                  agencies.map((agency) => (
                    <AgencyTableRow key={agency.id} agency={agency} setToggleActions={setToggleActions}/>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

        {toggleActions.addAgencyBtn && <AgencyForm method="POST" getAgencies={getAgencies} setToggleActions={setToggleActions}/>}
        {toggleActions.editAgency && <AgencyForm method="PUT" getAgencies={getAgencies} agency={toggleActions.editAgency} setToggleActions={setToggleActions}/>}
        {toggleActions.propertyDetails && <PropertyDetails property={toggleActions.propertyDetails} setToggleActions={setToggleActions}/>}
        {toggleActions.deleteProperty && <DeletePropertyConfirm property={toggleActions.deleteProperty} agency={toggleActions.deleteAgency} setToggleActions={setToggleActions} getProperties={getProperties} getAgencies={getAgencies}/>}
        {toggleActions.deleteAgency && <DeletePropertyConfirm getAgencies={getAgencies} agency={toggleActions.deleteAgency} setToggleActions={setToggleActions}/>}
    </>
  );
};
export default AdminDashboard;
