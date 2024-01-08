import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

// CubeTexture表示立方体纹理对象，父类是纹理对象Texture 
// 加载环境贴图
// 加载周围环境6个方向贴图
// 上下左右前后6张贴图构成一个立方体空间
// 'px.jpg', 'nx.jpg'：x轴正方向、负方向贴图  p:正positive  n:负negative
// 'py.jpg', 'ny.jpg'：y轴贴图
// 'pz.jpg', 'nz.jpg'：z轴贴图
const cubeTexture = new THREE.CubeTextureLoader()
  .setPath('../环境贴图/环境贴图0/')
  .load([
    'px.jpg',
    'nx.jpg',
    'py.jpg',
    'ny.jpg',
    'pz.jpg',
    'nz.jpg'
  ]);

//如果renderer.outputEncoding=THREE.sRGBEncoding;环境贴图需要保持一致
cubeTexture.encoding = THREE.sRGBEncoding;

console.log("cubeTexture", cubeTexture);

loader.load("../金属.glb", function (gltf) {
  console.log(gltf.scene);
  gltf.scene.traverse(function (obj) {
    if (obj.isMesh) {
      // 环境贴图
      obj.material.envMap = cubeTexture;
      // 环境贴图反射率
      obj.material.envMapIntensity = 1.0;
      // 金属度
      obj.material.metalness = 1.0;
      // 粗糙度，0.0 接近镜面
      obj.material.roughness = 0.5;

    }
  });
  model.add(gltf.scene)
})


export default model;
