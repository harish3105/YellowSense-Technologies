import React from "react";

const JobDetails = ({ location }) => {
  const { job } = location.state;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      {/* Display any other job details here */}
    </div>
  );
};

export default JobDetails;
