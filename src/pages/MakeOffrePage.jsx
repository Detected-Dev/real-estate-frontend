import {Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { useEffect, useState } from "react";
import "./makeOffrePage.css";
import Header from "../components/Header";
import getDateTime from "../utils/getDateTime";

const MakeOffrePage = () => {
  const [currentProperty, setCurrentProperty] = useState(null);
  const [step, setStep] = useState(1);
  const [RequestStatus, setRequestStatus] = useState(false); // rejected or accepted or pending
  const [MyRequest, setMyRequest] = useState(null);
  const [method, setMethod] = useState('card')
  const [MyTransaction, setMyTransaction] = useState(null);
  const [formData, setFormData] = useState({
    message: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  // calculate Transaction total : 
  const [AgencyFee, setAgencyFee] = useState(0)
  const [SecurityDeposite, setSecurityDeposite] = useState(0)

  // Check If user have the permission for reach this page (if hi already have accepted in the)
  const getMyVisit = async () => {
    try {
      const response = await api.get(`/api/properties/${id}/my-visit`);
      if (response.data.data.status === "pending") {
        navigate(`/properties/${id}`);
      }
    } catch (erro) {
      console.log("Failed Fetching Property");
      navigate(`/properties/${id}`);
    }
  };
  const getProperty = async () => {
    try {
      const response = await api.get(`/api/properties/${id}`);
      setCurrentProperty(response.data.data);
      if(response.data.data){
        setAgencyFee(response.data.data.transaction_type === 'rent' ? response.data.data.price * 0.5 : response.data.data.price * 0.01 ?? 0);
        setSecurityDeposite(response.data.data.transaction_type === 'rent' ? response.data.data.price: response.data.data.price * 0.02 ?? 0);
      }
    } catch (erro) {
      console.log("Failed Fetching Property");
    }
  };
  const handleSubmi = async (e) => {
    e.preventDefault();
    const request = {
      message: formData.message,
      type: currentProperty.transaction_type,
      offer_price: currentProperty.price,
      property_id: currentProperty.id,
      agency_id: currentProperty.agency.id,
    };
    try {
      const response = await api.post("/api/property-requests", request);
      console.log(response.data.message);
      setRequestStatus("pending");
      getMyRequest();
    } catch (error) {
      console.log("Failed fetching");
    }
  };
  const getMyRequest = async () => {
    // for get and check if that user have an request for this proeprty
    try {
      const response = await api.get(
        `/api/properties/${currentProperty.id}/my-request`,
      );
      setMyRequest(response.data.data);
      if (response.data.data !== null) {
        return setRequestStatus(response.data.data.status);
      }
      return setRequestStatus(false);
    } catch (error) {
      console.log("Failed or No request yet");
    }
  };
  const cancelRequest = async () => {
    if (MyRequest === null) return;
    try {
      const response = await api.delete(
        `/api/property-requests/${MyRequest.id}`,
      );
      console.log(response.data);
      setRequestStatus(false);
    } catch (error) {
      console.log("FAILED DELETING THE REQUEST", error);
    }
  };
  const createTransaction = async () => {
    try{
        const transaction = {
            property_id : currentProperty.id,
            agency_id : currentProperty.agency.id,
            seller_id : currentProperty.owner_id,
            type : MyRequest.type,
            amount : currentProperty.price,
            transaction_date : getDateTime()
        }
        const response = await api.post('/api/transactions',transaction);
        console.log(response.data)
    }catch(error){
        console.log("failed to post transaction", error);
        console.log("Laravel response:", error.response?.data);
    }
  }
  const getMyTransaction = async () => {
    try{
        const response = await  api.get(`/api/properties/${currentProperty.id}/my-transaction`);
        setMyTransaction(response.data.data)
        response.data.data !== null && setStep(2)
    }catch(error){
        console.log('Failed get transaction' , error)
    }
  }

  useEffect(() => {
    getProperty();
    getMyVisit();
  }, []);
  useEffect(() => {
    if (!currentProperty) return;
    getMyRequest();
    getMyTransaction();
  }, [currentProperty]);

  if (currentProperty === null) return <p>Loading...</p>;
  return (
    <div>
       <Header  existNavBar={true} existButton={true}/>
      <div className="page">
        <div className="request-property-header">
         <div className="breadcrumb">
                   <Link  to={`/properties/${currentProperty.id}`}>
                     <svg
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       stroke-width="2"
                     >
                       <path d="M19 12H5M12 19l-7-7 7-7" />
                     </svg>
                   </Link>
                   <Link to={`/properties/${currentProperty.id}`}>Property</Link> / <span>Make offer </span>
                 </div>
          <p>
            Follow the three steps below — the agency needs to confirm your
            request before you move on to payment.
          </p>
          <div className="property-chip">
            🏠 <strong>{currentProperty.title}</strong> —{" "}
            {currentProperty.address} , {currentProperty.city}
            &nbsp;·&nbsp;{" "}
            {currentProperty.transaction_type === "rent"
              ? `${currentProperty.price} MAD / month`
              : `${currentProperty.price} MAD`}
          </div>
        </div>

        {step !== "success" && (
          <div className="stepper">
            <div
              className={`step ${step > 1 ? "is-done" : ""} ${step === 1 ? "is-active" : ""}`}
            >
              <div className="dot">1</div>
              <div className="label">Request</div>
              <div className="sublabel">Your info</div>
            </div>
            <div className={`connector ${step > 1 ? "is-filled" : ""}`}></div>
            <div
              className={`step ${step > 2 ? "is-done" : ""} ${step === 2 ? "is-active" : ""}`}
            >
              <div className="dot">2</div>
              <div className="label">Transaction</div>
              <div className="sublabel">Terms &amp; details</div>
            </div>
            <div className={`connector ${step > 2 ? "is-filled" : ""}`}></div>
            <div className={`step ${step === 3 ? "is-active" : ""}`}>
              <div className="dot">3</div>
              <div className="label">Payment</div>
              <div className="sublabel">Confirm &amp; pay</div>
            </div>
          </div>
        )}

        {step === 1 && (
          <section className="panel is-visible">
            <h2>Tell the agency about yourself</h2>
            <p className="hint">
              This creates a offre request and The agency will accept or decline
              it before you can continue.
            </p>

            {!RequestStatus && (
              <form onSubmit={(e) => handleSubmi(e)}>
                <div className="field">
                  <label>I want to</label>
                  <div className="toggle-group">
                    <button
                      type="button"
                      className={
                        currentProperty.transaction_type === "rent"
                          ? "is-selected"
                          : ""
                      }
                    >
                      Rent
                    </button>
                    <button
                      type="button"
                      className={
                        currentProperty.transaction_type === "sale"
                          ? "is-selected"
                          : ""
                      }
                    >
                      Buy
                    </button>
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="fullName">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="e.g. Salah Amrani"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+212 6xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    Price{" "}
                    {currentProperty.transaction_type === "rent" && " / month"}
                  </label>
                  <input
                    type="number"
                    disabled={true}
                    id="email"
                    value={currentProperty.price}
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">
                    Message to the agency (optional)
                  </label>
                  <textarea
                    id="message"
                    placeholder="questions about the property, etc."
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>

                <div className="actions">
                  <button type="submit" className="btn btn-primary">
                    Send request
                  </button>
                </div>
              </form>
            )}

            {RequestStatus && (
              <div id="RequestStatusArea" style={{ marginTop: 8 }}>
                {RequestStatus === "pending" && (
                  <div className="status-card pending">
                    <div className="icon">⏳</div>
                    <div>
                      <h3>Request sent — waiting on the agency</h3>
                      <p>
                        We've notified the agency for {currentProperty.title}
                        You'll get a notification the moment they respond. This
                        usually takes under 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {RequestStatus === "accepted" && (
                  <div className="status-card accepted">
                    <div className="icon">✓</div>
                    <div>
                      <h3>Request accepted</h3>
                      <p>
                        The agency confirmed your request. You can now move on
                        to the transaction step.
                      </p>
                    </div>
                  </div>
                )}

                {RequestStatus === "rejected" && (
                  <div className="status-card rejected">
                    <div className="icon">✕</div>
                    <div>
                      <h3>Request declined</h3>
                      <p>
                        The agency isn't able to proceed with this request right
                        now. You can browse similar properties or contact them
                        directly.
                      </p>
                    </div>
                  </div>
                )}

                <div className="actions" style={{ marginTop: 20 }}>
                  {RequestStatus !== "rejected" && (
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => {
                        cancelRequest();
                      }}
                    >
                      Cancel request
                    </button>
                  )}
                  {RequestStatus === "accepted" && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        createTransaction()
                        setStep(2)
                      }}
                    >
                      Continue to transaction
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {step === 2 &&  (
          <>    
                {MyRequest === null && setStep(1)}
                {MyRequest !== null &&  MyRequest.status !== "accepted" && setStep(1)}
              <section className="panel is-visible">
                <h2>Confirm the transaction terms</h2>
                <p className="hint">
                  These are the agreed terms before payment. This maps to a row
                  in your <code>transactions</code> table.
                </p>

                <div className="summary">
                  <div className="row">
                    <span className="k">Property</span>
                    <span className="v">{currentProperty.title}</span>
                  </div>
                  {/* <div className="row"><span className="k">Type</span><span className="v">{intent === "rent" ? "Rent" : "Buy"}</span></div> */}
                  <div className="row">
                    <span className="k">{currentProperty.transaction_type === 'rent' ? 'Monthly rent' :'Price' }</span>
                    <span className="v">{currentProperty.transaction_type === 'rent' 
                                                  ? `${currentProperty.price} MAD / month`
                                                  : `${currentProperty.price} MAD`
                                                    }</span>
                  </div>
                  <div className="row">
                    <span className="k">Security deposit</span>
                    <span className="v">{Number(SecurityDeposite).toFixed(2)} MAD</span>
                  </div>
                  <div className="row">
                    <span className="k">Agency fee</span>
                    <span className="v">{Number(AgencyFee).toFixed(2)} MAD</span>
                  </div>
                  <div className="row total">
                    <span className="k">Due now</span>
                    <span className="v">{(Number(currentProperty.price) + Number(AgencyFee) + Number(SecurityDeposite)).toFixed(2)} MAD</span>
                  </div>
                </div>

                <div className="actions">
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                        MyTransaction === null &&
                        setStep((prev) => prev - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setStep(3)
                    }}
                  >
                    Proceed to payment
                  </button>
                </div>
              </section>
          </>
        )}

        {/* ================= STEP 3 — PAYMENT ================= */}
        {step === 3 && (
          <section className="panel is-visible">
            <h2>Payment</h2>
            <p className="hint">
              Confirming this creates a row in <code>payments</code> linked to
              the transaction above.
            </p>

            <div className="summary">
              <div className="row total">
                <span className="k">Total due</span>
                <span className="v">{(Number(currentProperty.price) + Number(AgencyFee) + Number(SecurityDeposite)).toFixed(2)} MAD</span>
              </div>
            </div>

            <label style={{ marginBottom: 10, display: "block" }}>
              Payment method
            </label>
            <div className="method-group">
              <div className={`method-card ${method === "card" ? "is-selected" : ""}`} onClick={() => setMethod("card")}>💳 Card</div>
              <div className={`method-card ${method === "bank" ? "is-selected" : ""}`} onClick={() => setMethod("bank")}>🏦 Bank transfer</div>
              <div className={`method-card ${method === "cash" ? "is-selected" : ""}`} onClick={() => setMethod("cash")}>💵 Cash on visit</div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="cardNumber">Card number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 1234 1234 1234"
                />
              </div>
              <div className="field">
                <label htmlFor="cardExpiry">Expiry</label>
                <input type="text" id="cardExpiry" placeholder="MM/YY" />
              </div>
            </div>

            <div className="actions">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {setStep(prev => prev-1)}}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {}}
              >
                Confirm &amp; pay
              </button>
            </div>
          </section>
        )}

        {/* {step === "success" && (
          <section className="panel is-visible">
            <div className="success-block">
              <div className="icon">✓</div>
              <h2>All set!</h2>
              <p>Your payment was confirmed. The agency will be in touch to arrange the handover / move-in details.</p>
              <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>Back to property</button>
            </div>
          </section>
        )} */}
      </div>
    </div>
  );
};

export default MakeOffrePage;
