import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);

// 已知三角形三个顶点的坐标，计算三角形面积
const p1 = new THREE.Vector3(0, 0, 0);
const p2 = new THREE.Vector3(20, 0, 0);
const p3 = new THREE.Vector3(0, 20, 0);

const a = p2.clone().sub(p1);
const b = p3.clone().sub(p1);
const c = a.clone().cross(b);

// let sin = c.length()/( a.length()*b.length());
// let h =  a.length()*(c.length()/( a.length()*b.length()))
let h = c.length() / b.length();
// h * b.length()
let area = 0.5 * c.length();

console.log("面积：", area);

export default mesh;
