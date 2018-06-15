import React from "react";

const Playarea = (props) => {
    return (
        <div className = "card" onClick={() => props.handleClick(props.id, props.clicked)} >

        <img src = {props.imgUrl} alt = {props.name} className = "cardImg" />
        </div>
    );
}

export default Playarea;