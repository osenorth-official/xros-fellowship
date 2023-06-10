import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three"

const color = new THREE.Color()

// Auto-generated by: https://github.com/pmndrs/gltfjsx
export default function Model({ url, ...props }) {
  const group = useRef()
  const [hovered, set] = useState()
  const { nodes, materials } = useGLTF(url)
  useFrame((state) => {
    group.current.children[0].children.forEach((child, index) => {
      child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 50
      child.rotation.x += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000
      child.rotation.y += (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000
      child.rotation.z += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000
    })
    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(color.set(hovered === child.name ? "#98FB98" : "white"), hovered ? 1 : 0.05)
    })
  })
  return (
    <group 
    ref={group} 
    {...props} 
    dispose={null}
    >
      <group
        onPointerOver={(e) => {(e.stopPropagation(), set(e.object.name))}}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
      >
      <mesh
        material={materials.M_Curly}
        geometry={nodes.Curly.geometry}
        position={[-30, -20.96, 2.16]}
        rotation={[1.76, -0.17, -0.19]}
        name="Curly"
      />
      <mesh
        material={materials.M_Headphone}
        geometry={nodes.Headphones.geometry}
        position={[-30.22, 1.99, -11.03]}
        rotation={[1.55, 0.32, -0.76]}
        name="Headphones"
      />
      <mesh
        material={materials.M_Notebook}
        geometry={nodes.Notebook.geometry}
        position={[41.4, 12, -23.21]}
        rotation={[1.83, -0.23, 0.91]}
        name="Laptop"
      />
      <mesh
        material={materials.M_Rocket}
        geometry={nodes.Rocket003.geometry}
        position={[17.58, 15.26, -25.21]}
        rotation={[1.14, 0.81, 0.44]}
        name="Rocket"
      />
      <mesh
        material={materials.M_Headset}
        geometry={nodes.VR_Headset.geometry}
        position={[6.92, -13.17, 27.59]}
        rotation={[1.29, -0.08, -0.64]}
        scale={[5, 5, 5]}
        name="VR Headset"
      />
      </group>
    </group>
  )
}