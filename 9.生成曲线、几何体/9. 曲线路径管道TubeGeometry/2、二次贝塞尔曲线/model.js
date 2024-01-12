import * as THREE from "three";

// 二次贝塞尔曲线
// p1、p3轨迹线起始点坐标
const p1 = new THREE.Vector3(-100, 0, -100);
const p3 = new THREE.Vector3(100, 0, 100);
// 计算p1和p3的中点坐标
const x2 = (p1.x + p3.x)/2;
const z2 = (p1.z + p3.z)/2;
const h = 100;
const p2 = new THREE.Vector3(x2, h, z2);
const path = new THREE.QuadraticBezierCurve3(p1, p2, p3);

// path:路径   40：沿着轨迹细分数  6：管道半径   25：管道截面圆细分数
const geometry = new THREE.TubeGeometry(path, 40, 6, 25);

// 2、材质
const material = new THREE.MeshLambertMaterial({
	color: 0xff0000,
	side: THREE.DoubleSide
})

// 3、模型
const model = new THREE.Mesh(geometry, material);



export default model;
