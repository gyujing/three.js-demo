import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import mesh from './model.js'; //模型对象

//场景
const scene = new THREE.Scene();
scene.add(mesh); //模型对象添加到场景中


//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
// 添加一个辅助网格地面
const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
scene.add(gridHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


const v = new THREE.Vector3(10, 0, 10);//物体运动速度
const clock = new THREE.Clock();
let t = 0;//
const pos0  = mesh.position.clone();
// 速度 x 时间计算位移
// function render() {
//     let time = clock.getDelta(); //两帧渲染时间间隔(秒)
//     t += time;
//     // 获取移动的位置
//     const dis = v.clone().multiplyScalar(t);//速度 x 时间
//       // 网格模型初始位置加上t时间段内运动的位移量
//     const newPos = pos0.clone().add(dis);
//     mesh.position.copy(newPos);
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }

// 速度 x 间隔时间，然后累加计算位移
function render() {
    let time = clock.getDelta(); //两帧渲染时间间隔(秒)
    // 获取移动的位置
    const dis = v.clone().multiplyScalar(time);//速度 x 时间
      // 网格模型初始位置加上t时间段内运动的位移量
    mesh.position.add(dis);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};
