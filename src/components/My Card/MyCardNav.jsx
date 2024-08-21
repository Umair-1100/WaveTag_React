import LogoProfile from "../Home/LogoProfile";
import { MyCardComp } from "../Home/MyCardComp";
import { Navbar } from "../Home/Navbar";

const MyCardNav = () => {
  return (
    <>
      <LogoProfile />
      <Navbar />
      <MyCardComp lable="Edit" visible="hidden" />
    </>
  );
};

export default MyCardNav;
