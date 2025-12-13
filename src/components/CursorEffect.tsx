
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', () => setHidden(true));
    document.addEventListener('mouseenter', () => setHidden(false));

    const linkElements = document.querySelectorAll('a, button');
    linkElements.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mouseenter', () => setHidden(false));

      linkElements.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorClasses = `fixed pointer-events-none z-50 transition-transform duration-150 
    ${hidden ? 'opacity-0' : 'opacity-100'} 
    ${clicked ? 'scale-90' : ''} 
    ${linkHovered ? 'scale-150' : ''}`;

  const ringStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
  };

  const dotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
  };

  return (
    <>
      <div
        className={`${cursorClasses} w-6 h-6 bg-transparent border-2 border-orange-500 rounded-full -ml-3 -mt-3`}
        style={ringStyle}
      />
      <div
        className={`${cursorClasses} w-1 h-1 bg-orange-500 rounded-full -ml-0.5 -mt-0.5`}
        style={dotStyle}
      />
    </>
  );
};

export default CursorEffect;
