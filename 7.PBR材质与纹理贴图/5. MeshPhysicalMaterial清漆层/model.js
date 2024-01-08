import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gui from './gui.js'

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();
// 加载环境贴图
const textureCube = new THREE.CubeTextureLoader()
  .setPath('../环境贴图/环境贴图1/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

textureCube.encoding = THREE.sRGBEncoding; //设置纹理贴图编码方式和WebGL渲染器一致   
loader.load("../轿车.glb", function (gltf) {
  console.log(gltf.scene);
  const mesh = gltf.scene.getObjectByName('外壳01');
  console.log(mesh);
  mesh.material = new THREE.MeshPhysicalMaterial({
    color: mesh.material.color, //默认颜色
    metalness: 0.9,//车外壳金属度
    roughness: 0.5,//车外壳粗糙度
    envMap: textureCube, //环境贴图
    envMapIntensity: 2.5, //环境贴图对Mesh表面影响程度
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
  })

  // 创建材质子菜单
  const matFolder = gui.addFolder("车外壳材料");
  // 材质颜色color
  matFolder.addColor(mesh.material, "color").onChange(function (value) {
    material.color.set(value);
  });
  matFolder.add(mesh.material, "metalness", 0, 1);
  matFolder.add(mesh.material, "roughness", 0, 1);
  matFolder.add(mesh.material, "envMapIntensity", 0, 10);
  matFolder.add(mesh.material, "clearcoat", 0, 1);
  matFolder.add(mesh.material, "clearcoatRoughness", 0, 1);

  model.add(gltf.scene)
})


export default model;
