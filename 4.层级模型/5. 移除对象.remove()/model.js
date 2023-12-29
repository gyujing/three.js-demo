import * as THREE from "three";

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({color: 0x00ff00,});
const mesh1 = new THREE.Mesh(geometry, material); 
const mesh2 = new THREE.Mesh(geometry, material); 
mesh2.translateX(150);

// 只改变了mesh的位置  - 本地(局部)坐标
mesh1.position.set(50, 0, 0);

const group = new THREE.Group();
group.add(mesh1);
group.add(mesh2);

group.remove(mesh1);

console.log('查看group的子对象',group.children);
// group.remove(mesh1,mesh2);




export default group;
