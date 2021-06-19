import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mi from "./mi11utr.png";
import mi11lite from "./mi11lite.png";
import phone from "./phone.png";

export default function Detail() {
  return (
    <div className="container-fluid mt-5 p-5">
      <div className="row">
        <div className="col-md-6">
          <Carousel autoPlay={false} showStatus={false}>
            <div>
              <img src={phone} alt="som" />
            </div>
            <div>
              <img src={mi11lite} alt="som" />
            </div>
            <div>
              <img src={mi} alt="som" />
            </div>
          </Carousel>
        </div>
        <div className="col-md-6 bg-light shadow detail">
          <h1 className="text-center p-2">
            <i>I Phone 12 Pro Max</i>
          </h1>
          <div className="row mt-3">
            <div className="col-12">
              <div className="d-flex flex-row justify-content-around align-items-center">
                <h6>
                  Available Color <i class="fas fa-arrow-right"></i>
                </h6>
                <h6>Black</h6>
                <h6>Yellow</h6>
                <h6>Green</h6>
                <h6>Red</h6>
              </div>
            </div>
          </div>

          <div className="row  p-3">
            <div className="col-4 mb-2">
              <h6>Chipset</h6>
            </div>
            <div className="col-8 mb-2">
              <h6>Snapdragon 980(6nm)</h6>
            </div>
            <div className="col-4 mb-2">
              <h6>Display</h6>
            </div>
            <div className="col-8 mb-2">
              <h6>6 inches , 120Hz</h6>
            </div>
            <div className="col-4 mb-2">
              <h6>Main Camera</h6>
            </div>
            <div className="col-8 mb-2">
              <h6>
                Something Something Something Something Something Something
                Something Something Something Something Something Something
                Something
              </h6>
            </div>
            <div className="col-4 mb-2">
              <h6>Font Camera</h6>
            </div>
            <div className="col-8 mb-2">
              <h6>
                Something Something Something Something Something Something
                Something Something Something Something Something Something
                Something
              </h6>
            </div>
            <div className="col-4 mb-2">
              <h6>Battery</h6>
            </div>
            <div className="col-8 mb-2">
              <h6>400mah , 65W</h6>
            </div>
          </div>

          <div className="row  p-3">
            <div className="col-12 p-3">
              <h5 className="price py-2">Price</h5>
              <div className="d-flex flex-row justify-content-around align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h6>4/128</h6>
                  <h6>4/256</h6>
                  <h6>4/512</h6>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h6>1200000 Ks</h6>
                  <h6>1300000 Ks</h6>
                  <h6>1400000 Ks</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
