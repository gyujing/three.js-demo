import * as THREE from "three";

const curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	20, 10,           // xRadius, yRadius
	0,  1.5 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0 * Math.PI               // aRotation，延x轴逆时针旋转弧度
);


const points = curve.getPoints( 50 );
// const points = curve.getSpacedPoints( 50 );

console.log(curve);
console.log(points);
// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);

// 2、材质
const material = new THREE.LineBasicMaterial({
  color:0xff0000,
})

// 3、模型
const model = new THREE.LineLoop(geometry, material);

export default model;
