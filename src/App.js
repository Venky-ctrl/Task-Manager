import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import "./App.css";

function App() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

      {user.role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
}

export default App;
