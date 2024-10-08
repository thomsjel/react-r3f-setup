import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loader">
        {Math.round((progress + Number.EPSILON) * 100) / 100} % loaded
      </div>
    </Html>
  );
};

export default Loader;
