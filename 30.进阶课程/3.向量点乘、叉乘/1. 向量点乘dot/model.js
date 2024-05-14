import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(10,10,10);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00
})
const mesh = new THREE.Mesh(geometry, material);

const a = new THREE.Vector3(-10, 10, 0);
const b = new THREE.Vector3(20, 0, 0);
// dot几何含义：向量a长度 * 向量b长度 * cos(ab夹角)
const dot = a.dot(b);
console.log('点乘结果',dot);//判断结果是不是200

// a、b向量归一化后点乘
const cos =  a.normalize().dot(b.normalize());
console.log('向量夹角余弦值',cos);
//反余弦计算向量夹角弧度
const rad = Math.acos(cos);
const deg = THREE.MathUtils.radToDeg(rad);
console.log('向量夹角角度',deg);

export default mesh;
