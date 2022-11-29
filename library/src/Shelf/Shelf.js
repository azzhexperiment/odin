import React, { Component } from "react";
import Book from "../Book/Book";

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: "The Two Towers",
          author: "J.R.R. Tokkien",
          description: "Part 2 of The Lord of the Rings trilogy.",
          pages: "500",
        },
        {
          title: "The Gunslinger",
          author: "Stephen King",
          description: "A gunslinger roams the wild.",
          pages: "300",
        },
      ],
    };
  }

  handleAddBookToLibrary(
    title,
    author = "Unknown",
    description = "No description available",
    pages = "Unknown"
  ) {
    this.setState({
      books: this.state.books.concat([
        {
          title,
          author,
          description,
          pages,
        },
      ]),
    });
  }

  render() {
    const library = this.state.books.map((book) => {
      return (
        <Book
          title={book.title}
          author={book.author}
          description={book.description}
          pages={book.pages}
        />
      );
    });

    return <div className="shelf">{this.renderBooks(library)}</div>;
  }
}

export default Shelf;
