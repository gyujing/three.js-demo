import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import model from "./model.js";

/**
 * 3D场景
 */
const scene = new THREE.Scene();

scene.add(model);

/**
 * 三维坐标轴辅助
 */
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
scene.add(gridHelper)

/**
 * 点光源
 */
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(400, 200, 200); //点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中

/**
 * 透视投影相机
 */
const width = window.innerWidth;
const height = window.innerHeight - 100;
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
camera.position.set(100, 100, 200);
camera.lookAt(model.position);

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);

function render(){
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
render()

/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera);
});


window.onresize = function(){
  renderer.setSize(window.innerWidth,  window.innerHeight - 100);
  camera.aspect = window.innerWidth/( window.innerHeight - 100);
  camera.updateProjectionMatrix();
}
