import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../工厂.glb", function (gltf) {
  console.log('控制台查看加载gltf文件返回的对象结构', gltf);
  console.log('gltf对象场景属性', gltf.scene);
  model.add(gltf.scene)
})

export  default model;
