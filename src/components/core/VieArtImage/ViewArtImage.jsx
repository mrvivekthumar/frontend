import React from 'react';

const ViewArtImage = ({ imageUrl, altText }) => {
    return (
        <div>
            <img src={imageUrl} alt={altText} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};

export default ViewArtImage;