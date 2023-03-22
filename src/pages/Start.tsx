import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

type Props = {};

export default function Start({}: Props) {
  const location = useLocation();
  const linkStyle = {
    color: "red",
  };
  const linkStyle2 = {
    color: "blue",
  };
  return (
    <div>
      {/* <NavLink
        to="/"
        style={({ isActive }) => (isActive ? linkStyle : linkStyle2)}
      ></NavLink> */}
      {location.pathname.includes("sort") ||
      location.pathname.includes("rank") ? (
        <Outlet />
      ) : (
        <>
          <h1>start</h1>
        </>
      )}
    </div>
  );
}
