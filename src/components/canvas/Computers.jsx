import React, { Suspense , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload} from '@react-three/drei';
import CanvasLoader from '../Loader';


// const Computers = ({ isMobile }) => {
//   const computer = useGLTF('./desktop_pc/scene.gltf')
//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={1}/>
//       <spotLight position={[-20, 50 , 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
//       <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0,-3,-2.2] : [0,-3.25, -1.8]} rotation={[-0.01 ,-0.2 ,-0.1]}/>
//     </mesh>
//   )
// }
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const position = isMobile ? [0, -3.3, -2.8] : [0, -3.25, -1.8];
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50 , 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={position} rotation={[-0.01 ,-0.2 ,-0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile , setIsMobile ] = useState(false);

  useEffect(() => {
    
    // Add a listerner for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // set the initial value of the "ismobile" state variable
    setIsMobile(mediaQuery.matches);
    
    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    
    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      //remove the listener when the component is unmounted
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  
  
  return (
    <Canvas frameloop='demand' shadows  camera={{position: [20,3,8], fov:25}} gl={{ preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />''

    </Canvas>
  )
}

export default ComputersCanvas;