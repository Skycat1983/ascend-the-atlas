import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

type FormState = {
  [key: string]: string;
};

type FormErrors = {
  [key: string]: string;
};

type FormValidation = {
  [key: string]: (value: string) => string;
};

type FormProps = {
  initialFormState: FormState;
  validation: FormValidation;
  location: any;
  // onSubmit: (state: FormState) => void;
};

const useForm = ({
  initialFormState,
  validation,
  location,
}: // onSubmit
FormProps) => {
  const { signUp, logIn } = useContext(AuthContext);

  const [state, setState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  // validate takes name of the form field and the value of the form field
  const validate = (formName: string, value: string) => {
    //After getting the validation function, the validate function calls it with the current field value (value).
    const errorMessage = validation[formName](value);
    setErrors((errors) => ({ ...errors, [formName]: errorMessage }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("EVENT", e);
    if (location.pathname === "/signup") {
      signUp(state.email, state.password);
    } else {
      logIn(state.email, state.password);
    }

    signUp(state.email, state.password);
  };

  console.log("state", state);

  return { state, errors, handleChange, handleSubmit, validate };
};

export default useForm;
