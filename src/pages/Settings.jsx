import { useSelector } from "react-redux";
import BasicSettings from "./BasicSettings";
import AdminSettings from "./AdminSettings";
import AppFrame from "../NavBarAppFrame";
import useAuthorization from "../useAuthorization";

const SettingsPage = () => {
  useAuthorization(["admin", "normal"]);

  const userRole = useSelector((state) => state.roleReducer.role);

  let ComponentToRender;
  switch (userRole) {
    case "admin":
      ComponentToRender = <AdminSettings />;
      break;
    case "normal":
      ComponentToRender = <BasicSettings />;
      break;
    default:
      ComponentToRender = <div></div>;
    // this one shows up for a moment when this page initialized,
    // but it is instantly redirected to a settings page or to login
  }

  return <div>{ComponentToRender}</div>;
};

// we only put here Appframe to avoid navbar blinking until redirection happens
export default AppFrame(SettingsPage);
