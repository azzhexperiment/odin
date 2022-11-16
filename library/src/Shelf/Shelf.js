import React, { Component } from "react";
import Book from "../Book/Book";

class Library extends Component {
  book;

  handleAddBookToLibrary(props, title, author, description, pages) {
    this.book = new Book(props, title, author, description, pages);
  }

  render() {
    return (
      <div className="library">
        {this.props.children}
        {this.book}
      </div>
    );
  }
}

export default Library;
