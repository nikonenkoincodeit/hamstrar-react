import "./Form.css";

export default function Form(props) {
  const addHamster = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((key, value) => {
      console.log(key, value);
    });
    e.target.reset();
  };

  return (
    <div className={!!props.open ? "wrapper-form is-open" : "wrapper-form"}>
      <form className="form" onSubmit={addHamster}>
        <h2 className="form-title">add hamster</h2>
        <div
          className="close-form"
          onClick={() => props.togglePopupForm(false)}
        >
          &#10006;
        </div>
        <div>
          <label htmlFor="name">name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="age">age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div>
          <label htmlFor="favorit-food">favorit food:</label>
          <input type="text" id="favorit-food" name="favorit-food" />
        </div>
        <div>
          <label htmlFor="favorit-occupation">favorit occupation:</label>
          <input
            type="text"
            id="favorit-occupation"
            name="favorit-occupation"
          />
        </div>
        <div>
          <label htmlFor="images">add image</label>
          <select name="images">
            <option value="images 1">images 1</option>
            <option value="images 2">images 2</option>
            <option value="images 3">images 3</option>
          </select>
        </div>
        <button type="submit" className="btn-add-hamster">
          add
        </button>
      </form>
    </div>
  );
}
