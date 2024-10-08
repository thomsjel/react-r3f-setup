import "./App.css";
import { FiberContainer } from "./components/r3f/FiberContainer";
import UserInterface from "./components/UserInterface";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

function App() {
  return (
    <div className="App">
      <FiberContainer />
      <UserInterface />
    </div>
  );
}

export default App;
