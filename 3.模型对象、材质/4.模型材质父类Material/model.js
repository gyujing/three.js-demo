import * as THREE from "three";

// 4）、矩形平面
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.8,
  //   side: 2,
  side: 2,
  //   shadowSide: THREE.DoubleSide,
});

console.log("material.side", material.side); //0、1、2
console.log("material.shadowSide", material.shadowSide); //0、1、2
console.log("material.name", material.name);
// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
