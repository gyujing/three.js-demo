import * as THREE from "three";

const shape = new THREE.Shape();

shape.moveTo(10, 0);
// 绘制直线线段，起点(10,0)，结束点(100,0)
shape.lineTo(100, 0);//.currentPoint变为(100, 0)
shape.lineTo(100, 100);//.currentPoint变为(100, 100)
shape.lineTo(10, 100);//.currentPoint变为(10, 100)


const geometry = new THREE.ShapeGeometry(shape);
// const geometry = new THREE.ExtrudeGeometry(shape,{
// 	depth:20
// });

const meterial = new THREE.MeshLambertMaterial({
	// wireframe:true, //出现三角形拼接线
	color: 0x00ffff,
	side: THREE.DoubleSide
});

const model = new THREE.Mesh(geometry, meterial);

console.log('currentPoint', shape.currentPoint);



export default model;
