import React from 'react';
import './nav.scss';

function Nav(props) {
    return (
        <nav className = "navbar">
        <h1>Bar of Navigation</h1>
        <h2>{`${props.scoreText} ${props.scoreValue}`}</h2>
        <h2>{`${props.highScoreText} ${props.highScoreValue}`}</h2>
        </nav>
    )
}

export default Nav;