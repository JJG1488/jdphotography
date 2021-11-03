import React from "react";
import Image from 'react-bootstrap/Image';
import hatButton from '../../assets/image/A5-clean-hat-social-1200X630.jpeg';
import './styles.css';

function HatButton() {
    return(<Image className="hat-button" src={hatButton} fluid thumbnail />)
}

export default HatButton;