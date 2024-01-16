import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const model = new THREE.Group();

const gltfLoader = new GLTFLoader();

gltfLoader.load("./地形.glb", function (gltf) {
	// console.log(gltf);
	model.add(gltf.scene);

	const mesh = gltf.scene.children[0];
	const geometry = mesh.geometry;
	console.log(geometry);

	// 顶点索引
	const index = geometry.index;
	console.log("index",index);
	console.log("attributes",geometry.attributes);
	const position = geometry.attributes.position;
	console.log("position",position);
	for(let i=0;i<position.count;i++){
		const x = position.getX(i);
		position.setX(i,x+40);
	}
})


export default model;
