import * as THREE from "three";

// 4）、矩形平面
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.8,
  side: THREE.DoubleSide,
});

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
const mesh2 = new THREE.Mesh(geometry, material);

//mesh和mesh2不等价
mesh2.position.x = 100;

// 两个mesh共享一个材质，改变一个mesh的颜色，另一个mesh2的颜色也会跟着改变
// mesh.material和mesh2.material都指向同一个material
// 三者等价：mesh.material、mesh2.material、material
mesh.material.color.set(0xffff00);
// 三者等价：mesh.geometry、mesh2.geometry、geometry
mesh.geometry.translate(0, 100, 0);

//不同
console.log("mesh.position.x", mesh.position.x);
console.log("mesh2.position.x", mesh2.position.x);
// console.log("mesh.geometry", mesh.geometry);

//相同
console.log("mesh.material", mesh.material);
console.log("mesh2.material", mesh2.material);
export default mesh;
