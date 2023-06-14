import React from 'react';

const ZoomImage = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`relative w-96 h-96 transition-all ${
          isHovered ? 'scale-150' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/Img/2.png"
          alt="Image"
          className={`w-full h-full object-cover ${
            isHovered ? 'cursor-move' : ''
          }`}
          style={{ transform: isHovered ? 'scale(1.5)' : 'scale(1)' }}
        />
      </div>
    </div>
  );
};

export default ZoomImage;





