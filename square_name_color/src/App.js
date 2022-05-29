import { useState } from "react";
import AddColorBar from "./AddColorBar";
import ColorBox from "./ColorBox";

function App() {

  const [color, setColor] = useState('')

  return (
    <div className="app">
      <ColorBox
        color={color}
        setColor={setColor}
      />
      <AddColorBar
        setColor={setColor}
      />
    </div>
  );
}

export default App;
