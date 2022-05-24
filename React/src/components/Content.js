import React from 'react';
import { Link } from "react-router-dom";

import '../css/content.css';

import build1 from '../examples/build1.svg';
import build2 from '../examples/proto1.png';

class BuildComponent extends React.Component {state = { src:'none', alt:'none'} 
    render() {
        const split = this.props.alt.split(".");
        const split_slashes = split[split.length - 3].split("/");
        const altname = split_slashes[split_slashes.length - 1];
        return (
            <div className="build-component">
                <img src={ this.props.src } alt={ altname }></img>
            </div>
        )
    }
}

function Content() {
    return (
        <>
            <div className="container">
                <h1 className="container-title">PC Build Maker - A Modern Tool To Create And Share Builds Based On Greek Portal Items</h1>
                <h1 className="example-text">Create your own build with prices and products from famous greek portals (such as skroutz.gr) <br></br>And share them with others via a url hosted on our service!</h1>
                <div className="example-builds">
                    <BuildComponent src={build1} alt={build1}/>
                    <BuildComponent src={build2} alt={build2}/>
                    <BuildComponent src={build1} alt={build1}/>
                </div>
            </div>
            

            <div className="container-build">
                <button className="build-btn"><Link className="alink" to="/build">Try the Build App!</Link></button>
            </div> 
        </>
    )
}

export default Content;