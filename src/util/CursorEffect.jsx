import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationFrame;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (mouse.current.x - prev.x) * 0.15,
        y: prev.y + (mouse.current.y - prev.y) * 0.15,
      }));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <Box
      position="fixed"
      left={`${position.x}px`}
      top={`${position.y}px`}
      w="54px"
      h="54px"
      border="2px solid"
      borderColor="gray.300"
      borderRadius="full"
      pointerEvents="none"
      transform="translate(-50%, -50%)"
      zIndex="9999"
      boxShadow="0 0 30px rgba(216, 216, 216, 0.8)"
      backdropFilter="blur(5px)"
    />
  );
}

export default CursorEffect;
