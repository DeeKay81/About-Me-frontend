import React from "react";

import TicTacToeVideo from '../../../assets/videos/TicTacToeDemo.webm';

import './Video.css';

export default function TicTacToeVid() {
    return (
        <video className='video' controls width="80%">
            <source src={TicTacToeVideo} type="video/webm" />
            Sorry, your browser doesn't support videos.
        </video>
    )
}