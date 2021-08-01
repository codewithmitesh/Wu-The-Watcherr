import React,{useState,useEffect} from "react";
import "../Components/intropage.css";
import bg from "../Components/Background.png";
import ps from "../Components/planet-small.png";
import pb from "../Components/planet-big.png";
export default function Intropage() {


 const [offsetY, setoffsetY] = useState(0);
 
 const handleScroll = () =>{
   setoffsetY(window.scrollY);
 }


useEffect(() => {
  window.addEventListener('scroll',handleScroll);
  return () => {
    window.removeEventListener('scroll',handleScroll);
  }
}, [])
// console.log(offsetY);
 

  // window.addEventListener("scroll", function () {
  // let value = this.window.scrollY,
  //   // pls.style.top = value * 0.65 + "px";
  //   pls.style.left = value * -0.5 + "px";
  // });

  return (
    <div>
      <div className="Intropage" >
        <h2 id="text" style={{
           transform:`translateY(${offsetY*0.5}px)`
        }} >Wu - Watcher </h2>
        <a href="#content" id="btn" >
          {" "}
          Explore{" "}
        </a>
        <img src={bg} id="Bg-Image" alt="background" style={{
        
        transform:`translateY(${offsetY*0.5}px)`


        }} />
        <img src={ps} id="Planet-small" alt="background"  style= {{
          top : `${offsetY* 0.70}px`
        }}/>
        


        <img src={pb} id="Plante-big" alt="background" style={{
           left: `${offsetY * -0.15}px`
        }}/>
      </div>
    </div>

  );
  
}



