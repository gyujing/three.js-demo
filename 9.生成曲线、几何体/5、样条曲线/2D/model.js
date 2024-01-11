import * as THREE from "three";

// ========================== 样条曲线 =================
// 样条曲线
const arr = [
	new THREE.Vector2(-50, 0),
	new THREE.Vector2(0, 30),
	new THREE.Vector2(50, 0),
];
// 二维样条曲线
const curve = new THREE.SplineCurve(arr);

const points = curve.getPoints( 50 );

// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);;

// 2、材质
const material = new THREE.PointsMaterial({
  color:0xff0000,
})

// 3、模型
const model = new THREE.Points(geometry, material);

// ========================== 控制点 =================
const arr2 = [
	new THREE.Vector2(-50, 0),
	new THREE.Vector2(0, 30),
	new THREE.Vector2(50, 0),
];


// 1、几何体
const geometry2 = new THREE.BufferGeometry().setFromPoints(arr2);;

// 2、材质
const material2 = new THREE.PointsMaterial({
  color:0xffff00,
})

// 3、模型
const model2 = new THREE.Points(geometry2, material2);

const group = new THREE.Group();
group.add(model,model2);

export default group;
