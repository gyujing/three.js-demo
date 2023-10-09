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

const v1 = new THREE.Vector3(10, 10, 10);
const v2 = v1.clone();
const v3 = new THREE.Vector3(4, 5, 6);
v3.copy(v1);
// console.log(v1);
// console.log(v2);
// console.log(v3);

const mesh2 = mesh.clone();
// mesh2.position.x = 100;

// 改变材质颜色，或者说改变mesh2颜色，mesh和mesh2颜色都会改变
// mesh2.material.color.set(0xffff00);

// console.log(mesh);
// console.log(mesh2);

//共用一个meterial，相同
// console.log(mesh.material.color);
// console.log(mesh2.material.color);

// 克隆几何体和材质，重新设置mesh2的材质和几何体属性
mesh2.geometry = mesh.geometry.clone();
mesh2.material = mesh.material.clone();

// 改变mesh2颜色，不会改变mesh的颜色
mesh2.material.color.set(0xff0000);
//不相同，
console.log(mesh.material.color);
console.log(mesh2.material.color);

export default mesh;
