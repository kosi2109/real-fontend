import React from "react";
import phone from "./phone.png";
import "./imdex.css";
import shop from "./shop1.png";
import mi from "./mi11utr.png";
import mi11lite from "./mi11lite.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function index() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="row mt-lg-4 p-3">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-sm-3 mt-5 ">
          <Carousel
            autoPlay={true}
            width="100%"
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            interval="4000"
          >
            <div className="img-container">
              <img src={phone} className="img" alt="I phone" />
            </div>
            <div className="img-container">
              <img src={mi11lite} className="img" alt="mi11lite" />
            </div>
            <div className="img-container">
              <img src={mi} className="img" alt="mi11" />
            </div>
          </Carousel>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-lg-5 mt-sm-2 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-3 welcome">Welcome to Real Mobile</h1>
          <div>
            <p>
              We are waiting to give you a value with the right price.
              <br></br>
              Come And taste out...
            </p>
          </div>
        </div>
      </div>
      <div className="row p-3" id="address">
        <div className="col12">
          <h3 className="text-center mb-5 address">Address</h3>
        </div>

        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-around align-items-center">
          <img src={shop} className="shop-img" alt="shop 2" />
          <div className="p-4">
            <h3>A1,A2 Kanther Market , Magway .</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-around align-items-center">
          <img src={shop} className="shop-img" alt="shop 2" />
          <div className="p-4">
            <h3>A1,A2 Kanther Market , Magway .</h3>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-5 p-3">
        <div className="col-12 text-center">
          <h3 className="text-center mb-5 content">We are Here</h3>
          <div className="btn-container d-flex flex-row justify-content-around align-items-center">
            <div className="icon-ct d-flex flex-column justify-content-center align-items-center">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="icon-ct d-flex flex-column justify-content-center align-items-center">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div className="icon-ct d-flex flex-column justify-content-center align-items-center">
              <i class="fab fa-telegram-plane"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt-5 m-0 p-0 d-flex flex-column justify-content-center align-items-center">
        <h5>@copyright</h5>
      </div>
    </div>
  );
}
