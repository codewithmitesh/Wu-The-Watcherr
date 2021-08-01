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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat velit sunt quae. Labore voluptas mollitia autem nobis dolore doloremque. Minima odit cupiditate atque, nostrum dignissimos beatae assumenda corporis optio quo?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perferendis, alias cumque dolor velit repellendus quo sequi dignissimos, distinctio debitis recusandae minima est dolore id at non et doloremque. Maxime architecto reiciendis ullam exercitationem tempore, odio id cumque fuga quae impedit dolorem vitae, aliquam necessitatibus sunt adipisci magni porro. Quisquam vitae sunt modi quis nobis? Corrupti quia esse accusamus minus asperiores quis sunt minima dolore commodi repudiandae quibusdam error ipsa, officiis, ad dolores illo reiciendis enim, nam temporibus! Quos laudantium dicta placeat nemo odit doloremque molestiae tempora totam ullam, explicabo ea quaerat aliquam numquam accusamus perferendis reprehenderit aspernatur adipisci odio deserunt! Voluptates officiis amet obcaecati ipsam porro rem animi atque, quia maiores cumque fugiat expedita eaque enim dolore id, nemo itaque vitae quibusdam! Deserunt voluptate, nesciunt eveniet maiores necessitatibus esse et repudiandae tempora voluptatum quidem eius quaerat. Perspiciatis enim harum cumque quibusdam eos accusantium quasi corporis animi dolorem at cum, temporibus totam, voluptatem fuga atque esse ipsa expedita, maxime incidunt? Aut dolore culpa harum aliquid necessitatibus amet, voluptatum eius quidem saepe ipsa ratione laborum a debitis atque, itaque ipsam. Molestiae nam, illo saepe hic architecto sunt fugiat similique tempora sed deleniti accusamus adipisci nisi eveniet omnis? Suscipit magni odio aspernatur.

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
