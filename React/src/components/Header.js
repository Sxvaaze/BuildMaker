import '../css/header.css';

import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
    return (
        <Link to = {{ pathname: props.url }} target="_blank"><li className="navbar-component"> { props.content } </li></Link>
    )
}

export default function Header() {
    return (
        <div className="header">
            <div className="per">
                <Link to="/"><span className="header-text">PcBuildMaker.gr</span></Link>
            </div>
            <div className="navbar">
                <div className="links">
                    <ul className="links">
                        <NavbarComponent content="Build" url="/build" />
                        <NavbarComponent content="About" url="/about" />
                        <NavbarComponent content="Github" url="/github" />
                    </ul>
                </div>
            </div>
        </div>
    )
}
