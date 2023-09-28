// useAuthorization.js
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthorization = (allowedRoles) => {
  const userRole = useSelector((state) => state.roleReducer.role);
  const isAuthenticated = useSelector((state) => state.roleReducer.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (allowedRoles.includes("public")) {
      return;
    }
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (!allowedRoles.includes(userRole)) {
      navigate("/login");
      return;
    }
    return;
  }, [userRole, isAuthenticated, allowedRoles, navigate]);

  return { userRole, isAuthenticated };
};

export default useAuthorization;
