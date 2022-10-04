import React from 'react';

const VideoPlayer = ({video}) => {
    const{link}=video
    return (
        <iframe
            width="100%"
            class="aspect-video"
            src={link}
            title="Some video title"
            frameBorder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
        ></iframe>
    );
};

export default VideoPlayer;