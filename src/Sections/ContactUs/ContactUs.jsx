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
    if( !fname ){
      toast.error("Please enter your first name to submit your query.", {position: 'bottom-left'})
      return
    }
    if( fname.length < 3){
      toast.error("First name should be at least 3 characters.", {position: 'bottom-left'})
      return
    }
    if( !message ){
      toast.error("Please enter your message in the message box.", {position: 'bottom-left'})
      return
    }
    if( message.length < 30 ){
      toast.error("Message length should be at least 30 characters", {position: 'bottom-left'})
      return
    }
    if(!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      toast.error("Please enter a valid email", {position: 'bottom-left'})
      return
    }
    return true
  };

  const submit = () => {
    if (!validate()) return false;
    const toastId = toast("Submitting your query.", {
      icon: '😊',
      duration: 10000,
      position: 'bottom-center'
    })
    fetch('https://projects.techfacts007.in/send-email-api/shanuthewebdev.in_form.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: '4ZkIRkfe35c0WqJT2N4j3NSxPb0ED3NtIgrssKYHb4JB4OKIDH1eYlXRF0edE87S',
        emailType:"html",
        subject: "🟡 ShanuTheWebDev - Contact Form - Query",
        message,
        name: `${fname} ${lname}`,
        userEmail: email,
        emails: 'shanuraj715@gmail.com'

      })
    })
    .then( res => {
      if( res.ok){
        return res.json()
      }
      throw new Error()
    })
    .then( json => {
      if(json.status){
        toast.dismiss(toastId)
        toast.success("Query submitted successfully. We will contact you soon.", {position: 'bottom-center'});
        setFname('')
        setLname('')
        setMessage('')
        setEmail('')
        window.scrollTo(0, 0)
        return
      }
      toast.dismiss(toastId)
      toast.error(json.error_message ?? "Error!!. Please contact us on WhatsApp.", {position: 'bottom-left'})
    })
    .catch(err => {
      console.log( err)
      toast.dismiss(toastId)
      toast.error("Some error occured", {position: 'bottom-left'})
    })
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
                placeholder="[Required]"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="" data-aos="zoom-in-left">
              <span>Last Name</span>
              <input
                type="text"
                className="contact-form-input"
                placeholder="[Optional]"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className="cf-inp-row">
            <div data-aos="zoom-in-up">
              <span>Message</span>
              <textarea
                placeholder="Enter message here [Required]"
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
                placeholder="[Required]"
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
