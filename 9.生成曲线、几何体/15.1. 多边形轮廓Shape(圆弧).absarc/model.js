import * as THREE from "three";

const shape = new THREE.Shape();

shape.lineTo(100, 0);
// 1、圆弧
// x,y,radius,startAngle ,endAngle 
// shape.absarc(-50, 0, 30, 0, 0.5 * Math.PI  );

// 2、椭圆
// x , y , xRadius , yRadius , startAngle , endAngle , clockwise , rotation 
shape.absellipse(-50, 0, 30, 50, 0, 0.5 * Math.PI  );

shape.lineTo(0, 30);

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
