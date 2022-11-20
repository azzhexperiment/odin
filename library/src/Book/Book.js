import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  constructor(
    props,
    title,
    author = "Unknown",
    description = "This book has no description.",
    pages = "Unknown"
  ) {
    super(props);
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
  }

  render() {
    return (
      <div className="card book">
        <p className="title">{this.props.title}</p>
        <p className="author">{this.props.author}</p>
        <p className="pages">{this.props.pages} pages</p>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default Book;
