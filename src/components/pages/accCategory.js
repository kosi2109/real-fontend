import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./imdex.css";
import LoadingCom from "../fetchLoading";
import { Dropdown } from "react-bootstrap";

export default function AccCategory() {
  const { ct_slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [brand, setBrand] = useState([]);
  const [select, setSelect] = useState();
  const [cate, setCate] = useState("");
  const fetchItem = async () => {
    const it = await axios
      .get(`http://127.0.0.01:8000/api/` + ct_slug + `/accessory/`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));

    const br = await axios
      .get(`http://127.0.0.01:8000/api/accessory/` + ct_slug + `/brands/`)
      .then((res) => setBrand(res.data))
      .catch((err) => console.log(err));
    const category = await axios
      .get(`http://127.0.0.01:8000/api/accessory/categories/` + ct_slug)
      .then((res) => setCate(res.data.ct_name))
      .catch((err) => console.log(err));
    setLoading(true);
  };
  useEffect(() => {
    fetchItem();
  }, []);
  if (select) {
    var newArray = items.filter(function (el) {
      return el.brand === select;
    });
  }
  if (!select) {
    var newArray = items.map(function (el) {
      return el;
    });
  }

  var ctName = brand.filter((el) => {
    if (el.id === select) {
      return el.br_name;
    }
  });
  var cname = ctName.map((e) => e.br_name);

  const App = () => {
    return (
      <>
        <div className="row mt-md-5 p-4">
          <div className="col-lg-6 mb-3 d-flex align-items-center justify-content-center">
            <h1 className="text-white p-0 m-0 brand text-center text-uppercase">
              {cate}
            </h1>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                {select ? cname : `All`}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => setSelect(0)}>
                  All
                </Dropdown.Item>
                {brand.map((cat) => (
                  <Dropdown.Item
                    as="button"
                    onClick={() => setSelect(cat.id)}
                    key={cat.id}
                  >
                    {cat.br_name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row row-container px-lg-5">
          {newArray.map((item) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12  mb-4"
              key={item.id}
            >
              <div className="category shadow">
                <div className="item-img">
                  <img
                    src={`http://127.0.0.01:8000` + item.cover_img}
                    alt="som"
                  />
                </div>
                <div className="item-content">
                  <h6 className="text-start">
                    {item.acc_name.substring(0, 25)}
                  </h6>
                  <h5 className="text-start">{item.price} Ks</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="container-fluid hero">
      {loading ? <App /> : <LoadingCom />}
    </div>
  );
}
