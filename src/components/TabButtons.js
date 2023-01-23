import TabButton from "./TabButton";

const TabButtons = ({ jobs, toggleTab, activeTab }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => (
        <TabButton
          key={job.id}
          job={job}
          activeTab={activeTab}
          toggleTab={toggleTab}
        />
      ))}
    </div>
  );
};

export default TabButtons;
