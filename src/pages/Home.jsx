import useAuthorization from "../useAuthorization";
// redux
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppFrame from "../NavBarAppFrame";

const Home = () => {
  useAuthorization(["public"]);

  // redux
  const userRole = useSelector((state) => state.roleReducer.role);

  return (
    <div className="home">
      <h1>Home</h1>
      {/* current role */}
      <h2>Current Role: {JSON.stringify(userRole)}</h2>

      {/* navigation */}
      <div
        className="page_map_links"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <button>
          <Link to="/admin">Admin Page</Link>
        </button>
        <button>
          <Link to="/settings">Settings Page</Link>
        </button>
        <button>
          <Link to="/terms">Terms Page</Link>
        </button>
      </div>
    </div>
  );
};

export default AppFrame(Home);
