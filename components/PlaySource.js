import React from 'react';
import VideoPlayer from './VideoPlayer';

const PlaySource = () => {
  const videoUrl = 'https://res.cloudinary.com/di1v23yy0/video/upload/v1683037420/astro_luppw7.mov';
  const paragraph = 'AHORA PUEDES ELEGIR LA VELLOCIDAD DE TUS VIDEOS EN TIEMPO REAL.';

  return (
    <div className='font-loco'>
      <VideoPlayer videoUrl={videoUrl} paragraph={paragraph} className='font-loco' />
    </div>
  );
};

export default PlaySource;