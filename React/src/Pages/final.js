import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Splitter from '../components/Splitter.js';
import Final from '../components/Final/Final.js';

import '../css/Final/final.css';

function FinalPage() {
    return (  
        <>
            <Header />
            <Splitter loc="header" />
            <Final />
            <Splitter loc="footer" />
            <Footer />
        </>
    )
}

export default FinalPage;