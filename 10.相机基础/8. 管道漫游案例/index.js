import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { mesh, pointsArr } from "./model.js";

//场景
const scene = new THREE.Scene();
scene.add(mesh); //模型对象添加到场景中

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, width / height, 1, 3000);
camera.position.set(192, 123, 85);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
  antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

let i = 0;
// 相机位置设置在当前点位置

function update() {
  if (i < pointsArr.length - 1) {
    camera.position.copy(pointsArr[i]);
    // 曲线上当前点pointsArr[i]和下一个点pointsArr[i+1]近似模拟当前点曲线切线
    // 设置相机观察点为当前点的下一个点，相机视线和当前点曲线切线重合
    camera.lookAt(pointsArr[i + 1]);
    i++;
  } else {
    i = 0;
  }
}

function render() {
  update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.copy(pointsArr[i + 1]);
// controls.update();

// 画布跟随窗口变化
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
