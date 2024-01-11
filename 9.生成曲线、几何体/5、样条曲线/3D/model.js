import * as THREE from "three";

const arr = [
	new THREE.Vector3(-50, 20, 90),
	new THREE.Vector3(-10, 40, 40),
	new THREE.Vector3(0, 0, 0),
	new THREE.Vector3(60, -60, 0),
	new THREE.Vector3(70, 0, 80)
]
// 三维样条曲线
const curve = new THREE.CatmullRomCurve3(arr);

const points = curve.getPoints( 50 );

// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);; //创建一个几何体对象

// 2、材质
const material = new THREE.LineBasicMaterial({
// const material = new THREE.PointsMaterial({
  color:0xff0000,
})

// 3、模型
const model = new THREE.LineLoop(geometry, material);
// const model = new THREE.Points(geometry, material);



// ========================== 控制点 =================
const arr2 = [
	new THREE.Vector3(-50, 20, 90),
	new THREE.Vector3(-10, 40, 40),
	new THREE.Vector3(0, 0, 0),
	new THREE.Vector3(60, -60, 0),
	new THREE.Vector3(70, 0, 80)
];


// 1、几何体
const geometry2 = new THREE.BufferGeometry().setFromPoints(arr2);;

// 2、材质
const material2 = new THREE.PointsMaterial({
  color:0xffff00,
	size:3
})

// 3、模型
const model2 = new THREE.Points(geometry2, material2);

const group = new THREE.Group();
group.add(model,model2);


export default group;
