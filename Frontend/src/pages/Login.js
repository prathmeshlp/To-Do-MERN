import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../Assets/api";

function Login() {
  // const [users, setUsers] = useState([])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //     fetchUsers();
  //     console.log("Fetch users useeffect");
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  //  const fetchUsers = async () => {
  //     await axios
  //     .get('http://localhost:3001/register')
  //     .then((res) => {
  //         console.log(res.data)
  //         setUsers(res.data)
  //         console.log(users,"users");
  //     })
  // }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiURL}/login`, {
        username,
        password,
      });
      console.log(response);
      const token = response.data.token;
      alert("Login successful");
      setUsername("");
      setPassword("");
      // fetchUsers();
      navigate("/addtodo");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[340px] p-9"
          onSubmit={handleLogin}
        >
          {/*Username Input */}
          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-3 mt-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          {/* Password Input */}
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-3 mt-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/* Button */}
          <button
            className="w-[200px] h-[50px] bg-white text-black rounded-md border hover:bg-teal-900"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-zinc">
        <h2 className="text-3xl text-white ">Login</h2>
      </div>
    </div>
  );
}

export default Login;
