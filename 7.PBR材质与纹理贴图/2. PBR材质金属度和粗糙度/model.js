import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../金属.glb", function (gltf) {
  console.log(gltf.scene);
  gltf.scene.children[1].material.metalness = 0.5;
  gltf.scene.children[1].material.roughness = 0.4;
  model.add(gltf.scene)
})

export default model;
