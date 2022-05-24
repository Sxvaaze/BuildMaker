import '../css/NotFound/notfound.css'

import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="build-main">
            <center className="center">
                <h1 className="error-txt">404 - Page Not Found<br></br>Seems like you've been lost...</h1>
                <Link to="/"><button className="error-btn">Go Back</button></Link>
            </center>
        </div>
    )
}