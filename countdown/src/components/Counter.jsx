import React from "react";

import "./Counter.css";

const Counter = ({label, value}) => {
    return (
        <div className="counter">
            <h3 className="counter-value">{value}</h3>
            <p className="counter-label">{label}</p>
        </div>
    )
}

export default Counter