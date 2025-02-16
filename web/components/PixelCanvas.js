import React, { useRef, useEffect } from 'react';

const PixelCanvas = ({
  gridSpacing = 10,
  colors = ['#f8fafc', '#f1f5f9', '#cbd5e1'],
  speed = 35,
  noFocus = false,
  selector = "[data-block='banner_home']",
}) => {
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = document.querySelector(selector);
    if (!canvas || !parent) return;

    parentRef.current = parent;
    const ctx = canvas.getContext('2d');

    let width = parent.offsetWidth;
    let height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const getDistanceToCenter = (x, y) => {
      const dx = x - width / 2;
      const dy = y - height / 2;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const createPixel = (x, y) => ({
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 0,
      maxSize: Math.random() * 3 + 1, // Increased for visibility
      sizeStep: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.05 + speed * 0.001,
      delay: getDistanceToCenter(x, y),
      counter: 0,
      isIdle: false,
      isReverse: false,
      isShimmer: false,
    });

    const createPixels = () => {
      pixelsRef.current = [];
      for (let x = 0; x < width; x += gridSpacing) {
        for (let y = 0; y < height; y += gridSpacing) {
          pixelsRef.current.push(createPixel(x, y));
        }
      }
    };

    const drawPixel = (pixel) => {
      ctx.fillStyle = pixel.color;
      ctx.fillRect(pixel.x - pixel.size / 2, pixel.y - pixel.size / 2, pixel.size, pixel.size);
    };

    const appear = (pixel) => {
      if (pixel.counter <= pixel.delay) {
        pixel.counter += 5;
        return;
      }

      if (pixel.size >= pixel.maxSize) {
        pixel.isShimmer = true;
      }

      if (pixel.isShimmer) {
        shimmer(pixel);
      } else {
        pixel.size += pixel.sizeStep;
      }
      drawPixel(pixel);
    };

    const disappear = (pixel) => {
      pixel.isShimmer = false;
      pixel.counter = 0;

      if (pixel.size <= 0) {
        pixel.isIdle = true;
        return;
      }
      pixel.size -= 0.1;
      drawPixel(pixel);
    };

    const shimmer = (pixel) => {
      if (pixel.size >= pixel.maxSize) {
        pixel.isReverse = true;
      } else if (pixel.size <= 0.5) {
        pixel.isReverse = false;
      }

      pixel.size += pixel.isReverse ? -pixel.speed : pixel.speed;
    };

    const animate = (action) => {
      animationRef.current = requestAnimationFrame(() => animate(action));
      ctx.clearRect(0, 0, width, height);

      pixelsRef.current.forEach((pixel) => {
        action === 'appear' ? appear(pixel) : disappear(pixel);
      });

      if (pixelsRef.current.every((pixel) => pixel.isIdle)) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const resizeCanvas = () => {
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      createPixels();
    };

    createPixels();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseEnter = () => animate('appear');
    const handleMouseLeave = () => animate('disappear');

    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    if (!noFocus) {
      parent.addEventListener('focusin', handleMouseEnter);
      parent.addEventListener('focusout', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      if (!noFocus) {
        parent.removeEventListener('focusin', handleMouseEnter);
        parent.removeEventListener('focusout', handleMouseLeave);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [gridSpacing, colors, speed, noFocus, selector]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default PixelCanvas;
