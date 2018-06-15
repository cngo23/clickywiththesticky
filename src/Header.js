import React from "react";
import logo from "./images/super-nintendo-logo.png";

const Header = (props) => {
    return (
        <header className = "header">
        <div className = "row">
            <div className = "col-md-4">
            <img src={logo} className = "logo" alt = "logo"/>
            </div>
            <div className = "col-md-4">
            <h1 className = "title"> Clicky with the Sticky </h1>
            <p className = "intro"> 
                Click on an image to start and earn a point. <br />
                Be careful, don't get trigger happy. </p>
            </div>
            <div className = "col-md-4">
            <p className = "score"> Score: {props.score}</p>
            <p className = "highScore"> High Score: {props.highScore}</p>
            </div>
            
        </div>
        </header>
    );
  };


export default Header;