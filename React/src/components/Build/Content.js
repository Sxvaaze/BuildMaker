import '../../css/Build/build.css';
import corr from '../Utils/corr.js';

import { Link } from "react-router-dom";

// Select Component
function Component(props) {
    var url = `../select/${props.name}`;
    return (
        <div className="build-component">
            <div className="txt">
                {/* <button className="add-btn"><Link to={url}> + Choose {props.hasArticle ? (isvowel(props.name) ? 'an' : 'a') : ''} {props.name} </Link></button> */}
                <button className="remove add"><Link to={url}>Add Item</Link></button>
            </div>
        </div>
    )
}

// Functionality of the "Remove Item" button
function remove(obj) {
    window.location.reload();
    localStorage.removeItem(obj);
}

// Already Selected Piece Component 
function BuildObj(props) {
    const data = JSON.parse(props.obj);
    return (
        <div className="build-selected"> 
            <div className="selected-image">
                <img src={ data.product_image } alt= { data.product_name } height="44.14px" width="48px"></img>
            </div>
            <span className="selected-name">Name: { data.product_name }</span>
            <span>Price: { data.product_price }€</span>
            <span>Rating score: { data.rating_score } / 5.0 </span>
            <span>Ratings: { data.ratings } </span>
            <span>Store count: { data.store_count } </span>
            <button className="remove" onClick={() => remove(props.comp)}>Remove Item</button>
        </div>
    )
}

// Content Component
function Content() {
    
    // Construct Cookie List.
    let cookies = {};
    let d = Object.keys(corr);
    for (let i = 0; i < d.length; i++) {
        if (localStorage.getItem(d[i]) != null) {
            cookies[d[i]] = localStorage.getItem(d[i]);
        }
    }

    const cookie_keys = Object.keys(cookies);

    let eles = [];
    let c = 0;
    for (let i = 0; i < d.length; i++) {
        if (cookie_keys.includes(d[i])) {
            eles.push(
                <>       
                    <h1>{Object.keys(corr)[i]}</h1>     
                    <BuildObj comp={cookie_keys[c++]} obj={localStorage.getItem(d[i])}/>
                </>
            )
        } else {
            eles.push(
                <>
                    <h1>{Object.keys(corr)[i]}</h1>
                    <Component part={d[i].toUpperCase()} hasArticle={true} name={d[i]} />
                </>
            )
        }
    }

    return (
        <>
            <div className="build-content">
                <div className="build-selector">
                    {eles}
                </div>
            </div>
            
            <div className="build-submit">     
                <Link to="/final"><button className="build-submit-btn">Submit Build</button></Link>
            </div>
        </>

    )
}

export default Content;