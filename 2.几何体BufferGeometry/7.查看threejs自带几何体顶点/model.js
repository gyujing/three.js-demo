import * as THREE from "three";

// 1）、长方体
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// 2）、球体
// const geometry = new THREE.SphereGeometry(100, 30, 30);
// 4）、矩形平面
const geometry = new THREE.PlaneGeometry(200, 200, 2, 2);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  wireframe: true,
  // side: THREE.FrontSide,//平面默认只有正面可见
  side: THREE.DoubleSide, //平面两面可见
});

console.log(geometry.attributes.position);
console.log(geometry.index);

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
