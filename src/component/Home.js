import React from "react";
import "./design.css";
import BannerImg from "./shoes.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container-fluid vh-100">
    <div className="row row-cols-2 align-items-center justify-content-center vh-100">
      <div className="col">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="title-2">NEW PRODUCT</h3>
        <h1 className="title-1">Cool Air Shoes</h1>
        <Link to="/blogs" className="btn btn-warning my-3">Checkout</Link>
        </div>
      </div>
      <div className="col">
      <img src={BannerImg} alt="" width={500} className="img-fluid" />
      </div>
    </div>
    </div>
  );
}

export default Home;
