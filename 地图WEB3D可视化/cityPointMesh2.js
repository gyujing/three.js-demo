import * as THREE from "../three.js-r150/build/three.module.js";

const geometry = new THREE.PlaneBufferGeometry(1, 1);
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load("./光圈贴图.png");
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, //设置光圈颜色
  map: texture,
  transparent: true,
});

// size:矩形平面Mesh的尺寸
// x，y表示矩形平面在一个平面上位置坐标
function cityPointMesh(size, x, y) {
  let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  mesh.scale.set(size, size, size); //设置mesh大小
  mesh.position.set(x, y, 0);
  return mesh;
}

export { cityPointMesh };
