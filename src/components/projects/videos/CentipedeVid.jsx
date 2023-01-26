import React from "react";

import CentipedeVideo from '../../../assets/videos/CentipedeDemo.webm';

import './Video.css';

export default function CentipedeVid() {
    return (
        <video className='video' controls width="80%">
            <source src={CentipedeVideo} type="video/webm" />
            Sorry, your browser doesn't support videos.
        </video>
    )
}