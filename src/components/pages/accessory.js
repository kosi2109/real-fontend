import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./imdex.css";
import LoadingCom from "../fetchLoading";
import Shop from "./shop1.png";
export default function Accessory() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  const fetchAccCategory = async () => {
    const cat = await axios
      .get(`http://127.0.0.1:8000/api/accessory/categories/`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));

    setLoading(true);
  };
  const App = () => {
    return (
      <>
        <div className="row py-5 px-lg-5">
          {category.map((c) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12  mb-4"
              key={c.id}
            >
              <Link
                to={"/accessories&gudgets/" + c.ct_slug}
                className="text-decoration-none text-secondary"
              >
                <div className="ct-container p-1 justify-content-between">
                  <div className="ct-img">
                    <img
                      src={`http://127.0.0.01:8000` + c.ct_image}
                      alt="som"
                    />
                  </div>
                  <div className="ct-content d-flex justify-content-center align-items-end">
                    <h4 className="text-center p-3">{c.ct_name}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  };
  useEffect(() => {
    fetchAccCategory();
  }, []);

  return (
    <div className="container-fluid hero">
      {loading ? <App /> : <LoadingCom />}
    </div>
  );
}
