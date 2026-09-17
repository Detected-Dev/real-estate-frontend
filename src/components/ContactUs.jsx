import React from 'react'

const ContactUs = () => {
  return (
   <section class="contact-section">

   
    <div class="contact-heading">
        <h1>CONTACT US</h1>
        <p>Have questions? We’re here to help.</p>
    </div>


    
    <div class="contact-wrapper">

       
        <div class="contact-left">

            <div class="illustration">
                <img src="./contact.png" alt="CONTACT US"  width={800}/>
            </div>

            <div class="talk-text">
                <h2>Let’s talk!</h2>

                <p>
                    We’re happy to answer your questions
                    and help you find your perfect home.
                </p>
            </div>

        </div>


      
        <div class="contact-right">

            <h2>Get in touch</h2>


            
            <div class="contact-info">

                <div class="contact-icon">
                    📍
                </div>

                <div>
                    <h3>Address</h3>
                    <p>Casablanca, Morocco</p>
                </div>

            </div>


           
            <div class="contact-info">

                <div class="contact-icon">
                    ☎
                </div>

                <div>
                    <h3>Phone</h3>
                    <p>+212 5 XX XX XX XX</p>
                </div>

            </div>


            
            <div class="contact-info">

                <div class="contact-icon">
                    ✉
                </div>

                <div>
                    <h3>Email</h3>
                    <p>contact@yourwebsite.com</p>
                </div>

            </div>


            
            <div class="contact-info">

                <div class="contact-icon">
                    ◷
                </div>

                <div>
                    <h3>Working Hours</h3>
                    <p>Monday - Friday : 09:00 - 18:00</p>
                </div>

            </div>


            <div class="separator"></div>


         
            <form class="contact-form">

                <div class="form-row">

                    <div class="input-box">

                        <span>♙</span>

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                         />

                         </div>


                    <div class="input-box">

                        <span>✉</span>

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                         />

                    </div>

                </div>


                <div class="message-box">

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