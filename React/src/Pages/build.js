import Header from "../components/Header.js";
import Splitter from "../components/Splitter.js";
import Footer from "../components/Footer.js";
import Content from "../components/Build/Content.js";

export default function About() {
    return (
        <div className="build-main">
            <Header />
            <Splitter loc="header"/>
            <Content />
            <Splitter loc="footer"/>
            <Footer />
        </div>
    )
}