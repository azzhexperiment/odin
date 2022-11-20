import React from "react";

import "./Card.css";

function Card(props) {
  return <Card className={"card " + props.className}>{props.children}</Card>;
}

export default Card;
