import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/imdex.css";
import { Form, Button } from "react-bootstrap";

export default function AdminPost() {
  const initialdata = {
    brand: null,
    category: null,
    ph_name: "",
    ph_chip: "",
    ph_display: "",
    ph_main_camera: "",
    ph_font_camera: "",
    ph_battery: "",
    ph_slug: "",
    cover_img: null,
  };
  const [formdata, setFormdata] = useState(initialdata);
  const [loading, setLoading] = useState();
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [url, setUrl] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("brand", formdata.brand);
    uploadData.append("category", formdata.category);
    uploadData.append("ph_name", formdata.ph_name);
    uploadData.append("ph_chip", formdata.onChange);
    uploadData.append("ph_display", formdata.ph_display);
    uploadData.append("ph_main_camera", formdata.ph_main_camera);
    uploadData.append("ph_font_camera", formdata.ph_font_camera);
    uploadData.append("ph_battery", formdata.ph_battery);
    uploadData.append("ph_slug", formdata.ph_slug);
    uploadData.append("cover_img", formdata.cover_img);

    axios
      .post("http://127.0.0.1:8000/api/", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const cat = async () => {
    const category = await axios
      .get(`http://127.0.0.1:8000/api/brand/all/`)
      .then((res) => setBrand(res.data))
      .catch((err) => console.log(err));
  };

  const brn = () => {
    const brand = axios
      .get(url)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    cat();
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormdata({
      ...formdata,
      [e.target.name]: value,
    });
  };
  const something = (e) => {
    const brandselect = e.target.value;
    setFormdata({ ...formdata, brand: brandselect });
    setUrl(`http://127.0.0.1:8000/api/category/id/` + brandselect);
  };
  console.log(formdata);
  return (
    <div className="container hero">
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={something}
        onClick={brn}
      >
        <option selected>Brand</option>
        {brand.map((b) => (
          <option value={b.id} key={b.id}>
            {b.br_name}
          </option>
        ))}
      </select>

      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          const categoryselect = e.target.value;
          setFormdata({ ...formdata, category: categoryselect });
        }}
      >
        <option selected>Category</option>
        {category.map((b) => (
          <option value={b.id} key={b.id}>
            {b.ct_name}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="ph_name"
        value={formdata.ph_name}
        onChange={handleChange}
        placeholder="ph_name"
        className="form-control"
      />
      <input
        type="text"
        name="ph_chip"
        value={formdata.ph_chip}
        onChange={handleChange}
        placeholder="ph_chip"
        className="form-control"
      />
      <input
        type="text"
        name="ph_display"
        value={formdata.ph_display}
        onChange={handleChange}
        placeholder="ph_display"
        className="form-control"
      />
      <input
        type="text"
        name="ph_main_camera"
        value={formdata.ph_main_camera}
        onChange={handleChange}
        placeholder="ph_main_camera"
        className="form-control"
      />
      <input
        type="text"
        name="ph_font_camera"
        value={formdata.ph_font_camera}
        onChange={handleChange}
        placeholder="ph_font_camera"
        className="form-control"
      />
      <input
        type="text"
        name="ph_battery"
        value={formdata.ph_battery}
        onChange={handleChange}
        placeholder="ph_battery"
        className="form-control"
      />
      <input
        type="text"
        name="ph_slug"
        value={formdata.ph_slug}
        onChange={handleChange}
        placeholder="ph_slug"
      />
      <input
        type="file"
        name="image"
        src={formdata.cover_img}
        onChange={(e) =>
          setFormdata({ ...formdata, cover_img: e.target.files[0] })
        }
        placeholder="image"
      />
      <img src={formdata.cover_img} alt="" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
