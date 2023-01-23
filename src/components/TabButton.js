const TabButton = ({ job, activeTab, toggleTab }) => {
  return (
    <button
      className={`job-btn ${activeTab === job.id ? "active-btn" : ""}`}
      onClick={() => toggleTab(job.id)}
    >
      {job.company}
    </button>
  );
};

export default TabButton;
