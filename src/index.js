import ReactDOM from 'react-dom';
import React from 'react';
import "babel-polyfill";

import StickyHeader from './components/StickyHeader.jsx';

ReactDOM.render(
    <div>
        <StickyHeader className="sticky-one">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </StickyHeader>
    </div>,
    document.getElementById('sticky')
);