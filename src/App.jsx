import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Verification } from "./pages/Verification";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import Integration from "./pages/Integration";
import Accessories from "./pages/Accessories";
import { Insight } from "./pages/Insight";
import { Contact } from "./pages/Contact";
import { MyCard } from "./pages/MyCard";
import { Blog } from "./pages/Blog";
import LayoutMain from "./Layout/LayoutMain";
import EditAccessories from "./pages/EditAccessories";
import EditQrCode from "./pages/EditQrCode";
import BlogEdit from "./pages/BlogEdit";
import Theme from "./pages/Theme";
import ThemeLayout from "./Layout/ThemeLayout";
import EditFrom from "./pages/EditFrom";
import Setting from "./pages/Setting";
import SettingLayout from "./Layout/SettingLayout";
import Support from "./components/Suport/Support";
import FeatureRequest from "./components/Feature Request/FeatureRequest";
import Subscription from "./components/Subscription/Subscription";
import FormAbout from "./components/My Card/FormAbout";
import ContentSec from "./components/Content/ContentSec";
import { Content } from "./pages/Content";
import ThemesFree from "./components/Themes/ThemesFree";
import { ProfessionalTheme } from "./pages/ProfessionalTheme";
import { BusinessTheme } from "./pages/BusinessTheme";
import { CryptoTheme } from "./pages/CryptoTheme";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mycard" element={<MyCard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/insight" element={<Insight />} />
      <Route path="/integration" element={<Integration />} />

      <Route path="/mycard" element={<LayoutMain />}>
        <Route path="about" element={<FormAbout />} />
        <Route path="content" element={<Content />} />
        <Route path="content/contentSec" element={<ContentSec />} />

        <Route path="blog" element={<Blog />} />
        <Route path="blog/editcard" element={<BlogEdit />} />
        <Route path="qrcode" element={<EditQrCode />} />
        <Route path="accessorie" element={<EditAccessories />} />
        <Route path="themes" element={<ThemeLayout />}>
          <Route index element={<Theme />} />
          <Route path="free-themes" element={<ThemesFree />} />
          <Route path="professional-themes" element={<ProfessionalTheme />} />
          <Route path="business-themes" element={<BusinessTheme />} />
          <Route path="crypto-themes" element={<CryptoTheme />} />
        </Route>
        <Route path="froms" element={<EditFrom />} />
      </Route>

      <Route path="/setting" element={<SettingLayout />}>
        <Route path="edit" element={<Setting />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="support" element={<Support />} />
        <Route path="feature-request" element={<FeatureRequest />} />
      </Route>
    </Routes>
  );
};

export default App;
