import * as THREE from "three";


// 一组二维向量表示一个多边形轮廓坐标
const pointsArr = [
	new THREE.Vector2(-60, -50),
	new THREE.Vector2(-60, 0),
	new THREE.Vector2(0, 50),
	new THREE.Vector2(50, 0),
	new THREE.Vector2(50, -50),
]
// Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
const shape = new THREE.Shape(pointsArr);

console.log(shape);

const geometry = new THREE.ExtrudeGeometry(
	shape,//二维轮廓
	{
		depth: 20, //拉伸长度
		// bevelEnabled: false, //禁止倒角,默认true
		bevelThickness: 5, //倒角尺寸:拉伸方向，改变拉伸宽度
		bevelSize: 5, //倒角尺寸:垂直拉伸方向，改变高度
		bevelSegments: 20, //倒圆角：倒角细分精度，默认3
	}
);

const meterial = new THREE.MeshLambertMaterial({
	// wireframe:true, //出现三角形拼接线
	color: 0x00ffff,
	side: THREE.DoubleSide
});

const model = new THREE.Mesh(geometry, meterial);



export default model;
