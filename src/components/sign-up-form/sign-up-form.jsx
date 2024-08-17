import { useState } from "react";
import "./sign-up-form.scss";
import {
  CreateAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

const defaultFormField = {
  displayName: "",
  email: "",
  passwoed: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFiels = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await CreateAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFiels();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use");
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
