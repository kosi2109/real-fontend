import React, { useEffect, useState } from "react";
import logo from "./logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import axios from "axios";

export default function Header() {
  const [active, setActive] = useState(true);
  const [items, setItems] = useState([]);
  const navAvtive = () => {
    return setActive(!active);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/brand/all")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [setItems]);

  return (
    <nav className="fixed-top header shadow" id="nav-bar">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <ul className={active ? "nav-links" : "nav-links active"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <Dropdown title="Brand" items={items} />

        <li>
          <a href="#">Acceries & Gudgets</a>
        </li>
        <form className="search" method="POST">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </ul>
      <div onClick={() => navAvtive()} className="burger">
        <div className={active ? "non-burger" : "burger1"}></div>
        <div className={active ? "non-burger" : "non-burger"}></div>
        <div className={active ? "non-burger" : "burger3"}></div>
      </div>
    </nav>
  );
}
