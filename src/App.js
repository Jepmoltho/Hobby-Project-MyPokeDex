import "./App.css";
import UserRegistration from "./Components/UserRegistration";
import UserLogin from "./Components/UserLogin";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
