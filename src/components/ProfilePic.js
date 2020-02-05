import React from 'react';
import '../styles.css';

const ProfilePic = () => {
    return (
        <img alt="pictue of mary" className="mary" src={require(`../me.png`)} />
    )
};

export default ProfilePic;
