import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import SelectTitle from "../components/Piece/SelectTitle.js";
import SelectContent from "../components/Piece/SelectContent.js";
import Search from "../components/Piece/Search.js";


import { useParams } from "react-router-dom";

export default function Piece() {
    let params = useParams();
    let piece = params.pieceId;
    return (
        <div className="piece-main">
            <Header />
            <SelectTitle name={ piece }/>
            <Search/>
            <SelectContent/>
            <Footer />
        </div>
    )
}