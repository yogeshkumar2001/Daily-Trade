'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  useState } from "react";

export default function Contact() { // Function name starts with uppercase for React component
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  function onChangeHandler(e) {
    let key = e.target.id;
    let value = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      [key]: value
    }));
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.name,
          email: userData.email,
          message: userData.message
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setStatus("success"); // Update status for success message
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus(error); // Update status for error message
    }
  }

return (
  <div className="w-100 h-100 pb-5" style={{ backgroundColor: "#051A14" }}>
    <div className="breadcrumb_bg w-100 d-flex align-items-end">
      <div className="container h-50">
        <h1 className="text-white">Connect with us</h1>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
      </div>
    </div>
    <div className={"d-flex contact-container"}>
      <div className={`container w-25 mt-5 contact-container`} >
        <div className="card p-3 ps-0" style={{ backgroundColor: "#051A14" }}>
          <div className="text-white" >
            <h3>Let&apos;s <span className="mid-text">Get In Touch</span> With Us</h3>
            <div className="d-flex ">
              <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ margin: "0% 2% 0% 0%", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{ margin: "0% 2% 0% 0%", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faFacebook} size="2xl" style={{ margin: "0% 2% 0% 0%", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faYoutube} size="2xl" style={{ margin: "0% 2% 0%  0", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={`container contact-container w-50 `}>
        <div className="card mt-5 d-flex" style={{ backgroundColor: "#051A14" }}>
          <form className="w-100" onSubmit={onSubmitHandler}>
            <div className="mb-3  text-white">
              <label for="name" className="form-label">Name</label>
              <input type="text" required className="form-control card_bg text-white" id="name" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
            </div>
            <div className="mb-3 text-white">
              <label for="email" className="form-label">Email</label>
              <input type="Email" required className="form-control card_bg text-white" id="email" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
            </div>
            <div className="mb-3  text-white">
              <label for="message" className="form-label">Message</label>
              <textarea type="text" required className="form-control card_bg text-white" id="message" style={{ height: "200px" }} placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
            </div>
            <button className="btn btn-primary w-100">Contact Us Now</button>
          </form>
          {status && <span className="text-secondary p-1">Thanks for connect with us </span>}
        </div>
      </div>

    </div>
  </div>
)
}
