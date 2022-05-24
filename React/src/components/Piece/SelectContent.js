import React from 'react';
import { Link } from 'react-router-dom';
import corr from '../Utils/corr.js';
import getSearchParam from '../Utils/getsearchparam.js';

import '../../css/Piece/select.css';

function Piece() {
    const [apiData, setApiData] = React.useState(0);

    const pathname = window.location.pathname;
    const arr = pathname.split("/");
    const component = arr[arr.length - 1];

    React.useEffect(function() {
        let mounted = true;
        let url;
        let load_ret = getSearchParam('s');
        if (mounted) {
            if (load_ret == null) {
                const pathname = window.location.pathname;
                const arr = pathname.split("/");
                const component = arr[arr.length - 1];
                url = `/api?url=${corr[component]}&category=true`;
            } else {
                url = `/api?s=${load_ret}`;
            }

            fetch(url)
            .then(res => res.json())
            .then(data => {
                setApiData(data);
            })
        }
        return () => mounted = false;
    }, [])

    const add = (addObj) => { localStorage.setItem(component, JSON.stringify(addObj)); }
    const final_data = apiData["Data"];

    if (typeof final_data !== "undefined") {
        let ret = [];
        let len = final_data.length >= 10 ? 10 : final_data.length;
        for (let i = 0; i < len; i++) {
            ret.push(
                <tbody>
                    <tr className="select-component">
                        <td className="component"> {component.toUpperCase()} </td>
                        <td className="image"><img src={final_data[i].product_image} alt="skroutz-lazyload" height="40px" width="36px"/></td>
                        <td className="name"> {final_data[i].product_name} </td>
                        <td className="ratings">{final_data[i].ratings}</td>
                        <td className="rating-score">{final_data[i].rating_score}</td>
                        <td className="stores">{final_data[i].store_count}</td>
                        <td className="where">Skroutz.gr</td>
                        <td className="price">{final_data[i].product_price}€</td>
                        <td className="btn"><Link to="/build"><button className="add-btn" onClick={()=>{add(final_data[i])}}>Add</button></Link></td>
                    </tr>
                </tbody>
            );
        }
        
        return (
            <table className="composition">
                <thead>
                    <tr>
                        <th className="comp-obj">Component</th>
                        <th className="comp-name" colSpan="2">Selection</th>
                        <th className="comp-ratings">Ratings</th>
                        <th className="comp-rating-score">Rating Score</th>
                        <th className="comp-stores">Stores</th>
                        <th className="comp-where">Where</th>
                        <th className="comp-price">Price</th>
                    </tr>
                </thead>
                {ret}
            </table>
        )
        
    }
}

function SelectContent() {
    return (
        <div className="select-content">
            <Piece />
        </div>
    )
}

export default SelectContent;