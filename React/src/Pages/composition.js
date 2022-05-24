import CompositionPage from '../components/Composition/composition.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Splitter from '../components/Splitter.js';

export default function Composition() {
    return (
        <>
            <Header />
            <Splitter loc="header" />
            <CompositionPage />
            <Splitter loc="footer" />
            <Footer />
        </>
    )
}