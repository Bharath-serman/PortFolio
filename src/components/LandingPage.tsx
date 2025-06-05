import React, { useEffect } from 'react';

const LandingPage: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  useEffect(() => {
    const shower = document.querySelector('.comet-shower');
    if (shower) {
      for (let i = 0; i < 35; i++) {
        const comet = document.createElement('div');
        comet.className = 'comet';
        comet.style.top = `${Math.random() * 100}vh`;
        comet.style.left = `${Math.random() * -100}vw`;
        comet.style.animationDelay = `${Math.random() * 3}s`;
        comet.style.animationDuration = `${2 + Math.random() * 2}s`;
        shower.appendChild(comet);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden bg-black">
      <div className="comet-shower absolute top-0 left-0  w-full h-full z-0 pointer-events-none" />
      <h1 className="text-5xl font-bold mb-4 text-shadow">Welcome to My Portfolio</h1>
      <p className="mb-8 text-lg text-shadow">Exploring AR/VR | 3D Modeling | UI/UX</p>
      <button
        onClick={onContinue}
        className="bg-tech-gradient text-white px-6 py-3 rounded-full hover:opacity-80 transition"
      >
        Enter Portfolio
      </button>
      <style>
  {`
    .text-shadow {
      text-shadow: 0 0 15px rgba(0, 183, 255, 0.5), 0 0 30px rgba(14, 183, 250, 0.7);
    }

    .comet-shower {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }

    .comet {
      position: absolute;
      width: 4px;
      height: 200px;
      background: linear-gradient(to bottom, rgba(0, 255, 255, 1), rgba(0, 255, 255, 0));
      box-shadow: 
        0 0 30px rgba(0, 255, 255, 0.9),
        0 0 60px rgba(0, 255, 255, 0.7),
        0 0 100px rgba(0, 255, 255, 0.5);
      border-radius: 50px;
      transform: rotate(135deg);
      animation-name: cometRain;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes cometRain {
      from {
        transform: translate(-50vw, -50vh) rotate(135deg);
        opacity: 1;
      }
      to {
        transform: translate(50vw, 50vh) rotate(135deg);
        opacity: 0;
      }
    }
  `}
</style>

    </div>
  );
};

export default LandingPage;
