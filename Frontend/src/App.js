import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddToDo from "./pages/AddToDo";

function App() {
  const isUserSignedIn = !!localStorage.getItem("token");
  console.log(isUserSignedIn, "isusserSigned");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {isUserSignedIn && <Route path="/addtodo" element={<AddToDo />} />}
      </Routes>
    </div>
  );
}

export default App;
