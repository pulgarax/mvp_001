import { OrbitControls } from "@react-three/drei";

import CrazyComponent from "./CrazyComponent";
import Model from "./LocoComponent";



const Scene = ({pitchValue, filterFrequency}) => {

  return (
    <group>
        
      <ambientLight intensity={0.01} />
      <spotLight castShadow intensity={1} position={[0, 3, 3]} />
        <OrbitControls />
      <Model pitchValue={pitchValue} filterFrequency={filterFrequency} />
        <CrazyComponent pitchValue={pitchValue} filterFrequency={filterFrequency} />
      
    </group>
  );
};  

export default Scene;
