import { useContext } from "react";
import { CharacterAnimationsContext } from "../contexts/CharacterAnimations";

const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};

export default useCharacterAnimations;
