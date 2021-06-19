import React, { useState } from "react";
import "./header.css";
import onClickOutside from "react-onclickoutside";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => {
    setOpen(false);
  };
  return (
    <li
      tabIndex={0}
      role="button"
      onKeyPress={() => toggle(!open)}
      onClick={() => toggle(!open)}
      className="dropdown-title"
    >
      {title}{" "}
      {open ? (
        <i class="fas fa-caret-up"></i>
      ) : (
        <i class="fas fa-caret-down"></i>
      )}
      {open && (
        <ul className="dropdown-content">
          {items.map((item) => (
            <li key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

const clickOutsideConfi = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfi);
