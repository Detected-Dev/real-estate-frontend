import Agenciemanagement from '../components/Agenciemanagement';
import Propertiemanagement from '../components/propertiemanagement';
import './Dash.css';

const Dashboard = () => {
  return (
    <>
        <header class="header">
            <div class="logo">
                <span class="logo-icon">⌂</span>
                <span>Immo<span>Admin</span></span>
            </div>
        </header>

        <main class="main">

            <div class="page-title">
                <h1>Dashboard</h1>
                <p>General overview of your real estate platform</p>
            </div>

            <div class="stats">

                <div class="stat-card">
                    <div class="stat-icon blue">▦</div>
                    <div>
                        <h3>Agencies</h3>
                        <strong>8</strong>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon purple">♟</div>
                    <div>
                        <h3>Users</h3>
                        <strong>1 284</strong>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon green">⌂</div>
                    <div>
                        <h3>Properties</h3>
                        <strong>2 436</strong>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon orange">⚑</div>
                    <div>
                        <h3>Rejected Listings</h3>
                        <strong>87</strong>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon cyan">↻</div>
                    <div>
                        <h3>Transactions</h3>
                        <strong>623</strong>
                    </div>
                </div>

            </div>

            <section class="management">

                <div class="section-header">

                    <div class="section-info">
                        <div class="section-icon">⌂</div>

                        <div>
                            <h2>Properties Management</h2>
                            <p>Manage and view all properties on the platform.</p>
                        </div>
                    </div>

                    <button class="add-button">+ &nbsp; Add a property</button>

                </div>


                <div class="table-box">

                    <table>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>City</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>1</td>

                                <td>
                                    <img
                                        src="images/villa.jpg"
                                        class="property-image"
                                        alt="Modern villa"
                                    />
                                </td>

                                <td>Modern villa in Marrakech</td>

                                <td>
                                    <span class="type villa">Villa</span>
                                </td>

                                <td>2 500 000 DH</td>
                                <td>Marrakech</td>
                                <td>09/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>2</td>

                                <td>
                                    <img
                                        src="images/apartment-casa.jpg"
                                        class="property-image"
                                        alt="Apartment"
                                    />
                                </td>

                                <td>Apartment in Casablanca</td>

                                <td>
                                    <span class="type apartment">Apartment</span>
                                </td>

                                <td>1 200 000 DH</td>
                                <td>Casablanca</td>
                                <td>08/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>3</td>

                                <td>
                                    <img
                                        src="images/land.jpg"
                                        class="property-image"
                                        alt="Land"
                                    />
                                </td>

                                <td>Land in Rabat</td>

                                <td>
                                    <span class="type land">Land</span>
                                </td>

                                <td>850 000 DH</td>
                                <td>Rabat</td>
                                <td>07/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>4</td>

                                <td>
                                    <img 
                                        src="images/commercial.jpg"
                                        class="property-image"
                                        alt="Commercial space"
                                    />
                                </td>

                                <td>Commercial space in Tangier</td>

                                <td>
                                    <span class="type commercial">Commercial</span>
                                </td>

                                <td>950 000 DH</td>
                                <td>Tangier</td>
                                <td>06/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>5</td>

                                <td>
                                    <img
                                        src="images/apartment-agdal.jpg"
                                        class="property-image"
                                        alt="Apartment in Agdal"
                                    />
                                </td>

                                <td>Apartment in Agdal</td>

                                <td>
                                    <span class="type apartment">Apartment</span>
                                </td>

                                <td>1 800 000 DH</td>
                                <td>Rabat</td>
                                <td>05/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <section class="management">

                <div class="section-header">

                    <div class="section-info">
                        <div class="section-icon">▦</div>

                        <div>
                            <h2>Agencies Management</h2>
                            <p>Manage and view all real estate agencies on the platform.</p>
                        </div>
                    </div>

                    <button class="add-button">+ &nbsp; Add an agency</button>

                </div>


                <div class="table-box">

                    <table>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Logo</th>
                                <th>Agency Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>City</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>1</td>

                                <td>
                                    <div class="agency-logo blue-logo">⌂</div>
                                </td>

                                <td>Atlas Immobilier</td>
                                <td>atlas@immo.ma</td>
                                <td>+212 6 12 34 56 78</td>
                                <td>Agency</td>
                                <td>Marrakech</td>
                                <td>09/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>2</td>

                                <td>
                                    <div class="agency-logo orange-logo">▦</div>
                                </td>

                                <td>Prestige Immo</td>
                                <td>prestige@immo.ma</td>
                                <td>+212 6 98 76 54 32</td>
                                <td>Agency</td>
                                <td>Casablanca</td>
                                <td>08/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>3</td>

                                <td>
                                    <div class="agency-logo blue-logo">⌂</div>
                                </td>

                                <td>Casa Invest</td>
                                <td>casa@immo.ma</td>
                                <td>+212 6 11 22 33 44</td>
                                <td>Agency</td>
                                <td>Rabat</td>
                                <td>07/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>4</td>

                                <td>
                                    <div class="agency-logo black-logo">◉</div>
                                </td>

                                <td>Marrakech Properties</td>
                                <td>marrakech@immo.ma</td>
                                <td>+212 6 55 66 77 88</td>
                                <td>Agency</td>
                                <td>Marrakech</td>
                                <td>06/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>


                            <tr>
                                <td>5</td>

                                <td>
                                    <div class="agency-logo cyan-logo">⌂</div>
                                </td>

                                <td>Agence du Sud</td>
                                <td>sud@immo.ma</td>
                                <td>+212 6 77 88 99 00</td>
                                <td>Agency</td>
                                <td>Agadir</td>
                                <td>05/07/2025</td>

                                <td class="actions">
                                    <button class="edit">Edit</button>
                                    <button class="delete">Delete</button>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

        </main>
    </>
  )
}
export default Dashboard