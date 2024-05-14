import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(10,10,10);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00
})
const mesh = new THREE.Mesh(geometry, material);


/**
 * 计算三角形夹角
 */
// 三角形的三个点坐标p1，p2，p3
const p1 = new THREE.Vector3(0,0,0);// 点1坐标
const p2 = new THREE.Vector3(20,0,0);// 点2坐标
const p3 = new THREE.Vector3(10,10,0);// 点3坐标

const a = p3.clone().sub(p1);
const b = p2.clone().sub(p1);

const cos = a.normalize().dot(b.normalize())
const rad = Math.acos(cos);//余弦值转弧度
const deg = THREE.MathUtils.radToDeg(rad)
console.log("角度",deg);

export default mesh;
