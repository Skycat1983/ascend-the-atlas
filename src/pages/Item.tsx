import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Item = (props: Props) => {
  const params = useParams();
  const [item, setItem] = React.useState(null);
  return <div>Details</div>;
};

export default Item;
