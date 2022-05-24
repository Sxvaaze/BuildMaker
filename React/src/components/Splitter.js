import '../css/splitter.css';

function Splitter(props) {
    if (props.loc === "footer") {
        return (
            <div className="splitter splitter-footer">
                <svg id="visual" viewBox="0 0 1920 405" width="1920" height="405" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <rect x="0" y="0" width="1920" height="405" fill="#f5f0f0">
                    </rect>
                    <path d="M0 264L45.7 277.5C91.3 291 182.7 318 274.2 320.5C365.7 323 457.3 301 548.8 294.3C640.3 287.7 731.7 296.3 823 291.8C914.3 287.3 1005.7 269.7 1097 275.5C1188.3 281.3 1279.7 310.7 1371.2 317.7C1462.7 324.7 1554.3 309.3 1645.8 310.5C1737.3 311.7 1828.7 329.3 1874.3 338.2L1920 347L1920 406L1874.3 406C1828.7 406 1737.3 406 1645.8 406C1554.3 406 1462.7 406 1371.2 406C1279.7 406 1188.3 406 1097 406C1005.7 406 914.3 406 823 406C731.7 406 640.3 406 548.8 406C457.3 406 365.7 406 274.2 406C182.7 406 91.3 406 45.7 406L0 406Z" fill="#0e1111" strokeLinecap="round" strokeLinejoin="miter">
                    </path>
                </svg>
            </div>
        )
    }
    else if (props.loc === "header") {
        return (
            <div className="splitter splitter-header">
                <svg id="visual" viewBox="0 0 1920 240" width="1920" height="240" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <rect x="0" y="0" width="1920" height="240" fill="#f5f0f0"></rect>
                    <path d="M0 126L35.5 122C71 118 142 110 213.2 95.3C284.3 80.7 355.7 59.3 426.8 64.2C498 69 569 100 640 108.2C711 116.3 782 101.7 853.2 106.3C924.3 111 995.7 135 1066.8 132.7C1138 130.3 1209 101.7 1280 89.3C1351 77 1422 81 1493.2 85.3C1564.3 89.7 1635.7 94.3 1706.8 103.7C1778 113 1849 127 1884.5 134L1920 141L1920 0L1884.5 0C1849 0 1778 0 1706.8 0C1635.7 0 1564.3 0 1493.2 0C1422 0 1351 0 1280 0C1209 0 1138 0 1066.8 0C995.7 0 924.3 0 853.2 0C782 0 711 0 640 0C569 0 498 0 426.8 0C355.7 0 284.3 0 213.2 0C142 0 71 0 35.5 0L0 0Z" fill="#0e1111" strokeLinecap="round" strokeLinejoin="miter"></path>
                </svg>
            </div>
        )
    }
}

export default Splitter;