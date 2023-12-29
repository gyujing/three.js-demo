import * as THREE from "three";

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({color: 0x00ff00,});
const mesh = new THREE.Mesh(geometry, material); 
const mesh2 = new THREE.Mesh(geometry, material); 
mesh2.translateX(100);

const group = new THREE.Group();
group.add(mesh);
group.add(mesh2);
// console.log("group:",group)

group.translateY(100);
// group.scale.set(4,4,4);
group.rotateY(Math.PI/6)
console.log("group.children:",group.children)

export default group;
