import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const linkStyle1 = {
    color: "red",
    fontSize: "large",
  };

  const linkStyle2 = {
    color: "blue",
    fontSize: "large",
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "1em" }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? linkStyle1 : linkStyle2)}
        >
          Home
        </NavLink>
        <NavLink
          to="/start"
          style={({ isActive }) => (isActive ? linkStyle1 : linkStyle2)}
        >
          Start
        </NavLink>
        {location.pathname.includes("start") ? (
          <>
            -
            <NavLink
              to="/start/flags"
              style={({ isActive }) => (isActive ? linkStyle1 : linkStyle2)}
            >
              flags
            </NavLink>
            <NavLink
              to="/start/cities"
              style={({ isActive }) => (isActive ? linkStyle1 : linkStyle2)}
            >
              cities
            </NavLink>
          </>
        ) : null}
      </div>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? linkStyle1 : linkStyle2)}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        style={({ isActive }) => (isActive ? linkStyle1 : linkStyle2)}
      >
        Signup
      </NavLink>
    </div>
  );
}

export default NavBar;

{
  /* <h1>NavBar</h1> */
}
{
  /* <div style={{ display: "flex", gap: "1em" }}>
        <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>
        <Link style={location.pathname === '/about' ? linkStyle : null} to='about' state={ "send this message to about page" }>About</Link>
      </div> */
}
