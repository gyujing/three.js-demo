import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 200);

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./箭头.png');

const material = new THREE.MeshLambertMaterial({
  color:0xffffff,
  map: texture,//map表示材质的颜色贴图属性
  transparent: true, //使用背景透明的png贴图，注意开启透明计算
});

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

mesh.rotateX(-Math.PI/2);

export default mesh;
