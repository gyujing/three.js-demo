import * as THREE from "three";

// ==============半圆==================
const curve = new THREE.ArcCurve(
	0, 0,            // ax, aY
	100,           // Radius, 
	0, Math.PI,  // aStartAngle, aEndAngle
	true,            // aClockwise
	0              // aRotation
);

const points = curve.getPoints(50);
console.log(points);

// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);; //创建一个几何体对象

// 2、材质
const material = new THREE.LineBasicMaterial({
	color: 0xff0000,
})

// 3、模型
const model = new THREE.Line(geometry, material);


// ========================== 直线 =================
const p1 = new THREE.Vector3(-100, 0, 0);
const p2 = new THREE.Vector3(-100, 200, 0);

const lineCurve1 = new THREE.LineCurve3(p1, p2);
const lineArr = lineCurve1.getPoints();
console.log(lineArr);
// 1、几何体
const geometry2 = new THREE.BufferGeometry().setFromPoints(lineArr);;

const p3 = new THREE.Vector3(100, 0, 0);
const p4 = new THREE.Vector3(100, 200, 0);
const lineCurve2 = new THREE.LineCurve3(p3, p4);
const lineArr2 = lineCurve2.getPoints();
console.log(lineArr2);
// 1、几何体
const geometry3 = new THREE.BufferGeometry().setFromPoints(lineArr2);;

// 2、材质
const material2 = new THREE.LineBasicMaterial({
	color: 0xffff00,
	size: 3
})

// 3、模型
const model2 = new THREE.Line(geometry2, material2);
const model3 = new THREE.Line(geometry3, material2);


// ==============描点===========================
const pointsTotal = [...points, ...lineArr, ...lineArr2];

const geometry4 = new THREE.BufferGeometry().setFromPoints(pointsTotal);;
const material4 = new THREE.PointsMaterial({
	color: 0xff00ff,
	size: 10
})

const model4 = new THREE.Points(geometry4, material4);






const group = new THREE.Group();

group.add(model, model2, model3, model4);


export default group;
