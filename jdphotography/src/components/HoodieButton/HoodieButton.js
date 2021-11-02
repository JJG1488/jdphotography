import React from "react";
import './styles.css';
import Image from 'react-bootstrap/Image'
import hoodieImage from '../../assets/image/photo-1579572331145-5e53b299c64e.jpeg'

function HoodieButton() {
    return(<div>
        <Image className="hoodie-button" src={hoodieImage} fluid thumbnail />
    </div>)
}

export default HoodieButton;