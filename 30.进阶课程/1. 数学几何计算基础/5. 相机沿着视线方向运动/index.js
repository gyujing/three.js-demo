import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';

import mesh from './model.js'; //模型对象
// 从threejs扩展库引入gui.js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

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


const dir = new THREE.Vector3();
// 获取相机的视线方向
camera.getWorldDirection(dir);
console.log('相机方向', dir);
console.log('单位向量', dir.length());

// dis向量表示相机沿着相机视线方向平移200的位移量
// const dis = dir.clone().multiplyScalar(200);
// 相机沿着视线方向平移
// camera.position.add(dis);

/**
 * tewwn动画
 */
// const T = camera.position.clone().add(dis)
// console.log(T);

// //创建一段mesh平移的动画
// const tween = new TWEEN.Tween(camera.position);
// //经过2000毫秒，pos对象的x和y属性分别从零变化为100、50
// tween.to(T, 2000);
// //tween动画开始执行
// tween.start();

/**
 * GUI
 */
const pos0 = camera.position.clone();//记录相机初始位置
const gui = new GUI();
gui.add({ v: 0 }, "v", 0, 100).name("相机移动").onChange(function (value) {
    // dis向量表示相机沿着相机视线方向平移200的位移量
    const dis = dir.clone().multiplyScalar(value);
    console.log(dis.length());
    // 相机沿着视线方向平移
    const pos = pos0.clone().add(dis);
    camera.position.copy(pos)
});

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);



// 渲染循环
function render() {
    TWEEN.update();
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
