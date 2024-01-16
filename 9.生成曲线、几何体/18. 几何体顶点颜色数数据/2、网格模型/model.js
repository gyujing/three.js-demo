import * as THREE from "three";

const geometry = new THREE.BufferGeometry();

// 顶点位置
const vertices = new Float32Array([
	0, 0, 0, //顶点1坐标
	50, 0, 0, //顶点2坐标
	0, 25, 0, //顶点3坐标
]);
geometry.attributes.position = new THREE.BufferAttribute(vertices, 3)

// 顶点颜色
const colors = new Float32Array([
	1.0, 0.0, 0.0,
	0.0, 1.0, 0.0,
	0.0, 0.0, 1.0,
])
geometry.attributes.color = new THREE.BufferAttribute(colors, 3);


// 网格模型
const material = new THREE.MeshBasicMaterial({
	vertexColors: true,
	side: THREE.DoubleSide,
})

const model = new THREE.Mesh(geometry, material)

export default model;
