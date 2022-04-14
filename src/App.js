import React from "react";
import DrumMachine from "./components/DrumMachine";
import "./styles.css";
import { AudioProvider } from "./components/AudioPlayer";
import styled from 'styled-components';



const Styles = styled.div`


`;

export default function App() {
  return (
    <Styles>
    <div className="App">
      <AudioProvider>
        <DrumMachine />
      </AudioProvider>
    </div>
    </Styles>
    
  );
}
