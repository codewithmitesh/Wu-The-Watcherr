import React from "react";
import "../Components/intropage.css";
import bg from "../Components/Background.png";
import ps from "../Components/planet-small.png";
import pb from "../Components/planet-big.png";
export default function Intropage() {
  let pls = document.getElementById("Planet-small");
  let stars = document.getElementById("Bg-Image");
  let plb = document.getElementById("Planet-big");
  let text = document.getElementById("text");
  let btn = document.getElementById("btn");

  window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    pls.style.top = value * 0.65 + "px";
    plb.style.left = value * -0.5 + "px";
  });

  return (
    <div>
      <div className="Intropage">
        <h2 id="text">Wu - Watcher </h2>
        <a href="#content" id="btn">
          {" "}
          Explore{" "}
        </a>
        <img src={bg} id="Bg-Image" alt="background" />
        <img src={ps} id="Planet-small" alt="background" />
        <img src={pb} id="Plante-big" alt="background" />
      </div>
    </div>
  );
}
