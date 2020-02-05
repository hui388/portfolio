import React from 'react';
import '../styles.css';
import About from './About'
import Portfolio from './Portfolio'
import Demos from './Demos'
import InfoNav from './InfoNav'
import Contact from './Contact'



const HoldContainer = ({setSelectedTab, selectedTab, selectedVideo, setSelectedVideo}) => {

    const compMap = {
        'About': About,
        'Portfolio': Portfolio,
        'Demos': Demos
    }

    const CompName = compMap[selectedTab]

    if (selectedTab === 'Demos') {
        var comp = <Demos selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
    } else {
        comp = <CompName />
    }

    return (
        <div className="hold-container">
            <InfoNav selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            {comp}
            <Contact />
        </div>
    )
};

export default HoldContainer;
