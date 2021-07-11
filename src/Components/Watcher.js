import React from "react";
import "../Components/stype.css";

export default function Watcher() {



    
  return (
    <div className="box">
      <div className="inputData">
        <input type="serch" className="inputField" onChange={(e) => {}} />
      </div>

      <div className="info">
        <h2 className="location">
          <i class="fas fa-street-view"></i>Pune
        </h2>
        <h1 className="temp">20 deg</h1>
        <h3 className="tempmin_max">1222|121313</h3>
      </div>

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
    </div>
  );
}
