import * as THREE from 'three';

const geometry = new THREE.BufferGeometry(); 
//类型数组创建顶点数据
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
]);
// 创建属性缓冲区对象
const attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;
const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff, //材质颜色
    side: THREE.FrontSide, //默认只有正面可见
    // side: THREE.BackSide, //设置只有背面可见
    // side: THREE.DoubleSide, //两面可见
});
// 网格模型本质：一个一个三角形(面)构成
const mesh = new THREE.Mesh(geometry, material); 
const group = new THREE.Group()
group.add(mesh)

// 已知三角形三个顶点的坐标，计算三角形法线方向
const p1 = new THREE.Vector3(0, 0, 0);
const p2 = new THREE.Vector3(50, 0, 0);
const p3 = new THREE.Vector3(0, 100, 0);

const a1 = p2.clone().sub(p1);
const a2 = p3.clone().sub(p1);
// 法线
const t1 = a1.cross(a2).normalize();
console.log(t1);

const arrow = new THREE.ArrowHelper(t1,p2,50,0xffff00)
group.add(arrow)
// const p1 = new THREE.Vector3(0, 0, 10);
// const p2 = new THREE.Vector3(0, 0, 100);
// const p3 = new THREE.Vector3(50, 0, 10);


export default group;
