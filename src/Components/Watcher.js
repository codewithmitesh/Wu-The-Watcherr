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
    <>
      <div className="content" id = "content">
      <div className="wu-text">
     "Shhh!!! Wu is Watching!" <br />
     The Watchers were known to be the oldest species in the universe, and committed to observing and compiling knowledge on all aspects of the universe without any interference. The original name for this race has since been forgotten; they adopted the name after the task they perform.Wu is a Watcher thats Watches each and every possiblities of Multivers., the Watchers were stone totem-like, alien supercomputers with a large red eye that "watched" everything happening in the universe. The Watchers had (not too discreetly) witnessed significant events on Earth.<br/>
     Wu is the Watcher who Observes the Weather of all Worlds but he cannot interfer in anything happening. 
     <br/>Ask Wu the place that exist in the worls and he will return the Current Temprature in degree celsius. Dont irritate him too much otherwise he will curse you!!!  
     ** wu is fictional Character!!

      </div>  
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
          ) : (
            <>
              <div className="info">
                <h2 className="location">
                <i class="fas fa-globe-asia"></i> {search}
                </h2>
                <h1 className="temp">{city.temp}℃</h1>
                <h3 className="tempmin_max">
                  {city.temp_max}℃|{city.temp_min}℃
                </h3>
              </div>
            </>
          )}

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
      </div>
    </>
  );
}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=e805b5ce947d9fee12bab196d3444c99
//key e805b5ce947d9fee12bab196d3444c99
