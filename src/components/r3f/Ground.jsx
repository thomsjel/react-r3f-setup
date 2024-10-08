const Ground = () => {
  return (
    <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.3} />
    </mesh>
  );
};

export default Ground;
