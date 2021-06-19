import React from "react";
import "./imdex.css";
import Iphone from "./phone.png";

import mi from "./mi11utr.png";
import mi11lite from "./mi11lite.png";

export default function Phone() {
  const phones = [
    {
      id: 1,
      name: "Iphone",
      url: "www.google.com",
    },
    {
      id: 2,
      name: "Huawei",
      url: "www.google.com",
    },
    {
      id: 3,
      name: "Samsung",
      url: "www.google.com",
    },
    {
      id: 4,
      name: "Mi",
      url: "www.google.com",
    },
    {
      id: 5,
      name: "Sony",
      url: "www.google.com",
    },
  ];
  return (
    <div className="container-fluid mt-3 ">
      <div className="row mt-md-5 p-5">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <h1 className="text-white p-0 m-0 brand text-center">Apple</h1>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <button className="cate-btn">Category</button>
        </div>
      </div>
      <div className="row px-3 row-container">
        {phones.map((phone) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12  mb-4">
            <div className="item-container shadow">
              <div className="item-img">
                <img src={Iphone} alt="som" />
              </div>
              <div className="item-content">
                <h4 className="text-start">{phone.name}</h4>
                <h5 className="text-end">
                  <a className="text-secondary" href={phone.url}>
                    View
                  </a>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
