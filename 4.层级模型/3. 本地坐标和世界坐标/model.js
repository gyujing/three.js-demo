import * as THREE from "three";

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({color: 0x00ff00,});
const mesh = new THREE.Mesh(geometry, material); 
const mesh2 = new THREE.Mesh(geometry, material); 
mesh2.translateX(150);

// 只改变了mesh的位置  - 本地(局部)坐标
mesh.position.set(50, 0, 0);

const group = new THREE.Group();
group.add(mesh);
group.add(mesh2);

// mesh、mesh2的位置都改变了  - 世界坐标
group.position.set(50, 0, 0);

// 声明一个三维向量用来表示某个坐标
const worldPosition = new THREE.Vector3();
// 获取mesh的世界坐标，你会发现mesh的世界坐标受到父对象group的.position影响
mesh2.getWorldPosition(worldPosition);
// 模型自身.position 和 所有父对象.position累加的坐标
console.log('世界坐标',worldPosition); // 150,0,0  + 50,0,0
console.log('本地坐标',mesh2.position); // 150,0,0


export default group;
