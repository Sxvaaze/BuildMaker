import '../../css/Piece/select.css';

import React, { useState } from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="search-form">
            <form>
                <div className="tb">
                    <div className="td">
                        <input maxLength="128" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} 
                        placeholder="Search for a hardware component..." name="s" type="text" className="search form-control" required autoComplete="off"/>
                    </div>
                </div>
            </form>   
        </div>
    )
}

export default Search;