import React from 'react';
import image from './images/Choc.png';

const PinterestImage = () => {
    return (
        <div className="pinterest-container">
            <img className="Red" src={image} alt="Cake" style={{ width: '35%', height: '100%', objectFit: 'cover' }} />
        </div>
    );
}

export default PinterestImage;
