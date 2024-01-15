import * as THREE from "three";

const geometry = new THREE.BufferGeometry();

// 顶点位置
const vertices = new Float32Array([
	0, 0, 0, //顶点1坐标
	50, 0, 0, //顶点2坐标
	0, 25, 0, //顶点3坐标
]);

const attribute = new THREE.BufferAttribute(vertices, 3)

geometry.attributes.position = attribute;

// 顶点颜色
const colors = new Float32Array([
	1.0, 0.0, 0.0,
	0.0, 1.0, 0.0,
	0.0, 0.0, 1.0,
])

const attributeColor = new THREE.BufferAttribute(colors, 3);
geometry.attributes.color = attributeColor;

// 点模型
// const material = new THREE.PointsMaterial({
// 	// color: 0xff0000,
// 	vertexColors:true,
// 	size: 10
// })

// const model = new THREE.Points(geometry, material)

// 线模型
const material = new THREE.LineBasicMaterial({
	vertexColors: true,
})

const model = new THREE.Line(geometry, material)

export default model;
