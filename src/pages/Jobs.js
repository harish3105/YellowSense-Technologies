import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import localforage from "localforage";

const Jobs = ({ history }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://testapi.getlokalapp.com/common/jobs?page=${page}`
        );
        console.log("Full API Response:", response); // Log the entire response object
        console.log("response.data:", response.data); // Log the data part of the response

        // Try accessing jobs from multiple potential fields
        const jobsData =
          response.data?.jobs ||
          response.data?.data ||
          response.data?.results ||
          [];
        console.log("Jobs Data:", jobsData);

        if (Array.isArray(jobsData) && jobsData.length > 0) {
          setJobs((prevJobs) => [...prevJobs, ...jobsData]);
        } else {
          setError("No jobs found or response format is incorrect.");
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Error fetching jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page]);

  const bookmarkJob = async (job) => {
    await localforage.setItem(`bookmark-${job.id}`, job);
    alert("Job bookmarked!");
  };

  const viewDetails = (job) => {
    history.push(`/job/${job.id}`, { job });
  };

  return (
    <div>
      <h1>Jobs</h1>
      {error && <p>{error}</p>}
      {jobs.length === 0 && !loading && <p>No jobs available.</p>}
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onBookmark={bookmarkJob}
          onViewDetails={viewDetails}
        />
      ))}
      {loading && <p>Loading...</p>}
      <button onClick={() => setPage(page + 1)}>Load More Jobs</button>
    </div>
  );
};

export default Jobs;
