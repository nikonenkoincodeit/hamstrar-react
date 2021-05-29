import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validators = {
    required: "Не может быть пустым",
  };

  const addHamster = (data) => {
    console.log(data);
  };

  return (
    <div className={!!props.open ? "wrapper-form is-open" : "wrapper-form"}>
      <form className="form" onSubmit={handleSubmit(addHamster)}>
        <h2 className="form-title">add hamster</h2>
        <div
          className="close-form"
          onClick={() => props.togglePopupForm(false)}
        >
          &#10006;
        </div>
        <div className="form-field">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Required",
              },
              minLength: {
                value: 2,
                message: "At least two letters",
              },
              maxLength: {
                value: 10,
                message: "No more than ten letters",
              },
            })}
          />
          {errors.name && errors.name.message && (
            <p className="error">{errors.name && errors.name.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="age">age:</label>
          <input
            type="number"
            id="age"
            name="age"
            {...register("age", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors.age && errors.age.message && (
            <p className="error">{errors.age && errors.age.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="favorit-food">favorit food:</label>
          <input
            type="text"
            id="favorit-food"
            name="favorit-food"
            {...register("favorit-food", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors["favorit-food"] && errors["favorit-food"].message && (
            <p className="error">
              {errors["favorit-food"] && errors["favorit-food"].message}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="favorit-occupation">favorit occupation:</label>
          <input
            type="text"
            id="favorit-occupation"
            name="favorit-occupation"
            {...register("favorit-occupation", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors["favorit-occupation"] &&
            errors["favorit-occupation"].message && (
              <p className="error">
                {errors["favorit-occupation"] &&
                  errors["favorit-occupation"].message}
              </p>
            )}
        </div>
        <div className="form-field">
          <label htmlFor="images">add image</label>
          <select
            name="images"
            {...register("images", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          >
            <option value=""></option>
            <option value="images 1">images 1</option>
            <option value="images 2">images 2</option>
            <option value="images 3">images 3</option>
          </select>
          {errors.images && errors.images.message && (
            <p className="error">{errors.images && errors.images.message}</p>
          )}
        </div>
        <button type="submit" className="btn-add-hamster">
          add
        </button>
      </form>
    </div>
  );
}
