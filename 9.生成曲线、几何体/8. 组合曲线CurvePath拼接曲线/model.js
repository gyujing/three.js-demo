import * as THREE from "three";

const R = 100;
const H = 200;//直线部分高度
// 1、曲线
const arc = new THREE.ArcCurve(
	0, 0,            // ax, aY
	R,           // Radius, 
	0, Math.PI,  // aStartAngle, aEndAngle
	true,            // aClockwise
	0              // aRotation
);
// 2、直线1、2
const p1 = new THREE.Vector3(-R, 0, 0);
const p2 = new THREE.Vector3(-R, H, 0);
const p3 = new THREE.Vector3(R, 0, 0);
const p4 = new THREE.Vector3(R, H, 0);
const line1 = new THREE.LineCurve3(p1, p2);
const line2 = new THREE.LineCurve3(p3, p4);

const CurvePath = new THREE.CurvePath();
CurvePath.curves.push(line2, arc, line1); // push有顺序

const points = CurvePath.getPoints(16);
console.log(points);

// ================================
// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);; //创建一个几何体对象

// =====线模型===
// 2、材质
const material = new THREE.LineBasicMaterial({
	color: 0x00fffff,
})
// 3、模型
const model = new THREE.Line(geometry, material);

// =====点模型=========
const material2 = new THREE.PointsMaterial({
	color: 0xff00ff,
	size: 10
})

const model2 = new THREE.Points(geometry, material2);



const group = new THREE.Group();

group.add(model, model2);


export default group;
