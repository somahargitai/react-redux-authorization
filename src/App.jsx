import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Terms from "./pages/Terms";
import SettingsPage from "./pages/Settings";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms" element={<Terms />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
