'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function contact() {
  function onChangeHandler(e) {

  }
  return (
    <div className="w-100 h-100 pb-5" style={{ backgroundColor: "#051A14" }}>
      <div className="breadcrumb_bg w-100 d-flex align-items-end">
        <div className="container h-50">
          <h1 className="text-white">Connect with us</h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis.</p>
        </div>
      </div>
      <div className="d-flex ">
        <div className="container w-25" style={{ marginLeft: "5%" }}>
          <div className="card p-3" id="result" style={{ backgroundColor: "#051A14", marginTop: "25%", }}>
            <div className="text-white" >
              <h3>Let’s <span className="mid-text">Get In Touch</span> With Us</h3>
              <div className="d-flex justify-content-between">
              <FontAwesomeIcon icon={faInstagram} size="2xl"  />
              <FontAwesomeIcon icon={faXTwitter} size="2xl" />
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
              <FontAwesomeIcon icon={faYoutube} size="2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="container w-50 " style={{ marginLeft: "5%", width: "100%" }}>
          <div className="card mt-5 d-flex" style={{ backgroundColor: "#051A14" }}>
            <form className="w-100">
              <div class="mb-3  text-white">
                <label for="amount" class="form-label">Name</label>
                <input type="number" class="form-control card_bg text-white" id="amount" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
              </div>
              <div class="mb-3 text-white">
                <label for="amount" class="form-label">Email</label>
                <input type="number" class="form-control card_bg text-white" id="duration" placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
              </div>
              <div class="mb-3  text-white">
                <label for="amount" class="form-label">Message</label>
                <textarea type="number" class="form-control card_bg text-white" id="return" style={{height:"200px"}}placeholder="Monthly Investment Amount:" onChange={(e) => { onChangeHandler(e) }} />
              </div>
              <button className="btn btn-primary w-100">Contact Us now</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
