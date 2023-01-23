import { MdOutlineDoubleArrow } from "react-icons/md";

const JobInfo = ({ activeTabInfo }) => {
  return (
    <>
      <h3>{activeTabInfo.title}</h3>
      <h4>{activeTabInfo.company}</h4>
      <p className="job-date">{activeTabInfo.date}</p>
      <div className="job-desc">
        <MdOutlineDoubleArrow className="job-icon" />
        <p>{activeTabInfo.description1}</p>
      </div>
      <div className="job-desc">
        <MdOutlineDoubleArrow className="job-icon" />
        <p>{activeTabInfo.description2}</p>
      </div>
      <div className="job-desc">
        <MdOutlineDoubleArrow className="job-icon" />
        <p>{activeTabInfo.description3}</p>
      </div>
      {activeTabInfo.description4 && (
        <div className="job-desc">
          <MdOutlineDoubleArrow className="job-icon" />
          <p>{activeTabInfo.description4}</p>
        </div>
      )}
    </>
  );
};

export default JobInfo;
