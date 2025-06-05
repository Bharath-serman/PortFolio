
import React, { useEffect, useRef } from 'react';

const ThreeDBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const setCanvasDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    const particlesArray: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      brightness: number;
      color: string;

      constructor() {
        this.x = Math.random() * width - width / 2;
        this.y = Math.random() * height - height / 2;
        this.z = Math.random() * 2000;
        this.size = 4;
        this.speed = Math.random() * 0.5 + 0.2;
        this.brightness = Math.random() * 50 + 50;
        this.color = `hsl(${220 + Math.random() * 60}, ${this.brightness}%, ${this.brightness}%)`;
      }

      update() {
        this.z -= this.speed;

        if (this.z <= 1) {
          this.z = 2000;
          this.x = Math.random() * width - width / 2;
          this.y = Math.random() * height - height / 2;
        }
      }

      draw() {
        if (!ctx) return;

        const scale = 2000 / this.z;
        const x = this.x * scale + width / 2;
        const y = this.y * scale + height / 2;
        const r = this.size * scale;

        if (x < 0 || x > width || y < 0 || y > height) return;
        const opacity = Math.min(1, (2000 - this.z) / 2000);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla');
        ctx.fill();
        for (let i = 0; i < particlesArray.length; i++) {
          const dx = x - (particlesArray[i].x * (2000 / particlesArray[i].z) + width / 2);
          const dy = y - (particlesArray[i].y * (2000 / particlesArray[i].z) + height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = this.color.replace(')', `, ${opacity * 0.2})`).replace('hsl', 'hsla');
            ctx.lineWidth = r * 0.2;
            ctx.moveTo(x, y);
            ctx.lineTo(
              particlesArray[i].x * (2000 / particlesArray[i].z) + width / 2,
              particlesArray[i].y * (2000 / particlesArray[i].z) + height / 2
            );
            ctx.stroke();
          }
        }
      }
    }
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeDBackground;
