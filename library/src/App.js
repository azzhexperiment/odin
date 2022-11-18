import "./App.css";
import Library from "./Shelf/Shelf";
import Button from "./Button/Button";
import Book from "./Book/Book";

// use state to update Library content

const toggleAddNewBookForm = () => {
  // add form here
  // onsubmit, invoke handleAddBook
};

// probably need to useState

const handleAddBook = (event, title, author, description, pages) => {
  event.preventDefault();
  let library = new Library();
  library.handleAddBookToLibrary(title, author, description, pages);
};

function App() {
  return (
    <div className="App">
      <main>
        <Library className="library">
          <Book
            className="card book"
            title="The Two Towers"
            author="J.R.R. Tokkien"
            description="Part 2 of The Lord of the Rings trilogy."
            pages="500"
          />

          <Book
            className="card book"
            title="The Gunslinger"
            author="Stephen King"
            description="A gunslinger roams the wild."
            pages="300"
          />
        </Library>

        <Button type="submit" action={toggleAddNewBookForm}>
          Add new book
        </Button>
      </main>

      <footer>Zihao</footer>
    </div>
  );
}

export default App;
