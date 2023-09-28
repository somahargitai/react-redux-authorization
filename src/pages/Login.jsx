import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppFrame from "../NavBarAppFrame";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.roleReducer.role);

  const loginAsAdmin = () => {
    dispatch({ type: "LOGIN", payload: "admin" });
    navigate("/admin");
  };
  const loginAsNormalUser = () => {
    dispatch({ type: "LOGIN", payload: "normal" });
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <h1>Login</h1>

      <h2>Current User Role: {JSON.stringify(userRole)}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={loginAsAdmin}> 🔐 Login as Admin</button>
        <button onClick={loginAsNormalUser}>🧑🏻‍🦰 Login as Normal User</button>
        <button onClick={logout}>Logout</button>
        <button>
          <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default AppFrame(Login);
