import React, { useState } from "react";

import axios from "axios";


const Contact = () => {

  const [contactFormSuccess,setContactFormSuccess] = useState("");
    const [contactFormFailure,setContactFormFailure] = useState("");

  const handleSubmitContactForm = (event)=>{
    event.preventDefault();
    var contact_form = {
      "contact_form_name": event.target.contact_form_name.value,
      "contact_form_email": event.target.contact_form_email.value,
      "contact_form_phone": event.target.contact_form_phone.value,
      "contact_form_message": event.target.contact_form_message.value,
    }

    console.log(contact_form);
    

    axios
      .post("https://affordy.herokuapp.com/api/contact", contact_form)
      .then((response) => {
        // Success
        console.log(response);
        setContactFormSuccess(response.data);
        setContactFormFailure("");
        document.getElementById("contact_form").reset();

      })
      .catch((error) => {
        // Failure
        setContactFormFailure(error.response.statusText);
        setContactFormSuccess("");

        console.log(error.response.statusText);
      })

  }

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* For phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 456 456 4567</div>
                </div>
              </div>
              {/* For Email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">ht39091@gmail.com</div>
                </div>
              </div>
              {/* For phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">
                    H.No.420, Kumar Nagar, Gondia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Form */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get In Touch</div>
                <h5 style={{color: "green"}}>{contactFormSuccess}</h5>
                <form id="contact_form" onSubmit={handleSubmitContactForm}>
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                      <textarea id="contact_form_message" className="text_field contact_form_message" placeholder="Message" rows="10" cols="30"  />
                  </div>
                  
                  <small style={{color: "red"}}>{contactFormFailure}</small>

                  <div className="contact_form_button">
                      <button type="submit" className="button contact_submit_button">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
