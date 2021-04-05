import React, { useState } from "react";
import "./contact.css";
import Axios from "axios";

function ContactUS() {
  const [emailInfo, setemailInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    send: false,
    errorMessge: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();

    let data = {
      firstname: emailInfo.firstname,
      lastname: emailInfo.lastname,
      email: emailInfo.email,
      message: emailInfo.message,
    };

    Axios.post("https://infinite-ocean-41607.herokuapp.com/sendEmail", data);
    setemailInfo({
      ...emailInfo,
      errorMessge:
        "Your email has been sent successfully, our team will contact you soon.",
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="contact-heading">
        <div className="a">
          <div className="b">
            <div className="c">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
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
                <p style={{ color: "#999" }}>trimaxsolutionteam@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="second-container">
            <h2>
              Send Us A Message with your project details and we will contact
              you as soon as possible.
            </h2>
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label for="name-input">Tell us your name*</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="First name"
                  value={emailInfo.firstname}
                  required="required"
                  onChange={(e) =>
                    setemailInfo({ ...emailInfo, firstname: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={emailInfo.lastname}
                  required="required"
                  onChange={(e) =>
                    setemailInfo({ ...emailInfo, lastname: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label for="email-input">Enter your email*</label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Eg. example@email.com"
                  value={emailInfo.email}
                  required="required"
                  onChange={(e) =>
                    setemailInfo({ ...emailInfo, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label for="message-textarea">Project Details</label>
                <textarea
                  id="message-textarea"
                  placeholder="Write us a message"
                  value={emailInfo.message}
                  required="required"
                  onChange={(e) =>
                    setemailInfo({ ...emailInfo, message: e.target.value })
                  }
                ></textarea>
              </div>
              <h6>{emailInfo.errorMessge}</h6>
              <button type="submit" name="submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
