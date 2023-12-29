import * as THREE from "three";

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({color: 0x00ff00,});
const mesh = new THREE.Mesh(geometry, material); 


// 平移几何体的顶点坐标,改变几何体自身相对局部坐标原点的位置
// 平移几何体不改变坐标原点
// geometry.translate(50/2,0,0,);;

// 平移网格改变坐标原点
mesh.translateX(50/2);;

// .rotateY()默认绕几何体中心旋转，经过上面几何体平移变化，你会发现.rotateY()是绕长方体面上一条线旋转
// mesh.rotateY(Math.PI/3);

console.log('mesh.position',mesh.position); // 150,0,0


export default mesh;
