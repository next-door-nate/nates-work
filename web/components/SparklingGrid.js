// canvas.width = document.querySelector(".BannerHome_banner__xaXBX").offsetWidth;
// canvas.height = document.querySelector(".BannerHome_banner__xaXBX").offsetHeight;
import React, { useRef, useEffect } from "react";

const SparklingGrid = ({ gridSpacing = 50, maxIntensity = 100, flickerSpeed = 0.5 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = document.querySelector(".BannerHome_banner__xaXBX").offsetWidth;
    canvas.height = document.querySelector(".BannerHome_banner__xaXBX").offsetHeight;
    const ctx = canvas.getContext("2d");

    let pixels = [];
    const createPixel = (x, y) => ({
      x,
      y,
      brightness: Math.random() * maxIntensity,
      color: `rgba(255, 255, 255, 1)`,
    });

    const createPixels = () => {
      pixels = [];
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          pixels.push(createPixel(x, y));
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = document.querySelector(".BannerHome_banner__xaXBX").offsetWidth;
      canvas.height = document.querySelector(".BannerHome_banner__xaXBX").offsetHeight;
      createPixels();
    };
    window.addEventListener("resize", resizeCanvas);

    const updatePixels = () => {
      pixels.forEach((pixel) => {
        const change = (Math.random() - 0.5) * flickerSpeed;
        pixel.brightness = Math.max(0, Math.min(pixel.brightness + change, maxIntensity));
        pixel.color = `rgba(255, 255, 255, ${pixel.brightness / maxIntensity})`;
      });
    };

    const drawPixels = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pixels.forEach((pixel) => {
        ctx.fillStyle = pixel.color;
        ctx.fillRect(pixel.x - 1, pixel.y - 1, 3, 3);
      });
    };

    const animate = () => {
      updatePixels();
      drawPixels();
      requestAnimationFrame(animate);
    };

    createPixels();
    resizeCanvas();
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [gridSpacing, maxIntensity, flickerSpeed]);

  return <canvas ref={canvasRef} />;
};

export default SparklingGrid;
