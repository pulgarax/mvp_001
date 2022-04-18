// import { useFrame } from "@react-three/fiber";
// import { useState, useRef } from "react";

// const Box = () => {
//   // For Hover
//   const [hovered, setHover] = useState(false);
//   // For Animation
//   const box = useRef();
//   useFrame(() => {
//     box.current.rotation.x += 0.02;
//     box.current.rotation.y -= 0.02;
//   });

//   return (
//     <>
//       <mesh
//         ref={box}
//         castShadow
//         receiveShadow
//         onPointerOver={() => {
//           setHover(!hovered);
//         }}
//         onPointerOut={() => {
//           setHover(!hovered);
//         }}
//       >
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial
//           color={hovered ? "pink" : "white"}
//           metalness=".8"
//           roughness="0"
//         />
//       </mesh>
//       );
//     </>
//   );
// };

// export default Box;
