import * as THREE from "three";


const c1 = new THREE.Color(0xff0000); //红色
const c2 = new THREE.Color(0x0000ff); //蓝色
// c1.lerp(c2,1); //改变c1，c2不变

// c1.clone() 返回一个新的Color，不改变c1
const c = c1.clone().lerp(c2, 0.5);//颜色插值计算
console.log("c1", c1);
console.log("c", c);


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
// let count = geometry.attributes.position.count;
// let carr = [];
// for (let i = 0; i < count; i++) {
// 	let percent = i / count;
// 	const c = new THREE.Color();
// 	c.lerpColors(c1, c2, percent);
// 	carr.push(c.r, c.g, c.b);
// }
// const colors = new Float32Array(carr);

// geometry.attributes.color = new THREE.BufferAttribute(colors, 3)

// 2、材质
const material = new THREE.LineBasicMaterial({
	vertexColors: true,
})

// 3、模型
const model = new THREE.Line(geometry, material);




export default model;
