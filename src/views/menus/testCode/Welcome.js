import React from "react";

const Welcome = (props) => {
    return (
        <div>
            <h1>Hello,{props.name} ,her age is {props.age}</h1>
        </div>
    )
}

export default Welcome;