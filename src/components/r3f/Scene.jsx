import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Box(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export const Scene = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 5, 5]} />
      <Box position={[0, 0, 0]} />
    </>
  );
};
