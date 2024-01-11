import * as THREE from "three";

const curve = new THREE.ArcCurve(
	0,  0,            // ax, aY
	20,           // Radius, 
	0,  1.5 * Math.PI,  // aStartAngle, aEndAngle
	true,            // aClockwise
	0              // aRotation
);


const points = curve.getPoints( 50 );

console.log(curve);
console.log(points);
// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);; //创建一个几何体对象

// 2、材质
const material = new THREE.LineBasicMaterial({
  color:0xff0000,
})

// 3、模型
const model = new THREE.LineLoop(geometry, material);

export default model;
