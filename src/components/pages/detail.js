import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LoadingCom from "../fetchLoading";
import axios from "axios";
import { useParams, withRouter } from "react-router-dom";
import "./imdex.css";

export default function Detail() {
  const [phone, setPhone] = useState([]);
  const { ph_slug } = useParams();
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDetail = async () => {
    const ph = await axios
      .get("http://127.0.0.1:8000/api/" + ph_slug)
      .then((res) => setPhone(res.data))
      .then(setLoading(false))
      .catch((err) => console.log(err));

    const clr = await axios
      .get("http://127.0.0.1:8000/api/" + ph_slug + "/color")
      .then((res) => setColor(res.data))
      .catch((err) => console.log(err));

    const pri = await axios
      .get("http://127.0.0.1:8000/api/" + ph_slug + "/price")
      .then((res) => setPrice(res.data))
      .catch((err) => console.log(err));

    const im = await axios
      .get("http://127.0.0.1:8000/api/" + ph_slug + "/image")
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));

    setLoading(true);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const App = () => {
    return (
      <>
        <div className="row p-4">
          <div className="col-md-6 ">
            <Carousel autoPlay={false} showStatus={false}>
              <div className="img-container">
                <img
                  src={`http://127.0.0.01:8000` + phone.cover_img}
                  alt="som"
                />
              </div>
              {image.map((i) => (
                <div className="img-container">
                  <img src={`http://127.0.0.01:8000` + i.ph_image} alt="som" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-6  bg-light shadow detail ">
            <h1 className="text-center p-2">
              <i>{phone.ph_name}</i>
            </h1>
            <div className="row mt-3">
              <div className="col-12">
                <div className="d-flex flex-row justify-content-around align-items-center">
                  <h6>
                    Available Color <i class="fas fa-arrow-right"></i>
                  </h6>
                  {color.map((c) => (
                    <h6 key={c.id}>{c.color}</h6>
                  ))}
                </div>
              </div>
            </div>

            <div className="row  p-3">
              <div className="col-4 mb-2">
                <h6>Chipset</h6>
              </div>
              <div className="col-8 mb-2">
                <h6>{phone.ph_chip}</h6>
              </div>
              <div className="col-4 mb-2">
                <h6>Display</h6>
              </div>
              <div className="col-8 mb-2">
                <h6>{phone.ph_display}</h6>
              </div>
              <div className="col-4 mb-2">
                <h6>Main Camera</h6>
              </div>
              <div className="col-8 mb-2">
                <h6>{phone.ph_main_camera}</h6>
              </div>
              <div className="col-4 mb-2">
                <h6>Font Camera</h6>
              </div>
              <div className="col-8 mb-2">
                <h6>{phone.ph_font_camera}</h6>
              </div>
              <div className="col-4 mb-2">
                <h6>Battery</h6>
              </div>
              <div className="col-8 mb-2">
                <h6>{phone.ph_battery}</h6>
              </div>
            </div>

            <div className="row  p-3">
              <div className="col-12 p-3">
                <h5 className="price py-2">Price</h5>
                <div className="d-flex flex-row justify-content-around align-items-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    {price.map((p) => (
                      <h6>{p.storage}</h6>
                    ))}
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    {price.map((p) => (
                      <h6>{p.price} Ks</h6>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container-fluid mt-5 ">
      {loading ? <App /> : <LoadingCom />}
    </div>
  );
}
