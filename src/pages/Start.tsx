import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
// import useFetch from "../CustomHooks/useFetch";
import getRndInt from "../Utils/getRndInt";

type Props = {};

export default function Start({}: Props) {
  // const { result, error, loading } = useFetch(
  //   "https://restcountries.com/v3.1/independent?status=true"
  // );
  // const [country, setCountry] = React.useState<any>(null);
  const location = useLocation();
  const linkStyle = {
    color: "red",
  };
  const linkStyle2 = {
    color: "blue",
  };

  // useEffect(() => {
  //   if (result && result.length > 0) {
  //     let random = getRndInt(0, result.length);
  //     setCountry(result[random]);
  //   }
  // }, [result]);

  // console.log(result);
  // console.log(country);
  return (
    <div>
      {/* <NavLink
        to="/"
        style={({ isActive }) => (isActive ? linkStyle : linkStyle2)}
      ></NavLink> */}
      {location.pathname.includes("flags") ||
      location.pathname.includes("cities") ? (
        <Outlet />
      ) : (
        <>
          <h4>choose a game mode</h4>
        </>
      )}
    </div>
  );
}
