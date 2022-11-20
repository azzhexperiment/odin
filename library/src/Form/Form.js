import Button from "../Button/Button";
import Card from "../Card/Card";

import "./Form.css";

const Form = () => {
  //   this.setState({
  //     visibility: false,
  //   });

  //   let formClass = "card form ";

  //   if (this.state.visibility) {
  //     formClass += "visible";
  //   } else {
  //     formClass = "card form ";
  //   }

  return (
    <Card className="form">
      <h3>Add book</h3>

      <input id="input-title"></input>
      <label htmlFor="input-title">Title</label>

      <input id="input-author"></input>
      <label htmlFor="input-author">Author</label>

      <input id="input-description"></input>
      <label htmlFor="input-description">Description</label>

      <input id="input-pages" type="number"></input>
      <label htmlFor="input-pages">Pages</label>

      <Button action={console.log("")}>Add</Button>
    </Card>
  );
};

export default Form;
