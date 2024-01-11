import * as THREE from "three";

// p1、p2、p3表示三个点坐标
const p1 = new THREE.Vector3(-80, 0, 0);
const p2 = new THREE.Vector3(20, 100, 0);
const p3 = new THREE.Vector3(80, 0, 100);

// 三维二次贝塞尔曲线
const curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);

const points = curve.getPoints(100);

// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);; //创建一个几何体对象

// 2、材质
const material = new THREE.LineBasicMaterial({
	color: 0xff0000,
})

// 3、模型
const model = new THREE.Line(geometry, material);


// ========================== 控制点 =================
const arr2 = [
	new THREE.Vector3(-80, 0, 0),
	new THREE.Vector3(20, 100, 0),
	new THREE.Vector3(80, 0, 100),
];

// 1、几何体
const geometry2 = new THREE.BufferGeometry().setFromPoints(arr2);;

// 2、材质
const material2 = new THREE.LineBasicMaterial({
	color: 0xffff00,
	size:3
})

// 3、模型
const model2 = new THREE.Line(geometry2, material2);

const group = new THREE.Group();
group.add(model, model2);


export default group;
