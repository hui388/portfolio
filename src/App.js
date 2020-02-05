import React, {useState} from 'react';
// import './App.css';
import ProfilePic from './components/ProfilePic'
import HoldContainer from './components/HoldContainer'

function App() {

    const [selectedTab, setSelectedTab] = useState('About')
    const [selectedVideo, setSelectedVideo] = useState('Pokemon.mov')

    return (
        <div className="App">
            <header className="App-header">
                <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css?family=Cabin&display=swap" rel="stylesheet" />
            </header>

            <div className="container">
                <ProfilePic />
                <HoldContainer setSelectedTab={setSelectedTab} selectedTab={selectedTab} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
            </div>

        </div>
    );
}

export default App;
