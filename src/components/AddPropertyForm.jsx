import { useState } from "react";
import api from "../api/axios"; // adjust path to match your project
import { useWebStates } from "../context/WebContext";

const steps = ["Basic Info", "Location", "Photos"];

const AddPropertyForm = () => {
  const {setHandleClick,agencies} = useWebStates();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    transaction_type: "",
    property_type_id: "",
    agency_id :"",
    price: "",
    description: "",
    address: "",
    city: "",
    surface: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    images: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});
  const [clickSubmit, setClickSubmit] = useState(false)

  const handleForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const closeForm = () => setHandleClick(prev => ({
    ...prev , addProperty : false
  }))

  const handleImagesChange = (e) => {
    const filesArray =Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: filesArray }));
    setImagePreviews(filesArray.map((file) => URL.createObjectURL(file)));
  };

  const nextStep = () => {setStep((s) => Math.min(s + 1, steps.length - 1))};
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!clickSubmit){return}
    setErrors({});
    const data = new FormData();
    data.append("title", formData.title);
    data.append("transaction_type", formData.transaction_type);
    data.append("agency_id", formData.agency_id);
    data.append("property_type_id", formData.property_type_id);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("address", formData.address);
    data.append("city", formData.city);
    data.append("surface", formData.surface);
    data.append("bedrooms", formData.bedrooms);
    data.append("bathrooms", formData.bathrooms);
    data.append("floors", formData.floors);
    formData.images.forEach((img) => data.append("images[]", img));

    try {
      const response = await api.post("/api/properties", data);
      console.log(response.data.message);
      closeForm();
    } catch (error) {
      console.log(error.response?.data, "Failed to create property");
      setErrors(error.response?.data?.errors || {});
    }
  };

  return (
    <div className="add_property_overlay">
      <div className="add_property_card">
        <button type="button" className="add_property_close" onClick={() => {closeForm()}}>
          &times;
        </button>

        <h2>List your property</h2>
        <p className="add_property_subtitle">
          Fill in the details below. Your listing will be reviewed before it goes live.
        </p>

        <div className="step_indicator">
          {steps.map((label, i) => (
            <div key={i} className={`step_dot_wrapper ${i <= step ? "active" : ""}`}>
              <div className="step_dot">{i + 1}</div>
              {i < steps.length - 1 && <div className="step_line" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <div className="form_step">
              <div className="form_group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  placeholder="Modern villa with pool"
                  onChange={handleForm}
                />
                {errors.title && <span className="field_error">{errors.title[0]}</span>}
              </div>
              <div className="form_group">
                <label>Agency</label>
                <select name="agency_id" value={formData.agency_id} onChange={handleForm}>
                  <option value="">Choose an agency to manage this property</option>
                  {agencies.map((agency) => (
                    <option key={agency.id} value={agency.id}>
                      {agency.name}
                    </option>
                  ))}
                </select>
                {errors.agency_id && <span className="field_error">{errors.agency_id[0]}</span>}
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>Transaction type</label>
                  <select name="transaction_type" value={formData.transaction_type} onChange={handleForm}>
                    <option value="">Select</option>
                    <option value="sale">For sale</option>
                    <option value="rent">For rent</option>
                  </select>
                </div>
                <div className="form_group">
                  <label>Property type</label>
                  <select name="property_type_id" value={formData.property_type_id} onChange={handleForm}>
                    <option value="">Select</option>
                    <option value="1">Apartment</option>
                    <option value="2">Villa</option>
                    <option value="3">House</option>
                    <option value="4">Land</option>
                  </select>
                </div>
              </div>

              <div className="form_group">
                <label>Price (DH)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  placeholder="1500000"
                  onChange={handleForm}
                />
              </div>

              <div className="form_group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  placeholder="Describe your property..."
                  onChange={handleForm}
                ></textarea>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="form_step">
              <div className="form_row">
                <div className="form_group">
                  <label>Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleForm} />
                </div>
                <div className="form_group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleForm} />
                </div>
              </div>

              <div className="form_row three_cols">
                <div className="form_group">
                  <label>Surface (m²)</label>
                  <input type="number" name="surface" value={formData.surface} onChange={handleForm} />
                </div>
                <div className="form_group">
                  <label>Bedrooms</label>
                  <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleForm} />
                </div>
                <div className="form_group">
                  <label>Bathrooms</label>
                  <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleForm} />
                </div>
              </div>

              <div className="form_group">
                <label>Floors</label>
                <input type="number" name="floors" value={formData.floors} onChange={handleForm} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form_step">
              <div className="form_group">
                <label>Property photos</label>
                <div className="images_upload_box">
                  <input
                    type="file"
                    id="property_images"
                    multiple
                    accept="image/*"
                    className="file_upload_input"
                    onChange={handleImagesChange}
                  />
                  <label htmlFor="property_images" className="images_upload_label">
                    <span className="upload_plus">+</span>
                    <span className="upload_text">Add photos</span>
                    <span className="upload_subtext">Up to 10 images, JPG or PNG</span>
                  </label>
                </div>

                {imagePreviews.length > 0 && (
                  <div className="images_preview_grid">
                    {imagePreviews.map((url, i) => (
                      <img key={i} src={url} alt="" className="preview_thumb" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="wizard_footer">
            {step > 0 && (
              <button type="button" className="wizard_back_btn" onClick={prevStep}>
                Back
              </button>
            )}
            <div className="wizard_footer_right">
              {step < steps.length - 1 ? (
                <button type="" className="wizard_next_btn" onClick={nextStep}>
                  Continue
                </button>
              ) : (
                <button type="submit" hidden={step < steps.length-1} className="wizard_submit_btn" onClick={() => setClickSubmit(prev => !prev)}>
                  Submit Property
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyForm;