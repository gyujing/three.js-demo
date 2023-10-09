import * as THREE from "three";

// 4）、矩形平面
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.8,
});

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

// const v = new THREE.Euler(0, Math.PI / 2, 0);
// console.log(v);
// mesh.rotation.x = Math.PI / 8;
// mesh.rotation.x += Math.PI / 8;
mesh.rotateX(Math.PI / 8);
mesh.rotateX(Math.PI / 8);
console.log(mesh.rotation);

export default mesh;
