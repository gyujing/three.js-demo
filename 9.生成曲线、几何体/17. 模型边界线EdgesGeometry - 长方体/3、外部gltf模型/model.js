import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("./建筑模型.gltf", function (gltf) {
	console.log(gltf);
	gltf.scene.traverse(function (obj) {
		if (obj.isMesh) {
			// console.log(obj);
			obj.material = new THREE.MeshLambertMaterial({
				color: 0x00ffff,
				transparent: true,
				opacity: 0.3
			})

			const edges = new THREE.EdgesGeometry(obj.geometry);

			const edgesMaterial = new THREE.LineBasicMaterial({
				color: 0x00ffff
			});

			const line = new THREE.LineSegments(edges, edgesMaterial);

			obj.add(line);
		}
	})

	model.add(gltf.scene)
})

export default model;
