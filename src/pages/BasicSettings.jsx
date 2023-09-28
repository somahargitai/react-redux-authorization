import AppFrame from "../NavBarAppFrame";
import useAuthorization from "../useAuthorization";

const BasicSettings = () => {
  useAuthorization(["normal"]);

  return (
    <div>
      <h1>Normal Settings</h1>
    </div>
  );
};

export default AppFrame(BasicSettings);
