import React from "react";
import ApprovalCard from './ApprovalCard';
const ComponentDetails = (props) => {
  return (
      <ApprovalCard>
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
    </ApprovalCard>
  );
};
export default ComponentDetails;
