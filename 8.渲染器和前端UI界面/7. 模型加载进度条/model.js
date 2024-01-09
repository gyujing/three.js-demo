import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../轿车.glb", function (gltf) {
  model.add(gltf.scene)
  document.getElementById("process").style.display = 'none';
},function(e){
  console.log(e);
  document.getElementById("box").style.width = e.loaded / e.total * 100 + "%";
  if(e.loaded == e.total){
    document.getElementById("box").style.borderTopRightRadius = '20px';
    document.getElementById("box").style.borderBottomRightRadius = '20px';
  }
})

export default model;
