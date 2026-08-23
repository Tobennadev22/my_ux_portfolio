import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setVisible(true);
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

  if (!visible) return null;

  return (
    <Box
      position="fixed"
      left={`${position.x}px`}
      top={`${position.y}px`}
      w="36px"
      h="36px"
      border="1.5px solid"
      borderColor="accent.400"
      borderRadius="full"
      pointerEvents="none"
      transform="translate(-50%, -50%)"
      zIndex="9999"
      opacity={0.6}
      display={{ base: "none", md: "block" }}
    />
  );
}

export default CursorEffect;
