import React from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/jobs">Jobs</Link>
      <Link to="/bookmarks">Bookmarks</Link>
    </nav>
  );
};

export default BottomNavigation;
