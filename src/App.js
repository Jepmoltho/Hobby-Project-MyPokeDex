import "./App.css";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

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
