import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export function FiberContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 30 }} shadows>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}
