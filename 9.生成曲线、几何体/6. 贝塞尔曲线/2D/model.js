import * as THREE from "three";

const p1 = new THREE.Vector2(-10, 0);
const p2 = new THREE.Vector2(20, 15);
const p3 = new THREE.Vector2(10, 0);

// 二次贝塞尔曲线
const curve = new THREE.QuadraticBezierCurve(p1, p2, p3);

const points = curve.getPoints(50);

// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);;

// 2、材质
const material = new THREE.LineBasicMaterial({
	color: 0xff0000,
})

// 3、模型
const model = new THREE.LineLoop(geometry, material);


// 直线
const pointArr = [
	new THREE.Vector2(-10, 0),
	new THREE.Vector2(20, 15),
	new THREE.Vector2(10, 0)
];
const geometry2 = new THREE.BufferGeometry().setFromPoints(pointArr);;
const material2 = new THREE.LineBasicMaterial({
	color: 0xffff00,
})
const model2 = new THREE.Line(geometry2, material2);

const group = new THREE.Group();
group.add(model,model2);

export default group;
