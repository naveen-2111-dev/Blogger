import React from "react";

const Time = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const Time = hours + ":" + minutes + ":" + seconds;

    return (
        <div className="">
            <p>{ Time }</p>
        </div>
    );
};

export default Time;
