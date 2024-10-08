import useCharacterAnimations from "../hooks/useCharacterAnimations";

const UserInterface = () => {
  const { animations, setAnimationIndex } = useCharacterAnimations();

  return (
    <div className="ui">
      {animations.map((animation, index) => (
        <button key={index} onClick={() => setAnimationIndex(index)}>
          {animation}
        </button>
      ))}
    </div>
  );
};

export default UserInterface;
