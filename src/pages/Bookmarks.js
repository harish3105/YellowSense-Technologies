import React, { useState, useEffect } from "react";
import localforage from "localforage";
import JobCard from "../components/JobCard";

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const keys = await localforage.keys();
      const jobs = await Promise.all(
        keys.map((key) => localforage.getItem(key))
      );
      setBookmarkedJobs(jobs);
    };

    fetchBookmarks();
  }, []);

  return (
    <div>
      <h1>Bookmarked Jobs</h1>
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No bookmarked jobs available.</p>
      )}
    </div>
  );
};

export default Bookmarks;
