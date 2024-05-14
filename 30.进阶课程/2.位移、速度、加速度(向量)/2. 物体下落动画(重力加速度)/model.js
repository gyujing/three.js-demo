import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00
})
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 100, 0);

export default mesh;
