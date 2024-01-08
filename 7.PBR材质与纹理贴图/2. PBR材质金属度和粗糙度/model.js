import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../金属.glb", function (gltf) {
  console.log(gltf.scene);
  gltf.scene.traverse(function (obj) {
    if (obj.isMesh) {
      // 金属度
      obj.material.metalness = 1.0;
      // 粗糙度
      obj.material.roughness = 0.5;
    }
  });
  model.add(gltf.scene)
})

export default model;
