import React from "react";
import Card from "../Card/Card";

import "./Book.css";

function Book(props) {
  return (
    <Card className="book">
      <div className="title">{props.title}</div>
      <div className="author">{props.author}</div>
      <div className="description">{props.description}</div>
      <div className="pages">{props.pages}</div>
    </Card>
  );
}

export default Book;
