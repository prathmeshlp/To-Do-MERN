import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../Assets/api";

function SignUp() {
//   const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  //   useEffect(() => {
  //
  //   }, []);

//   const fetchUsers = () => {
//    axios.get(`${apiUrl}/getusers`).then((res)=>{
//     console.log(res);
//     setUsers(res.data)
//    })
//   }

//   console.log(users, "userslist");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${apiURL}/register`, { email, username, password })
      .then(() => {
        alert("Registration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        // fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user", error);
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[420px] p-9"
          onSubmit={handleSubmit}
        >
          {/* Email Input */}
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 mt-3"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          {/*Username Input */}
          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 mt-3"
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
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 mt-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/* Button */}
          <button
            className="w-[200px] bg-white text-black h-[50px] rounded-md hover:bg-teal-900"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-zinc">
        <h2 className="text-3xl text-white">Sign Up</h2>
      </div>
    </div>
  );
}

export default SignUp;
