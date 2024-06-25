import { useState , Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Car from '../public/Car'
import Footer from './Footer'

function App() {

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls minDistance={3} maxDistance={5}/>
        <Suspense fallback={null}>
          <Car />
        </Suspense>
        <Environment preset='sunset'></Environment>
        <ContactShadows position={[0,-0.70,0]} opacity={1} scale={30} blur={0.4} far={10} resolution={256} color="#000000"></ContactShadows>
      </Canvas>
      <div className='container'>
        <h1>Porsche 911 Carrera 4S</h1>
        <p>Max Speed: 306 km/h</p>
        <p>Engine: Boxer 6</p>
        <p>Horse Power: 444 HP</p>
        <p>Engine displacement: 2981 cm3</p>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
