import React from "react";
import Image from 'react-bootstrap/Image';
import shirtButton from '../../assets/image/tshirts-1613587154.jpeg';
import './styles.css';

function ShirtButton() {
    return(<div>
        <Image className="shirt-button" src={shirtButton} fluid thumbnail />
    </div>)
}

export default ShirtButton;