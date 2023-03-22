import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

type Props = {};

const Error404 = (props: Props) => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = React.useState(false);
  //Navigate is component.

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 3000);
  }, []);

  return (
    <div>
      Error404
      <button onClick={() => navigate(-1)}>go back...</button>
      {redirect && <Navigate to="/" replace={true} />}
    </div>
  );
};

export default Error404;
