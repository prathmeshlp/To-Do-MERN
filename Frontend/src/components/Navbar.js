import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const isSignupPage = location.pathname === "/signup";
  const isLoginPage  = location.pathname === "/" || location.pathname === "/login";

  
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link to="/">
        <h1 className="text-3xl">To Do App</h1>
      </Link>
      <ul className="flex gap-6">
        {isUserSignedIn ? (
          <>
            {/* <Link to='/account'><li>Account</li></Link> */}
            <li style={{cursor:"pointer"}} onClick={handleSignOut}>Sign Out</li>
          </>
        ) : (
          <>
            {isSignupPage && (
              <Link to="/login">
                <li style={{cursor:"pointer"}} >Log In</li>
              </Link>
            )}

            {isLoginPage && (
              <Link to="/signup">
                <li style={{cursor:"pointer"}} >Sign Up</li>
              </Link>
            )}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
