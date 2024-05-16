// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const model = new THREE.Group();

const loader = new GLTFLoader();
const person = new THREE.Group();
model.add(person);
loader.load("../人.glb", function (gltf) {
    // gltf.scene.scale.set(10,10,10);
    person.add(gltf.scene);
})

const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
geometry.translate(0, 0.2, 0);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
model.add(mesh);

// 已知条件
person.position.set(0, 0, 2);//人位置
mesh.position.set(-2, 0, -3);//物体位置

// a向量：人的正前方沿着z轴负半轴
const a = new THREE.Vector3(0, 0, -1);
const arrowA = new THREE.ArrowHelper(a,person.position,10, 0xffff00)
model.add(arrowA);

// 人- 物体方向向量
const b = mesh.position.clone().sub(person.position)
const arrowB = new THREE.ArrowHelper(b.normalize(),person.position,10, 0xffff00)
model.add(arrowB);

// 叉乘向量
let c = new THREE.Vector3();
c.crossVectors(a,b);
const arrowC = new THREE.ArrowHelper(c.normalize(),person.position,3, 0x0000ff)
model.add(arrowC);
console.log(c);

if(c.y < 0){
    console.log("物体在右边");
}else if(c.y == 0){
    console.log("物体在中间");
}else{
    console.log("物体在左边");
}

export default model;
