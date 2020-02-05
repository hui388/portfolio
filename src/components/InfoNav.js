import React from 'react';
import '../styles.css';


const InfoNav = ({selectedTab, setSelectedTab}) => {
    return (
        <div id="info-nav">
            <button style={{fontWeight: (selectedTab === 'About') ? "bolder" : "normal" }} onClick={(e) => {setSelectedTab('About')}} id="about" className="nav-text" href="#">About </button> |
            <button style={{fontWeight: (selectedTab === 'Portfolio') ? "bolder" : "normal" }} onClick={(e) => {setSelectedTab('Portfolio')}} id="examples" className="nav-text" href="#"> Portfolio</button> |
            <button style={{fontWeight: (selectedTab === 'Demos') ? "bolder" : "normal" }} onClick={(e) => {setSelectedTab('Demos')}} id="demos" className="nav-text" href="#"> Demos</button>
        </div>
    )
};

export default InfoNav;
