import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(10, 10, 10);
geometry.translate(0,5,0);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);

// 非单位向量v
const v = new THREE.Vector3(1,1,0);
v.normalize(); 
// console.log('向量',v);
// console.log('向量长度',v.length());

const A = new THREE.Vector3(-50,0,-50);
const B = new THREE.Vector3(100,0,100);

// AB：向量方向
const AB = B.clone().sub(A);
AB.normalize();
// console.log('向量方向',AB);

// 向AB方向平移100米
// T: 向量平移
const T = AB.clone().multiplyScalar(100);
console.log("向量T长度",T.length());

// mesh.position的xyz三个分量分别加上向量T的xyz分量
// mesh.position.add(T);

// 网格延AB方向平移100米
mesh.translateOnAxis(AB,100)

export default mesh;
