import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Jobs from "./pages/Jobs";
import Bookmarks from "./pages/Bookmarks";
import JobDetails from "./pages/JobDetails";
import BottomNavigation from "./components/BottomNavigation";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* All routes defined inside the Routes component */}
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/jobs" />} />
          {/* Jobs List Route */}
          <Route path="/jobs" element={<Jobs />} />
          {/* Bookmarks Route */}
          <Route path="/bookmarks" element={<Bookmarks />} />
          {/* Job Details Route */}
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
        {/* Bottom navigation always visible */}
        <BottomNavigation />
      </div>
    </Router>
  );
};

export default App;
