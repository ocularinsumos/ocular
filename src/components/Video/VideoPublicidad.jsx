import React from 'react';

const VideoPublicidad = () => {


  return (
    <section className="relative w-full h-full mx-auto max-w-5xl overflow-hidden rounded-lg shadow-lg">
      <video className="w-full h-auto" src='https://res.cloudinary.com/dz2c7o9z6/video/upload/v1724619242/Publi_t0owuj.mp4' alt='video publicidad' aria-label='video publicidad de oftalmologia' loop autoPlay muted playsInline />
    </section>
  );
};

export default VideoPublicidad;