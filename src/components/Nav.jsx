import React, { useState, useRef } from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";
import NavItems from "./navItems";
import { useDispatch } from "react-redux";
import { toggleAction } from "../actions/navAction";
import { useSelector } from "react-redux";

export default function Nav() {
  const [active, setActive] = useState(false);
  const overlayRemove = useRef();
  const dispatch = useDispatch();
  const navToggle = useSelector((state) => state.nav.isOpen);

  const handleClick = () => {
    setActive(!active);
    overlayRemove.current.offsetParent.classList.remove("overlay");
    if (navToggle === true) {
      dispatch(toggleAction());
    }
  };

  return (
    <nav className="navBar">
      <button
        ref={overlayRemove}
        type="button "
        className="nav"
        onClick={handleClick}
      >
        <div className={!active ? "navIcon" : "close"}></div>
      </button>
      <div className={!active ? "navContent" : "navContentActive"}>
        {NavItems.map((items) => {
          return (
            <div key={items.id}>
              <Link
                className="linkItem"
                onClick={handleClick}
                to={items.url}
              >
                {items.item}
              </Link>
              <div className="underline"></div>
            </div>
          );
        })}
        <button type="button " className="nav" onClick={handleClick}>
          <div className={!active ? "navIcon" : "close"}></div>
        </button>
      </div>
    </nav>
  );
}
