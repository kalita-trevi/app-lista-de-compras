// src/screens/AvatarCustomizationScreen.js
import React, { useState } from "react";
import { View, Button } from "react-native";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Avatar = () => {
  const [color, setColor] = useState("#ffcc99");

  const changeColor = () => {
    setColor(color === "#ffcc99" ? "#add8e6" : "#ffcc99");
  };

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Cabeça */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Corpo */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Braço Direito */}
        <mesh position={[0.7, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Braço Esquerdo */}
        <mesh position={[-0.7, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Perna Direita */}
        <mesh position={[0.25, -1.25, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1.5, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Perna Esquerda */}
        <mesh position={[-0.25, -1.25, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1.5, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>

        <OrbitControls />
      </Canvas>
      <Button title="Alterar Cor" onPress={changeColor} />
    </View>
  );
};

export default Avatar;
