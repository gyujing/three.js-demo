import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const model = new THREE.Group();

const gltfLoader = new GLTFLoader();

gltfLoader.load("./地形.glb", function (gltf) {
	// console.log(gltf);
	model.add(gltf.scene);

	const mesh = gltf.scene.children[0];
	// 1. 山脉顶点数据
	const pos = mesh.geometry.attributes.position;
	const count = pos.count;

	// 2. 计算模型y坐标高度差
	const yArr = [];//顶点所有y坐标，也就是地形高度
	for (let i = 0; i < count; i++) {
		yArr.push(pos.getY(i));//获取顶点y坐标，也就是地形高度
	}
	yArr.sort();
	const minY = yArr[0];
	const maxY = yArr[yArr.length - 1];
	const height = maxY - minY;

	// 3. 计算每个顶点的颜色值
	const c1 = new THREE.Color(0xff0000);
	const c2 = new THREE.Color(0x0000ff);
	const cArr = [];
	for (let i = 0; i < count; i++) {
		const percent = (pos.getY(i) - minY) / height;
		const c = c1.clone().lerp(c2, percent);
		cArr.push(c.r, c.g, c.b)
	}
	const colors = new Float32Array(cArr);
	mesh.geometry.attributes.color = new THREE.BufferAttribute(colors, 3);
	
	// 4. 设置材质，使用顶点颜色渲染
	mesh.material = new THREE.MeshLambertMaterial({
		vertexColors: true,
	});
	
})


export default model;
