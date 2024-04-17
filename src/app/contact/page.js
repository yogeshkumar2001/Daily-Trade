'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
export default function Contact() {
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    message:""
  })
  const [status,setStatus] =useState(null)
  function onChangeHandler(e) {
    let key = e.target.id;
    let value = e.target.value;
    setUserData((userData)=>(
      {...userData,[key]:value}
    ))
  }
  async function onSubmitHandler(e) {
    e.preventDefault();
    let res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content_Type": "application/json" },
      body: JSON.stringify({
        "username": userData.name,
        "email": userData.email,
        "message": userData.message
      })
      
  })
  setStatus(true)
}
let isMobile = window.matchMedia("(max-width:500px)").matches
return (
  <div className="w-100 h-100 pb-5" style={{ backgroundColor: "#051A14" }}>
    <div className="breadcrumb_bg w-100 d-flex align-items-end">
      <div className="container h-50">
        <h1 className="text-white">Connect with us</h1>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
      </div>
    </div>
    <div className={isMobile ? "" : "d-flex"}>
      <div className={`container ${isMobile ? "w-100" : "w-25 mt-5"}`} >
        <div className="card p-3" style={{ backgroundColor: "#051A14" }}>
          <div className="text-white" >
            <h3>Let’s <span className="mid-text">Get In Touch</span> With Us</h3>
            <div className="d-flex ">
              <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ margin: "0% 2% 0% 0%", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{ margin: "0% 2% 0% 0%", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faFacebook} size="2xl" style={{ margin: "0% 2% 0% 0%", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faYoutube} size="2xl" style={{ margin: "0% 2% 0%  0", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${isMobile ? "w-100" : "w-50 "}`}>
        <div className="card mt-5 d-flex" style={{ backgroundColor: "#051A14" }}>
          <form className="w-100" onSubmit={onSubmitHandler}>
            <div class="mb-3  text-white">
              <label for="name" class="form-label">Name</label>
              <input type="text" required class="form-control card_bg text-white" id="name" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
            </div>
            <div class="mb-3 text-white">
              <label for="email" class="form-label">Email</label>
              <input type="Email" required class="form-control card_bg text-white" id="email" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
            </div>
            <div class="mb-3  text-white">
              <label for="message" class="form-label">Message</label>
              <textarea type="text" required class="form-control card_bg text-white" id="message" style={{ height: "200px" }} placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
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
