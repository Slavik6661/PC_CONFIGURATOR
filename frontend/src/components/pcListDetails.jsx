import React from "react";
import { getCpu } from "../api/dataPc";
const PCListDetails = () => {
  return pcElements.map((element, index) => {
    return (
      <div id="deatails" className="deatails">
        {/* { getCpu.map(()=>{

        })} */}

        <li>{/* <p>hel!</p> */}</li>
      </div>
    );
  });
};

export default PCListDetails;
