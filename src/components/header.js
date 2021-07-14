import React, { useEffect, useState } from "react";
import logo from "./logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import axios from "axios";

export default function Header() {
  const [active, setActive] = useState(true);
  const [items, setItems] = useState([]);
  const [phones, setPhones] = useState([]);
  const [text, setText] = useState("");
  const [has, setHas] = useState(false);
  const [phsugessions, setPhonesugession] = useState([]);
  const navAvtive = () => {
    return setActive(!active);
  };

  const fetchBrand = async () => {
    const br = await axios
      .get("http://127.0.0.1:8000/api/brand/all")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
    const ph = await axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => setPhones(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBrand();
  }, []);

  const searchHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = phones.filter((ph) => {
        const regex = new RegExp(`${text}`, "i");
        setHas(true);
        return ph.ph_name.toLowerCase().match(regex);
      });
    } else {
      setHas(false);
    }
    setPhonesugession(matches);
    setText(text);
  };

  const SugHas = () => {
    return (
      <>
        <ul className="suggest">
          {phsugessions.map((p) => {
            return (
              <li key={p.id}>
                <img alt="ph" src={`http://127.0.0.01:8000` + p.cover_img} />
                <a href={`/detail/` + p.ph_slug}>{p.ph_name}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  const SugNo = () => {
    return (
      <>
        <ul className="suggest">
          <li className="nrs">No result</li>
        </ul>
      </>
    );
  };

  const Sug = () => {
    if (phsugessions.length < 1) {
      return <SugNo />;
    } else {
      return <SugHas />;
    }
  };
  return (
    <nav className="fixed-top header shadow" id="nav-bar">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <ul className={active ? "nav-links" : "nav-links active"}>
        <div className={has ? "search act" : "search "}>
          <div>
            <i class="fas fa-search"></i>
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => searchHandler(e.target.value)}
            value={text}
          />
          {has ? <Sug /> : ""}
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>

        <Dropdown title="Brand" items={items} />

        <li>
          <Link to="/accessories&gudgets">Accessory</Link>
        </li>
      </ul>
      <div onClick={() => navAvtive()} className="burger">
        <div className={active ? "non-burger" : "burger1"}></div>
        <div className={active ? "non-burger" : "non-burger"}></div>
        <div className={active ? "non-burger" : "burger3"}></div>
      </div>
    </nav>
  );
}
