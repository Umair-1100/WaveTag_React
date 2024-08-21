import { Link } from "react-router-dom";
import { FormSign } from "./FormSign";
import { SocialBtn } from "./SocialBtn";

export const SecSign = () => {

  return (
    <div className="form-main">
      <div className="form-logo">
        <img src="/Signlogo.png" alt="" />
        <h1>Sign In</h1>
      </div>
    <FormSign />
    <div className="or_lines">
        <h3>Or</h3>
        </div>   
        <SocialBtn />
        <h3 className="text-center text-[0.9rem] my-2 text-[#828282]">Have no account yet?</h3>
        <Link to="/signup" className="register_btn" > Registration </Link >
    </div>

  );
};

