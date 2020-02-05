import React from 'react';
import '../styles.css';

const DemoNav = ({selectedVideo, setSelectedVideo}) => {
    return (
        <div id="demo-nav">
            <button style={{fontWeight: (selectedVideo === 'Pokemon.mov') ? "bolder" : "normal" }} onClick={() => {setSelectedVideo('Pokemon.mov')}} id="Pokemon" className="demo-text" href="#">Pokémon Generator </button> |
            <button style={{fontWeight: (selectedVideo === 'KpopDemo.mov') ? "bolder" : "normal" }} onClick={() => {setSelectedVideo('KpopDemo.mov')}} id="Kpop" className="demo-text" href="#"> Kpopify </button> |
            <button style={{fontWeight: (selectedVideo === 'TravelGalleryDemo.mov') ? "bolder" : "normal" }} onClick={() => {setSelectedVideo('TravelGalleryDemo.mov')}} id="Travel" className="demo-text" href="#"> Travel Gallery </button>
        </div>
    )
};

export default DemoNav;
