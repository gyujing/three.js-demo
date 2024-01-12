import * as THREE from "three";


const arr = [
	new THREE.Vector3(20, 0, 0),
	new THREE.Vector3(40, 40, 0),
	new THREE.Vector3(80, 70, 0),
];

const curve = new THREE.CatmullRomCurve3(arr);
const points = curve.getPoints(40);

// path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
const geometry = new THREE.LatheGeometry(points, 10, 0, 1.5 * Math.PI);

// 2、材质
const material = new THREE.MeshLambertMaterial({
	color: 0xff0000,
	side: THREE.DoubleSide
})

// 3、模型
const model = new THREE.Mesh(geometry, material);



export default model;
