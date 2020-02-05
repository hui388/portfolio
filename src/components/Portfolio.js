import React from 'react';
import '../styles.css';

const Portfolio = () => {
    return (

        <div id="works-text">
            <div>
            <a href="https://hui388.github.io/react-pokemon/" target="_blank" rel="noopener noreferrer">Pokémon Team Generator</a>
            <li>Generate a team of 6 Pokémon based on any type.</li>
            <li>Made with React and Flexbox. Utilizes PokéApi. </li>
        </div>
            <br />
            <div>
            <a href="http://marumary.com/travel-blog/" target="_blank" rel="noopener noreferrer">Travel Gallery</a>
            <li>A collection of picture highlights from my travels.</li>
            <li>Made with Javascript.</li>
        </div>
            <br />
            <div>
            <a href="http://kpopify.marumary.com/" target="_blank" rel="noopener noreferrer">K-popify</a>
            <li>Make a playlist with K-pop tracks from any song!</li>
            <li>Made with Node.js while listening to BTS. Utilizes Spotify API. </li>
        </div>
        </div>

    )
};

export default Portfolio;
