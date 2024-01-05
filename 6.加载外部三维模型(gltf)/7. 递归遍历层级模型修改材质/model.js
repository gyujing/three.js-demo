import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../collision-world.glb", function (gltf) {
  gltf.scene.traverse(function (obj) {
    if (obj.isMesh) {//判断是否是网格模型
      console.log('模型节点', obj);
      console.log('obj.name', obj.name);
      console.log('obj.material', obj.material);
      obj.material = new THREE.MeshLambertMaterial({
        color: 0xffff00,
      });
      // obj.material.color.set(0xffff00) //颜色重合
      console.log('obj.material', obj.material);
    }
  });
  model.add(gltf.scene)
})

export default model;
