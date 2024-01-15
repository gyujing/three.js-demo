import * as THREE from "three";

const geometry = new THREE.BoxGeometry(100, 100, 100);

const material = new THREE.MeshLambertMaterial({
	color: 0x00ffff,
	transparent: true,
	opacity: 0.3
});

const mesh = new THREE.Mesh(geometry, material);

// 边框
const edges = new THREE.EdgesGeometry(geometry);

const edgesMaterial = new THREE.LineBasicMaterial({
	color: 0x00ffff
});

const line = new THREE.LineSegments(edges, edgesMaterial);

mesh.add(line)

export default mesh;
