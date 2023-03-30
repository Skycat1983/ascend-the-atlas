import React from "react";
import Form from "../Components/MyForm";
import useForm from "../CustomHooks/useForm";
import { initialFormState } from "../Utils/consts";

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
