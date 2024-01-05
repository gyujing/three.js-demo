import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./1.png');// 加载手机mesh另一个颜色贴图
texture.encoding = THREE.sRGBEncoding; //和渲染器.outputEncoding一样值

loader.load("../Parrot.glb", function (gltf) {
  console.log();
  gltf.scene.children[0].material.map = texture;
  model.add(gltf.scene)
})

export default model;
