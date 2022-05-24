import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import './index.css';
import './css/scrollbar.css';

import Build from "./Pages/build.js";
import Piece from "./Pages/piece.js";
import Final from "./Pages/final.js";
import NotFound from "./Pages/notfound.js";
import Composition from "./Pages/composition.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="build" element={<Build/>} />
            <Route path="select/:pieceId" element={<Piece/>} />
            <Route path="final" element={<Final/>} />
            <Route path="composition/:uuid" element={<Composition/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
);
