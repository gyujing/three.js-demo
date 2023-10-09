import * as THREE from "three";

// 4）、矩形平面
const geometry = new THREE.PlaneGeometry(100, 100);

// geometry.scale(2, 2, 2); //缩放
geometry.translate(50, 0, 0); //移动
// geometry.rotateX(Math.PI / 4); //旋转
geometry.center();

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  //   wireframe: true,
  // side: THREE.FrontSide,//平面默认只有正面可见
  side: THREE.DoubleSide, //平面两面可见
});

console.log(geometry.attributes.position);
console.log(geometry.index);
// console.log(geometry.getAttribute());

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
