import React from "react";

import MySQLVideo from '../../../assets/videos/MySQLDemo.webm';

import './Video.css';

export default function MySQLVid() {
    return (
        <video className='video' controls width="80%">
            <source src={MySQLVideo} type="video/webm" />
            Sorry, your browser doesn't support videos.
        </video>
    )
}