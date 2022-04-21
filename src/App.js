import React from "react";
import DrumMachine from "./components/DrumMachine";
import { AudioProvider } from "./components/AudioPlayer";
import Scene from "./components/scene";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";




export default function App() {
  return (
    <>
   
    <AudioProvider>
        <DrumMachine />
      </AudioProvider>
    
    </>
  );
}
