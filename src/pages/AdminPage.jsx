import useAuthorization from "../useAuthorization";
import AppFrame from "../NavBarAppFrame";

const AdminPage = () => {
  useAuthorization(["admin"]);

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AppFrame(AdminPage);
