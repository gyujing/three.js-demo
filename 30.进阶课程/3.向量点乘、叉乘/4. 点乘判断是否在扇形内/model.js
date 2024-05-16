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
mesh.position.set(2, 0, -3);//物体位置

// a向量：人的正前方沿着z轴负半轴
const a = new THREE.Vector3(0, 0, -1);

const R = 20;//人前方扇形半径
const angle = 60;//人前方扇形角度

//首先排除物体离人距离大于R的，肯定不在范围内
let b = mesh.position.clone().sub(person.position);//物理--> 人的向量
let pmLen = b.length();//物体离人距离
console.log("物体离人距离:", pmLen);
if (pmLen > R) {
    console.log("物体不在人前方扇形范围内");
} else {
    // 物体和人正前方的角度必须小于30，才能在扇形区域内
    const cos = a.dot(b.normalize());
    const rad = Math.acos(cos);//夹角余弦值转角度值
    // 弧度转角度
    const _angle = THREE.MathUtils.radToDeg(rad);
    console.log("角度：", _angle);
    if (_angle <= angle / 2) {
        console.log("物体在人前方扇形范围内");
    } else {
        console.log("物体不在人前方扇形范围内");
    }
}


export default model;
