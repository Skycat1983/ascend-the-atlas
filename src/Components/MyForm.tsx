import React, { useContext } from "react";
import useForm from "../CustomHooks/useForm";
import { initialFormState, validation, onSubmit } from "../Utils/consts";
import { AuthContext } from "../Contexts/AuthContext";
import { useLocation } from "react-router-dom";

type Props = {};

function Form({}: Props) {
  // const { signUp, logIn } = useContext(AuthContext);
  let location = useLocation();

  const { state, errors, handleChange, handleSubmit, validate } = useForm({
    initialFormState,
    validation,
    location,
  });
  // we will get the location from the router, and then we will pass it to the useForm hook

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
