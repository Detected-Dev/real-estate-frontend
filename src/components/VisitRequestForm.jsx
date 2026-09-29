import { useState } from "react";
import "./VisitRequestForm.css";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const VisitRequestForm = ({
  ownerId,
  propertyId,
  agencyId,
  myVisit,
  getMyVisit,
}) => {
  const [formData, setFormData] = useState({
    visit_date: "",
    visit_time: "",
    message: "",
  });
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/property-visits", {
        property_id: propertyId,
        agency_id: agencyId,
        scheduled_at: `${formData.visit_date} ${formData.visit_time}`,
        message: formData.message,
      });
      console.log(response.data);
      await getMyVisit();
      setFormData({
        visit_date: "",
        visit_time: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  };

  return (
    <div className="visit-request-card">
      {user.id !== ownerId ? (
        <>
          <div className="visit-header">
            <div className="visit-icon">
              <img src="/schedule.svg" alt="" />
            </div>
            {myVisit !== null && myVisit.status === "pending" && (
              <div className="visit-request-form-status-pending">
                <p>{myVisit.status}</p>
              </div>
            )}
            {myVisit !== null && myVisit.status === "accepted" && (
              <div className="visit-request-form-status-accepted">
                <p>{myVisit.status}</p>
              </div>
            )}
            <div>
              <h2>Request a Visit</h2>

              <p>
                Fill in the form below to schedule a visit for this property.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* DATE */}
            <div className="form-group">
              <label htmlFor="visit_date">
                Preferred Date <span>*</span>
              </label>

              <input
                type="date"
                disabled={myVisit !== null}
                id="visit_date"
                name="visit_date"
                value={formData.visit_date}
                onChange={handleChange}
                required
              />
            </div>

            {/* TIME */}
            <div className="form-group">
              <label htmlFor="visit_time">
                Preferred Time <span>*</span>
              </label>

              <input
                disabled={myVisit !== null}
                type="time"
                id="visit_time"
                name="visit_time"
                value={formData.visit_time}
                onChange={handleChange}
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message">
                Message <small>(optional)</small>
              </label>

              <textarea
                disabled={myVisit !== null}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Add a message (e.g. I would like to visit this property...)"
                rows="5"
              />
            </div>

            {/* SUBMIT */}
            {myVisit !== null && myVisit.status === "pending" && (
              <button
                type="submit"
                className="visit-submit-btn"
                disabled={myVisit !== null}
              >
                {myVisit !== null
                  ? "Visit Request Sended"
                  : "Send Visit Request"}
              </button>
            )}
            {myVisit === null && (
              <button
                type="submit"
                className="visit-submit-btn"
                disabled={myVisit !== null}
              >
                {myVisit !== null
                  ? "Visit Request Sended"
                  : "Send Visit Request"}
              </button>
            )}
          </form>
          {myVisit !== null && myVisit.status === "accepted" && (
            <Link
              to={`/properties/${propertyId}/make-offre`}
              type="submit"
              className="make-offre"
              disabled={myVisit !== null}
            >
              Make Offre
            </Link>
          )}
          <div className="visit-info">
            <span>ⓘ</span>

            <p>
              Your request will be sent to the agency. You'll be notified once
              it's accepted or rejected.
            </p>
          </div>
        </>
      ) : (
        <p className="own-property">You own this property</p>
      )}
    </div>
  );
};

export default VisitRequestForm;
