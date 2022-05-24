import corr from '../Utils/corr.js';
import genUUID from '../Utils/genuuid.js';

import Axios from 'axios';

import React from 'react';
import { Link } from "react-router-dom";

// Final Component 
function Final() {
    let cookies = {};
    let d = Object.keys(corr);
    for (let i = 0; i < d.length; i++) {
        if (localStorage.getItem(d[i]) != null) {
            cookies[d[i]] = localStorage.getItem(d[i]);
        }
    }

    const cookie_keys = Object.keys(cookies);
    let ret = [];
    let btn = [];
    let data = {};
    
    const uuid = genUUID();

    /* 
    
        Make this async, ASAP. (isn't even functionable atm)
    
    */

    const post = async () => {
        let datakeys = Object.keys(data);
        // Axios.post('http://localhost:3001/finalbuild', {
        //     url: uuid,
        // }).then(
        //     (response) => {
        //         console.log(response);
        //     }
        // )

        for (let i = 0; i < datakeys.length; i++) {
            console.log(data[i].component);
            await Axios.post('http://localhost:3001/final', {
                build_url: uuid,
                component: data[i].component,
                product_image: data[i].product_image,
                product_name: data[i].product_name,
                product_price: data[i].product_price,
                product_rating_score: data[i].rating_score,
                product_ratings: data[i].ratings,
                product_store_count: data[i].store_count,
            }).then(
                (response) => {
                    console.log(response);
                }
            )
        }

        // Remove all cached options
        const corr_keys = Object.keys(corr);
        for (let i = 0; i < corr_keys.length; i++) {
            localStorage.removeItem(corr_keys[i]);
        }
    }

    // Display all selected items.
    for (let i = 0; i < cookie_keys.length; i++) {
        let x = JSON.parse(cookies[cookie_keys[i]])
        data[i] = x;
        data[i].component = cookie_keys[i].toUpperCase();
        ret.push(
            <div className="final-component">
                <h1> {cookie_keys[i].toUpperCase()} </h1> 
                <img className="final_image" src={ x.product_image} alt={ x.product_name } height="48px" width="44px"></img><br></br>
                <h1> Product Name </h1>
                <span className="final_pname final-txt"> { x.product_name } </span> <br></br>
                <h1> Product Price </h1>
                <span className="final_price final-txt"> Χαμηλότερη τιμή στο skroutz.gr: { x.product_price }€</span> <br></br>
                <h1> Product Rating Score </h1>
                <span className="final_rating_score final-txt"> { x.rating_score } / 5.0 αστέρια στο skroutz.gr</span> <br></br>
                <h1> Product Ratings </h1> 
                <span className="final_ratings final-txt"> { x.ratings } συνολικές κριτικές στο skroutz.gr</span>
                <h1> Stores </h1> 
                <span className="final_ratings final-txt"> Διαθέσιμο σε { x.store_count } μαγαζιά στο skroutz.gr</span>
                <hr></hr>
            </div>
        )
    }

    // Checks if there's selected items, and displays the submit btn if the condition is met
    if (cookie_keys.length > 0) {
        const url = '/composition/' + uuid;
        btn.push(
            <div className="submit-ctn">
                <button onClick={ post } className="submit"><Link to={ url }>Create Build</Link></button>
            </div>
        )
    } else {
        btn.push(
            <div className="no-items-ctn"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <h1 style={{
                    top: '50%',
                    bottom: '50%',
                    fontSize: '3.5rem',
                    textAlign: 'center',
                    fontWeight: '700'
                }}>Please select items to add to the build.</h1>
                <button style={{
                    marginTop: '4%',
                    color: 'white',
                    backgroundColor: '#f76820',
                    width: '40vw',
                    height: '8vh',
                    borderRadius: '1%',
                }}> <Link to='/build' style={{
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    color: 'white',
                }}>
                    Go back
                    </Link>
                </button>
            </div>
        )
    }

    return (
        <div className="final-container"> 
            <div className="final-cont">
                { ret }
            </div>
            { btn }
        </div>
    )
}

export default Final;