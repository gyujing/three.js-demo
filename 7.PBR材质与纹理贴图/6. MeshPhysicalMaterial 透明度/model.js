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
  const mesh = gltf.scene.getObjectByName('玻璃01');
  console.log(mesh);
  mesh.material = new THREE.MeshPhysicalMaterial({
    color: mesh.material.color, //默认颜色
    metalness: 0.0,// 玻璃，非金属
    roughness: 0.0,//玻璃，非金属
    envMap: textureCube, //环境贴图
    envMapIntensity: 2.5, //环境贴图对Mesh表面影响程度
    transmission: 0.8, //透光率
    ior: 1.5, //折射率
    // reflectivity:0.5,  //反射率
  })

  // 创建材质子菜单
  const matFolder = gui.addFolder("玻璃材料");
  // 材质颜色color
  matFolder.addColor(mesh.material, "color").onChange(function (value) {
    material.color.set(value);
  });
  matFolder.add(mesh.material, "metalness", 0, 1);
  matFolder.add(mesh.material, "roughness", 0, 1);
  matFolder.add(mesh.material, "envMapIntensity", 0, 10);
  matFolder.add(mesh.material, "transmission", 0, 1);
  matFolder.add(mesh.material, "ior", 1.0, 2.333);
  // matFolder.add(mesh.material, "reflectivity", 0, 1);
  // matFolder.add(mesh.material, "clearcoatRoughness", 0, 1);

  model.add(gltf.scene)
})


export default model;
