import React, { useState } from 'react';

const VideoPlayer = ({ videoUrl, thumbnailUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const containerStyle = {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '290px',
    backgroundImage: `url('https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    marginTop: '50px'
  };

  const playButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    zIndex: 1,
  };

  const playButtonHoverStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    background: '#96C940',
    width: '50px',
    height: '50px',
    transition: 'all 0.3s ease-in-out',
    opacity: 0,
    borderRadius: '5px', // Imposta il bordo arrotondato
    zIndex: 0,
  };

  const hoverSquareHoverStyle = {
    opacity: 0.7,
  };

  return (
    <div className="video-player" style={containerStyle}>
      {!showVideo && (
        <div className="video-thumbnail" style={{width: '100%', height: 'auto'}} onClick={handleClick}>
          <div className="play-button" style={playButtonStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              onClick={handleClick}
              style={{ cursor: 'pointer', fill: '#FFF' }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="play-button-hover" style={{...playButtonHoverStyle, ...hoverSquareHoverStyle}}></div>
        </div>
      )}
      {showVideo && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
