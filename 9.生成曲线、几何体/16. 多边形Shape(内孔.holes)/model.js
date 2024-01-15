import * as THREE from "three";

const shape = new THREE.Shape();

// 外轮廓
shape.moveTo(10, 0);
shape.lineTo(100, 0);
shape.lineTo(100, 100);
shape.lineTo(10, 100);


// Shape内孔轮廓
const path1 = new THREE.Path();// 圆孔1
path1.absarc(30, 20, 10);
const path2 = new THREE.Path();// 圆孔2
path2.absarc(80, 20, 10);
const path3 = new THREE.Path();// 方形孔
path3.moveTo(50, 50);
path3.lineTo(80, 50);
path3.lineTo(80, 80);
path3.lineTo(50, 80);


//三个内孔轮廓分别插入到holes属性中
shape.holes.push(path1, path2,path3);

// const geometry = new THREE.ShapeGeometry(shape);
const geometry = new THREE.ExtrudeGeometry(shape,{
	depth:20,
	//拉伸长度
	bevelEnabled:false,//禁止倒角
	curveSegments:50,
});

const meterial = new THREE.MeshLambertMaterial({
	// wireframe:true, //出现三角形拼接线
	color: 0x00ffff,
	side: THREE.DoubleSide
});

const model = new THREE.Mesh(geometry, meterial);

console.log('currentPoint', shape.currentPoint);



export default model;
