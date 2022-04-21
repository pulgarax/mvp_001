
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei/'
import { useFrame } from "@react-three/fiber";
import { current } from 'immer';


function Model({pitchValue, filterFrequency}) {
  const group = useRef()
  useFrame(() => {
    // group.current.rotation.x += (pitchValue /230);
    // group.current.rotation.z += (filterFrequency/290000)
    
    group.current.rotation.x += Math.random() * 0.003; 
    group.current.rotation.y += Math.random() * 0.0033;
    group.current.rotation.z += Math.random() * 0.0039;

  });
  const { nodes, materials } = useGLTF('/Model1_Comp.glb')
  return (
    <group dispose={null}>
      <mesh ref={group} geometry={nodes.Form01.geometry} material={materials['Default OBJ']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}



  export default Model





