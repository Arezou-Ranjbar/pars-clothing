import SignInForm from "../../components/sign-in-form copy/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
