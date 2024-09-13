import React from "react";

const JobCard = ({ job, onBookmark, onViewDetails }) => {
  const {
    title = "No Title Available",
    job_location_slug: location = "No Location Available",
    amount: salary = "No Salary Available",
    whatsapp_no: phone = "No Phone Available",
    custom_link: contactLink = "",
  } = job;

  return (
    <div className="job-card" onClick={() => onViewDetails(job)}>
      <h2>{title}</h2>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Salary:</strong> {salary}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onBookmark(job);
        }}
      >
        Bookmark
      </button>
      {contactLink && (
        <a href={contactLink} target="_blank" rel="noopener noreferrer">
          Contact HR
        </a>
      )}
    </div>
  );
};

export default JobCard;
