import React from 'react'

const Agenciemanagement = () => {
  return (
    <>
        <div class="overlay">
            <div class="agency-form">

                <div class="form-header">

                    <div class="header-left">
                        <div class="form-icon">▦</div>

                        <div>
                            <h1>Add Agency</h1>
                            <p>Fill in the details below to add a new agency.</p>
                        </div>
                    </div>

                    <button class="close-button">×</button>

                </div>


                <form>

                    <div class="form-group">
                        <label>Agency Name *</label>
                        <input type="text" placeholder="Enter agency name" />
                    </div>


                    <div class="form-group">
                        <label>Email *</label>
                        <input type="email" placeholder="Enter email address" />
                    </div>


                    <div class="form-group">
                        <label>Phone *</label>
                        <input type="text" placeholder="Enter phone number" />
                    </div>


                    <div class="two-columns">

                        <div class="form-group">
                            <label>Role *</label>

                            <select>
                                <option value="">Select role</option>
                                <option>Agency</option>
                                <option>Admin</option>
                            </select>
                        </div>


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

                    </div>


                    <div class="form-group">
                        <label>Address</label>
                        <textarea placeholder="Enter full address"></textarea>
                    </div>


                    <div class="form-footer">

                        <button type="button" class="cancel-button">
                            Cancel
                        </button>

                        <button type="submit" class="save-button">
                            Save Agency
                        </button>

                    </div>

                </form>

            </div>

        </div>
    </>
  )
}
export default  Agenciemanagement