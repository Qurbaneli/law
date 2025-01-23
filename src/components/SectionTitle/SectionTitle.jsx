/* eslint-disable react/prop-types */
import "./sectionTitle.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className="title">
      <h4 className="title__name">{title}</h4>
    </div>
  );
};

export default SectionTitle;
