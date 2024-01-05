import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../Parrot.glb", function (gltf) {
  console.log(gltf.scene);
  const nameNode = gltf.scene.getObjectByName("mesh_0");
  console.log(nameNode);
  // nameNode.material.color.set(0xff0000);//改变1号楼Mesh材质颜色
  model.add(gltf.scene)
})

export default model;
