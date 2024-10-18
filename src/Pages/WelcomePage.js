import React, { useRef, useEffect } from 'react';
import '../Styles/welcome.css'; 

const WelcomePage = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    
    const unmuteVideo = () => {
      if (iframe) {
        new window.YT.Player(iframe, {
          events: {
            onReady: (event) => {
              event.target.unMute(); 
            },
          },
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = unmuteVideo;

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <div className="welcome-container">
      <iframe
        ref={iframeRef}
        className="video-frame"
        src="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&enablejsapi=1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
        allowFullScreen
        title="Welcome Video" 
      ></iframe>
    </div>
  );
};

export default WelcomePage;
