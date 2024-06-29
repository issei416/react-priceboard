import React from "react";
import Submitbtn from "./Submitbtn";

const Cardbody = ({ list }) => {
  return (
    <>
      <div className="card-body text-start fs-6">
        {
          <ul className="custom-list">
            {Object.keys(list).map((key) => (
              <li
                className={list[key].isIncluded ? "includedLi" : "mutedLi"}
                key={key}
              >
                {list[key].feature}
              </li>
            ))}
          </ul>
        }
      </div>
      <Submitbtn />
    </>
  );
};

export default Cardbody;
