import React, { useState } from 'react';
import './components.css';
import Journal from "./journal";

function PageView() {
    const pages = [
        "Page 1",
        "Page 2",
        "Page 3",
        "Page 4"
    ];

    const backgroundImg = '../assets/images/journal-bg.png'

    return (
        <div className="PageView">
            <Journal pages={pages} backgroundImage={backgroundImg}/>
        </div>
    );
}

export default PageView;
