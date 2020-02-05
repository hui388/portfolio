import React from 'react';
import '../styles.css';
import DemoNav from './DemoNav'

const Demos = ({selectedVideo, setSelectedVideo}) => {
    return (
        <div className="demos">
            <DemoNav selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
            <video src={require(`../demos/${selectedVideo}`)} controls autoPlay>
            </video>
        </div>
    )
};

export default Demos;
