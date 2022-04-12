import React from "react";
import DrumMachine from "./components/DrumMachine";
import "./styles.css";
import { AudioProvider } from "./components/AudioPlayer";


export default function App() {
  return (
    <div className="App">
      <AudioProvider>
        <DrumMachine />
      </AudioProvider>
    </div>
  );
}
