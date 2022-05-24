import React from "react";
import '../css/footer.css';

// Gets Current Year
function YearComponent() {
    const d = new Date();
    return d.getFullYear();
}

function Creators() {
    return (
        <div className="footer">
            <span className="footer-txt">&copy; <YearComponent /> - Created by </span><span className="creators-txt"> Sxvaaze (github.com/sxvaaze) & Agent (github.com/4uq)</span>
        </div>
    )
}

export default Creators;