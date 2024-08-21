import { FirstSignIn } from "../components/Sign in/FirstSignIn";
import { SecSign } from "../components/Sign in/SecSign";
import  "../components/Sign in/Sign.scss";

export const SignIn = () => {
  return (
    <section className="main">
      <div className="inside_section">
        <FirstSignIn />
        <SecSign />
      </div>
    </section>
  );
};
