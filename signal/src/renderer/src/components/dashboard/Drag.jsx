import React, { useRef, useEffect, useState } from 'react';

export default function Drag() {
   const boxRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const box = boxRef.current;
    let isDragging = false;

    // Salva posição inicial ao montar
    const rect = box.getBoundingClientRect();
    setInitialPos({ x: rect.left, y: rect.top });

    const onMouseDown = (e) => {
      isDragging = true;
      setOffset({
        x: e.clientX - box.offsetLeft,
        y: e.clientY - box.offsetTop
      });
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      box.style.left = `${e.clientX - offset.x}px`;
      box.style.top = `${e.clientY - offset.y}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      // Restaura a posição original
      box.style.left = `${initialPos.x}px`;
      box.style.top = `${initialPos.y}px`;
    };

    box.addEventListener('mousedown', onMouseDown);

    return () => {
      box.removeEventListener('mousedown', onMouseDown);
    };
  }, [offset, initialPos]);

  return (
    <div ref={boxRef} className="draggable-box">
      Eu posso ser arrastado!
    </div>
  );
}