import React from "react";
import "./contact.css";

function ContactUS() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="first-container">
          <div className="info-container">
            <div>
              <img className="icon" />
              <h3>Address</h3>
              <p>Lahore , Pakistan</p>
            </div>
            <div>
              <img className="icon" />
              <h3>Lets Talk</h3>
              <p style={{ color: "#999" }}>+92 3032172369</p>
              <p style={{ color: "#999" }}>+92 3441103225</p>
              <p style={{ color: "#999" }}>+92 3104009024</p>
            </div>
            <div>
              <img className="icon" />
              <h3>General Support</h3>
              <p style={{ color: "#999" }}>trimax_solutions@gmail.com</p>
              <p style={{ color: "#999" }}>trimax_solutions@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="second-container">
          <h2>Send Us A Message</h2>
          <form>
            <div className="form-group">
              <label for="name-input">Tell us your name*</label>
              <input
                id="name-input"
                type="text"
                placeholder="First name"
                required="required"
              />
              <input type="text" placeholder="Last name" required="required" />
            </div>
            <div className="form-group">
              <label for="email-input">Enter your email*</label>
              <input
                id="email-input"
                type="text"
                placeholder="Eg. example@email.com"
                required="required"
              />
            </div>
            <div className="form-group">
              <label for="message-textarea">Message</label>
              <textarea
                id="message-textarea"
                placeholder="Write us a message"
              ></textarea>
            </div>
            <button>Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
