import React from 'react'

const ContactUs = () => {
  return (
   <section className="contact-section">

   
    <div className="contact-heading">
        <h1>CONTACT US</h1>
        <p>Have questions? We’re here to help.</p>
    </div>


    
    <div className="contact-wrapper">

       
        <div className="contact-left">

            <div className="illustration">
                <img src="./contact.png" alt="CONTACT US"  width={800}/>
            </div>

            <div className="talk-text">
                <h2>Let’s talk!</h2>

                <p>
                    We’re happy to answer your questions
                    and help you find your perfect home.
                </p>
            </div>

        </div>


      
        <div className="contact-right">

            <h2>Get in touch</h2>


            
            <div className="contact-info">

                <div className="contact-icon">
                    📍
                </div>

                <div>
                    <h3>Address</h3>
                    <p>Casablanca, Morocco</p>
                </div>

            </div>


           
            <div className="contact-info">

                <div className="contact-icon">
                    ☎
                </div>

                <div>
                    <h3>Phone</h3>
                    <p>+212 5 XX XX XX XX</p>
                </div>

            </div>


            
            <div className="contact-info">

                <div className="contact-icon">
                    ✉
                </div>

                <div>
                    <h3>Email</h3>
                    <p>contact@yourwebsite.com</p>
                </div>

            </div>


            
            <div className="contact-info">

                <div className="contact-icon">
                    ◷
                </div>

                <div>
                    <h3>Working Hours</h3>
                    <p>Monday - Friday : 09:00 - 18:00</p>
                </div>

            </div>


            <div className="separator"></div>


         
            <form className="contact-form">

                <div className="form-row">

                    <div className="input-box">

                        <span>♙</span>

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                         />

                         </div>


                    <div className="input-box">

                        <span>✉</span>

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                         />

                    </div>

                </div>


                <div className="message-box">

                    <span>▢</span>

                    <textarea
                        placeholder="Your Message"
                        required
                    ></textarea>

                </div>


                <button type="submit">
                    Send Message
                    <span>→</span>
                </button>

            </form>

        </div>

    </div>

</section>

  )
}

export default ContactUs