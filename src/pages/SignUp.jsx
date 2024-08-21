import { FirstSignIn } from "../components/Sign in/FirstSignIn";
import '../components/Sign in/Sign.scss'
import { SecSignUp } from "../components/SignUp/SecSignUp";

export const SignUp = () => {
  return (
    <section className="main">
      <div className="inside_section">
        <FirstSignIn />
        <SecSignUp />
      </div>
    </section>
  )
}
