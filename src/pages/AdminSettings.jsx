import useAuthorization from "../useAuthorization";
import AppFrame from "../NavBarAppFrame";

const AdminSettings = () => {
  useAuthorization(["admin"]);

  return (
    <div>
      <h1>Admin Settings</h1>
    </div>
  );
};

export default AppFrame(AdminSettings);
