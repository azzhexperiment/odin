import Shelf from "./Shelf/Shelf";
import Button from "./Button/Button";
import AddNewBookForm from "./Form/Form";

import "./App.css";

// use state to update Library content
const form = new AddNewBookForm();

const toggleNewBookFormVisibility = () => {
  // TODO: dim back ground

  form.styles.visibility =
    form.styles.visibility === "hidden" ? "visible" : "hidden";
};

// probably need to useState

const handleAddBook = (event, title, author, description, pages) => {
  event.preventDefault();
  let library = new Shelf();
  library.handleAddBookToLibrary(title, author, description, pages);
};

function App() {
  return (
    <div className="App">
      <main>
        <Shelf />

        <Button type="submit" action={toggleNewBookFormVisibility}>
          Add new book
        </Button>
      </main>

      <footer>Zihao</footer>
    </div>
  );
}

export default App;
