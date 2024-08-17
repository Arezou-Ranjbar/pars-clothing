import { useState } from "react";

import "./sign-in-form.scss";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormField = {
  email: "",
  passwoed: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFiels = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // try {
    //   const { user } = await signInAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   console.log(email, password);

    //   setCurrentUser(user);

    //   resetFormFiels();
    // } catch (error) {
    //   switch (error.code) {
    //     case "auth/wrong-password":
    //       alert("incorrect password");
    //       break;

    //     case "auth/user-not-found":
    //       alert("no user associated with this email");
    //       break;
    //   }
    // }

    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      const user = response.user;
      // Access user if available

      if (user) {
        resetFormFiels();
      } else {
        // Handle case where user is undefined
        console.error("User is undefined:", response);
      }
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
