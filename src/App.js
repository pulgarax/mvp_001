import React from "react";
import DrumMachine from "./components/DrumMachine";
import "./styles.css";
import { AudioProvider } from "./components/AudioPlayer";
import styled from 'styled-components';
import Scene from "./components/scene";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


const Styles = styled.div`
`;

export default function App() {
  return (
    <>
    <Styles>
    <AudioProvider>
        <DrumMachine />
      </AudioProvider>
    </Styles>
    </>
  );
}
