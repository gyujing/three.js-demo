import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import TWEEN from '@tweenjs/tween.js'
import model from "./model.js";

/**
 * 3D场景
 */
const scene = new THREE.Scene();
scene.add(model);

/**
 * 三维坐标轴辅助
 */
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
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(202, 123, 125);
camera.lookAt(0, 0, 0);

// 相机动画:从一个点移动到另一个点
new TWEEN.Tween(camera.position)
  .to({ x: 180, y: 180, z: 50 }, 3000)
  .onUpdate(function () {
    camera.lookAt(0, 0, 0);
  })
  .start();

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer({
  antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
// renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
//解决加载gltf格式模型颜色偏差问题
renderer.outputEncoding = THREE.sRGBEncoding;

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
