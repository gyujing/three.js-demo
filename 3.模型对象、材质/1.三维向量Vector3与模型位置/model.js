import * as THREE from "three";

// 4）、矩形平面
const geometry = new THREE.BoxGeometry(50, 50, 50);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.8,
});

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

// const v = new THREE.Vector3(0, 0, 0);

// console.log("v", v);
// v.x = 100;
// v.set(100, 0, 0);
// console.log("v.x", v.x);

//设置x
// mesh.position.x = 100;
// mesh.position.set(100, 0, 0);

//平移
// mesh.translateX(100);
// const v = new THREE.Vector3(1, 1, 1);
// v.normalize(); //该向量转换为单位向量
// console.log("v",v);
// mesh.translateOnAxis(v, 100); //normalize后向x、y、z对角线方向平移100；不然分别向x、y、z移100
// mesh.translateX(100)

// 缩放
// mesh.scale.x = 2;
// mesh.scale.set(2, 0.5, 1.5);

// 旋转
// mesh.rotation.x += Math.PI/4;
// mesh.rotateX(Math.PI/4);

const v = new THREE.Vector3(0,1,0);
// v.normalize(); //该向量转换为单位向量
mesh.rotateOnAxis(v,Math.PI/4)

console.log("mesh.position", mesh.position);

export default mesh;
