import React from "react";
import Cardheader from "./Cardheader.jsx";
import Cardbody from "./Cardbody.jsx";

const Pricecard = ({ cardtype, price, list }) => {
  return (
    <>
      <div className="card">
        <Cardheader cardtype={cardtype} price={price} />
        <Cardbody list={list} />
      </div>
    </>
  );
};

export default Pricecard;
