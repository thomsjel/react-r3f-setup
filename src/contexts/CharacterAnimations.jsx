import { createContext, useState } from "react";

export const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};
