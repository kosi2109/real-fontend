import React, { useEffect, useState } from "react";
import "./imdex.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingCom from "../fetchLoading";
import { Dropdown } from "react-bootstrap";

export default function Phone() {
  const [phones, setPhones] = useState([]);
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState();
  const [loading, setLoading] = useState(false);
  const { br_slug } = useParams();

  const fetchPhone = async () => {
    const ph = await axios
      .get("http://127.0.0.1:8000/api/brand/" + br_slug)
      .then((res) => setPhones(res.data))
      .catch((err) => console.log(err));
    const ct = await axios
      .get("http://127.0.0.1:8000/api/category/" + br_slug)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
    setLoading(true);
  };

  useEffect(() => {
    fetchPhone();
  }, []);

  if (select) {
    var newArray = phones.filter(function (el) {
      return el.category === select;
    });
  }
  if (!select) {
    var newArray = phones.map(function (el) {
      return el;
    });
  }

  var ctName = category.filter((el) => {
    if (el.id === select) {
      return el.ct_name;
    }
  });
  var cname = ctName.map((e) => e.ct_name);
  console.log(loading);
  const App = () => {
    return (
      <>
        <div className="row mt-md-5 p-5">
          <div className="col-lg-6 mb-3 d-flex align-items-center justify-content-center">
            <h1 className="text-white p-0 m-0 brand text-center text-uppercase">
              {br_slug}
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
                {category.map((cat) => (
                  <Dropdown.Item
                    as="button"
                    onClick={() => setSelect(cat.id)}
                    key={cat.id}
                  >
                    {cat.ct_name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row px-3 row-container">
          {newArray.map((phone) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12  mb-4"
              key={phone.id}
            >
              <div className="item-container shadow">
                <div className="item-img">
                  <img
                    src={`http://127.0.0.01:8000` + phone.cover_img}
                    alt="som"
                  />
                </div>
                <div className="item-content">
                  <h4 className="text-start">{phone.ph_name}</h4>
                  <h5 className="text-end">
                    <a
                      className="text-secondary"
                      href={`/detail/` + phone.ph_slug}
                    >
                      View
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
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
