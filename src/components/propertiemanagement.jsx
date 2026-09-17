import React from 'react'

const Propertiemanagement = () => {
  return (
    <>
        <div class="overlay">

            <div class="property-form">

                <div class="form-header">

                    <div class="header-left">
                        <div class="form-icon">⌂</div>

                        <div>
                            <h1>Add Property</h1>
                            <p>Fill in the details below to add a new property.</p>
                        </div>
                    </div>

                    <button class="close-button">×</button>

                </div>


                <form>

                    <div class="form-group">
                        <label>Title *</label>
                        <input
                            type="text"
                            placeholder="Enter property title"
                        />
                    </div>


                    <div class="two-columns">

                        <div class="form-group">
                            <label>Type *</label>

                            <select>
                                <option value="">Select type</option>
                                <option>Villa</option>
                                <option>Apartment</option>
                                <option>Land</option>
                                <option>Commercial</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Price *</label>
                            <input type="text" placeholder="Enter price (DH)"/>
                        </div>

                    </div>


                    <div class="two-columns">

                        <div class="form-group">
                            <label>City *</label>

                            <select>
                                <option value="">Select city</option>
                                <option>Marrakech</option>
                                <option>Casablanca</option>
                                <option>Rabat</option>
                                <option>Tangier</option>
                                <option>Agadir</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Date *</label>

                            <input type="date"/>
                        </div>

                    </div>
                    <div class="form-group">
                        <label>Image</label>

                        <label class="image-upload">

                            <span class="upload-icon">▧</span>

                            <span class="upload-text">
                                Click to upload an image
                            </span>

                            <small>
                                PNG, JPG or JPEG (Max 5MB)
                            </small>

                            <input type="file"/>

                        </label>
                    </div>

                    <div class="form-group">
                        <label>Description</label>

                        <textarea>
                            placeholder="Enter property description"
                        </textarea>
                    </div>

                    <div class="form-footer">

                        <button type="button" class="cancel-button">
                            Cancel
                        </button>

                        <button type="submit" class="save-button">
                            Save Property
                        </button>

                    </div>

                </form>

            </div>

        </div>
    </>
  )
}
export default Propertiemanagement 