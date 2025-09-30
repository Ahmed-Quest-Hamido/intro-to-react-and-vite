import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import photo from "./assets/Photo.jpg";   


function App() {
    return (
      <>
        <div className="Photo"> 
        <img src={photo} alt="Photo of us" />
        </div>
  
        <div className="Header">CIS-4160 Fall 2025 Group "RMAJ"</div>
  
        <div className="Robert">
          <h2>Robert</h2>
          <div className="Info">
            <h4>Major: Computer Information Systems</h4>
            <h4>Minor: N/A</h4>
            <h4>Hobby: Likes to read, listen to music, and tutor.</h4>
            <h4>Life Goal: Retire and live in Mexico</h4>
          </div>
        </div>
  
        <div className="Micheal">
          <h2>Micheal</h2>
          <div className="Info">
            <h4>Major: Computer Information Systems</h4>
            <h4>Minor: Computer Science</h4>
            <h4>Hobby: Likes to go mountain biking</h4>
            <h4>Life Goal: Go to Thailand</h4>
          </div>
        </div>
  
        <div className="Ahmed">
          <h2>Ahmed</h2>
          <div className="Info">
            <h4>Major: Computer Information Systems</h4>
            <h4>Minor: Sociology</h4>
            <h4>Hobby: Enjoys playing video games</h4>
            <h4>Life Goal: Retire at 30</h4>
          </div>
        </div>
  
        <div className="Jacob">
          <h2>Jacob</h2>
          <div className="Info">
            <h4>Major: Computer Information Systems</h4>
            <h4>Minor: Philosophy</h4>
            <h4>Hobby: Combat Sports</h4>
            <h4>Life Goal: Achieve as much fulfillment as possible</h4>
          </div>
        </div>
      </>
    );
  }
  
  export default App;
  