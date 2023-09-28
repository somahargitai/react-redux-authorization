import { Link } from "react-router-dom";

function AppFrame(WrappedComponent) {
  function WrapperComponent() {
    return (
      <div>
        <Navigation />
        <WrappedComponent />
      </div>
    );
  }
  return WrapperComponent;
}

function Navigation() {
  return (
    <div
      className="top-bar"
      style={{
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        height: "65px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div
        className="top-bar-left"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button>
          <Link to="/">Home Page</Link>{" "}
        </button>
        <button>
          <Link to="/login">Login Page</Link>
        </button>
      </div>
    </div>
  );
}

export default AppFrame;
