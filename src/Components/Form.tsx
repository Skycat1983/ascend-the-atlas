import React from "react";
import useForm from "../CustomHooks/useForm";
import { initialFormState, validation, onSubmit } from "../Utils/consts";

type Props = {};

function Form({}: Props) {
  const { state, errors, handleChange, handleSubmit, validate } = useForm({
    initialFormState,
    validation,
    onSubmit,
  });

  console.log(state);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        alignItems: "flex-start",
      }}
    >
      {/* FORM NEEDED FOR FORM EVENT */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="email address"
          onChange={handleChange}
        ></input>
        <input
          name="password"
          value={state.password}
          type="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
