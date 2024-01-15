import * as THREE from "three";


// 1、shape 平面
const pointsArr = [
	new THREE.Vector2(0, 0), //多边形起点
	new THREE.Vector2(0, 10),
	new THREE.Vector2(10, 10),
	new THREE.Vector2(10, 0),
]
// Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
const shape = new THREE.Shape(pointsArr);

// 2、扫描轨迹
const arr = [
	new THREE.Vector3(-10, -50, -50),
	new THREE.Vector3(10, 0, 0),
	new THREE.Vector3(8, 50, 50),
	new THREE.Vector3(-5, 0, 100)
]
// 三维样条曲线
const curve = new THREE.CatmullRomCurve3(arr);

const geometry = new THREE.ExtrudeGeometry(
	shape,//二维轮廓
	{
		extrudePath: curve, //拉伸长度
		steps: 100
	}
);

const meterial = new THREE.MeshLambertMaterial({
	// wireframe:true, //出现三角形拼接线
	color: 0x00ffff,
	side: THREE.DoubleSide
});

const model = new THREE.Mesh(geometry, meterial);



export default model;
