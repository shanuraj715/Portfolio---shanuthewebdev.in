import { useState } from "react";
import { Heading } from "../../components/Index";
import "./contact.css";
import toast from "react-hot-toast";

function ContactUs() {
  const [progressbar, setProgressbar] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const maxMessageLength = 400;
  const messageTextboxHandler = (e) => {
    let text = e.target.value;
    if (text.length <= maxMessageLength) {
      setMessage(text);
      setProgressbar((text.length / maxMessageLength) * 100);
    }
  };

  const validate = () => {
    toast.error("Form is under development", { position: "bottom-right" });
  };

  const submit = () => {
    if (!validate()) return false;
  };

  return (
    <div className="container-fluid contact-form-container" id="cu">
      <div className="container ">
        <Heading color="white">Contact Form</Heading>
        <div className="cf-block">
          <div className="cf-inp-row">
            <div className="" data-aos="zoom-in-right">
              <span>First Name</span>
              <input
                type="text"
                className="contact-form-input"
                placeholder="Shanu"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="" data-aos="zoom-in-left">
              <span>Last Name</span>
              <input
                type="text"
                className="contact-form-input"
                placeholder="Raj"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className="cf-inp-row">
            <div data-aos="zoom-in-up">
              <span>Message</span>
              <textarea
                placeholder="Enter message here"
                value={message}
                onChange={messageTextboxHandler}
              />
            </div>
          </div>
          <div className="cf-inp-row" data-aos="zoom-in-up">
            <div>
              <span>Your Email</span>
              <input
                type="text"
                className="contact-form-input"
                placeholder="shanuraj715@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <span>&nbsp;</span>
              <button
                className="cf-submit-btn"
                style={{ width: "100%" }}
                onClick={submit}
              >
                <i className="fas fa-paper-plane"></i>
                <span>&nbsp;Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cf-progress-bar"
        style={{ width: progressbar + "%" }}
      ></div>
    </div>
  );
}

export default ContactUs;
