import React, { useState, useEffect } from "react";
import "../Components/stype.css";

export default function Watcher() {
  const [city, setCity] = useState("mumbai");
  const [search, setSearch] = useState("Pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e805b5ce947d9fee12bab196d3444c99`;

      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
        // console.log(resJson);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="box">
      <div className="inputData">
        <input
          type="serch"
          className="inputField"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {!city ? (
        <p className="errorMsg"> Stay in your universe!!</p>
      ) : (<>
        <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"></i> {search}
          </h2>
          <h1 className="temp">{city.temp}℃</h1>
          <h3 className="tempmin_max">{city.temp_max}℃|{city.temp_min}℃</h3>
        </div>
        </>
      )}

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
    </div>
  );
}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=e805b5ce947d9fee12bab196d3444c99
//key e805b5ce947d9fee12bab196d3444c99
