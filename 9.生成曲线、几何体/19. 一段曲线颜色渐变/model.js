import * as THREE from "three";

const arr = [
	new THREE.Vector3(-50, 20, 90),
	new THREE.Vector3(-10, 40, 40),
	new THREE.Vector3(0, 0, 0),
	new THREE.Vector3(60, -60, 0),
	new THREE.Vector3(70, 0, 80)
]
// 三维样条曲线
const curve = new THREE.CatmullRomCurve3(arr);

const points = curve.getPoints(50);

// 1、几何体
const geometry = new THREE.BufferGeometry().setFromPoints(points);; //创建一个几何体对象
console.log("geometry.attributes.position",geometry.attributes.position);
let count = geometry.attributes.position.count;
let carr = [];
for(let i=0;i<count;i++){
	let percent = i/count;
	carr.push(percent,0,1-percent);
}
const colors = new Float32Array(carr);

geometry.attributes.color = new THREE.BufferAttribute(colors,3)

// 2、材质
const material = new THREE.LineBasicMaterial({
	vertexColors: true,
})

// 3、模型
const model = new THREE.Line(geometry, material);


export default model;
