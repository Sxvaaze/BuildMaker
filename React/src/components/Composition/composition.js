import React from 'react';

import '../../css/Composition/content.css';

import GPUIcon from './Icons/gpu.png';
import CPUIcon from './Icons/cpu.png';
import RAMIcon from './Icons/ram.png';
import HDDIcon from './Icons/hdd.png';
import SSDIcon from './Icons/ssd.png';
import MotherboardIcon from './Icons/motherboard.png';
import PSUIcon from './Icons/psu.png';
import MonitorIcon from './Icons/monitor.png';
import MouseIcon from './Icons/mouse.png';
import CoolingIcon from './Icons/cooling.png';
import OSIcon from './Icons/operating_system.png';
import CaseIcon from './Icons/case.png';

function CompIcon(props) {
    return (
        <img className="comp-icon" src={props.img} alt="comp_icon" height="60px" width="240px"></img>
    )
}

function Composition() {
    const [buildData, setBuildData] = React.useState(0);

    React.useEffect(function() {
        const pathname = window.location.pathname;
        const arr = pathname.split("/");
        const uuid = arr[arr.length - 1];
        const cont = uuid.length === 28;
        let mounted = true;
        if (mounted && cont) {
            const url = `http://localhost:3001/composition/${uuid}`;
            fetch(url).then(res => res.json())
            .then(data => {
                setBuildData(data);
            })
        }
        return () => mounted = false;
    }, []);

    let ret = [];
    let ret_t = [];

    const c = {
        'CASE': CaseIcon,
        'RAM': RAMIcon,
        'CPU': CPUIcon,
        'GPU': GPUIcon,
        'PERIPHERALS': MouseIcon,
        'MONITOR': MonitorIcon,
        'OS': OSIcon,
        'PSU': PSUIcon,
        'HDD': HDDIcon,
        'SSD': SSDIcon,
        'MOBO': MotherboardIcon,
        'COOLING': CoolingIcon,
    }
    for (let i = 0; i < buildData.length; i++) {
        console.log(buildData[i]);
        ret_t.push(
            <div className="components">
            <CompIcon img={ c[buildData[i].Component] }/><br></br>
            <span> Name: { buildData[i].product_name } </span><br></br>
            <span> Price: { buildData[i].product_price } </span><br></br>
            <span> Rating Score: { buildData[i].product_rating_score } </span><br></br>
            <span> Ratings: { buildData[i].product_ratings } </span><br></br>
            <span> Stores: { buildData[i].product_store_count } </span><br></br>
            <span> From: Skroutz.gr </span><br></br>
        </div>
        )
        if (i % 2 === 1) {
            ret.push(
                <div className="components-container">
                    { ret_t }
                    <hr></hr>
                </div>
            )
            ret_t = [];
        }
    }
    if (ret_t.length > 0) {
        ret.push(
            <div className="components-container">
                { ret_t }
                <hr></hr>
            </div>
        )
    }

    return (
        <div className="content">
            { ret }
        </div>
    )
}

export default Composition;