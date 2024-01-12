import * as THREE from "three";


const line1 = new THREE.LineCurve3(
	new THREE.Vector3(80, 100, 100),
	new THREE.Vector3(80, 0, 100),
	
)
const vurve = new THREE.QuadraticBezierCurve3(
	new THREE.Vector3(80, 0, 100),
	new THREE.Vector3(20, -100, 0),
	new THREE.Vector3(-80, 0, 0),
);
const line2 = new THREE.LineCurve3(
	new THREE.Vector3(-80, 0, 0),
	new THREE.Vector3(-80, 100, 0)
)

const CurvePath = new THREE.CurvePath();
CurvePath.curves.push(line1,vurve,line2);
console.log(CurvePath);

// path:路径   40：沿着轨迹细分数  6：管道半径   25：管道截面圆细分数
const geometry = new THREE.TubeGeometry(CurvePath, 50, 6, 25);

// 2、材质
const material = new THREE.MeshLambertMaterial({
	color: 0xff0000,
	side: THREE.DoubleSide
})

// 3、模型
const model = new THREE.Mesh(geometry, material);



export default model;
