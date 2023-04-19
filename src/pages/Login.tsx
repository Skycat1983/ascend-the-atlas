import React from "react";
import Form from "../Components/MyForm";
import useForm from "../customHooks/useForm";
import { initialFormState } from "../utils/consts";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      Login
      <Form></Form>
    </div>
  );
};

export default Login;
