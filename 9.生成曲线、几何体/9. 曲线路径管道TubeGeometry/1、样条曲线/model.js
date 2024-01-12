import * as THREE from "three";

// 三维样条曲线
const path = new THREE.CatmullRomCurve3([
	new THREE.Vector3(-50, 20, 90),
	new THREE.Vector3(-10, 40, 40),
	new THREE.Vector3(0, 0, 0),
	new THREE.Vector3(60, -60, 0),
	new THREE.Vector3(70, 0, 80)
]);

// path:路径   40：沿着轨迹细分数  6：管道半径   25：管道截面圆细分数
const geometry = new THREE.TubeGeometry(path, 40, 6, 25);

// 2、材质
const material = new THREE.MeshLambertMaterial({
	color: 0xff0000,
	side:THREE.DoubleSide
})

// 3、模型
const model = new THREE.Mesh(geometry, material);



export default model;
