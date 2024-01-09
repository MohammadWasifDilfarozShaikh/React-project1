import React from "react";
import "./design.css";
import shoesImg from './brown shoes.webp'
function Contact() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-sm m-auto p-3" style={{width:'50%'}}>
        <h2>Contact Us</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="" id="" className="form-control"></textarea>
        </div>
        <div className="my-3">
          <button className="btn btn-warning">
            <i className="fa-solid fa-paper-plane"></i> Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
