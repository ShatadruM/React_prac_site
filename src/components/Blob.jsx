import React, { useState, useEffect } from 'react';

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='h-40 w-40 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-orange-800 rounded-full fixed -z-10 scale-150 scale-y-100 blur-2xl animate-pulse  '
      style={{
        left: position.x - 20, // Offset to center the blob on the cursor
        top: position.y - 20,  // Offset to center the blob on the cursor
      }}
    />
  );
};

export default Blob;
