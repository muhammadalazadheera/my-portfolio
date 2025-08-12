import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div>
      <nav className="w-full p-4 h-[55px] flex justify-center items-center space-x-4">
        <ul>
          <li className="list-">
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#languagentools">Language & Tools</a>
          </li>
          <li>
            <a href="#my-projects">Projects</a>
          </li>
          <li>
            <a href="#github-stats">Stats</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
