import React, { useState, useEffect } from "react";
import "../Components/stype.css";

export default function Watcher() {
  const [city, setCity] = useState("mumbai");
  const [search, setSearch] = useState("Pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e805b5ce947d9fee12bab196d3444c99`;

      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson);
    };

    fetchApi();
  },[search]);

  return (
    <div className="box">
      <div className="inputData">
        <input type="serch" className="inputField" onChange={(e) => {setSearch(e.target.value)}} />
      </div>

      <div className="info">
        <h2 className="location">
          <i className="fas fa-street-view"></i> {search} 
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
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=e805b5ce947d9fee12bab196d3444c99
//key e805b5ce947d9fee12bab196d3444c99
