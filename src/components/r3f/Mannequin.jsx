import * as THREE from "three";
import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import useCharacterAnimations from "../../hooks/useCharacterAnimations";

const Mannequin = (props) => {
  const group = React.useRef();
  const { scene, animations } = useGLTF("./models/Mannequin.gltf");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const material = materials.Ch36_Body;
  material.roughness = 0;
  material.metalness = 1;
  material.color = new THREE.Color(1, 1, 1);
  material.map = null;
  console.log("MATERIALS: ", materials.Ch36_Body.roughness);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig1Hips} />
          <skinnedMesh
            name="Ch36"
            geometry={nodes.Ch36.geometry}
            material={materials.Ch36_Body}
            skeleton={nodes.Ch36.skeleton}
            castShadow
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./models/Mannequin.gltf");

export default Mannequin;
