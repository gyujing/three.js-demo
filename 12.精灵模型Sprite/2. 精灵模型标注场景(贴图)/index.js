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

/**
 * 点光源
 */
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(400, 200, 200); //点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中

/**
 * 透视投影相机
 */
// const width = 800;
// const height = 500;
// const k = width / height; //canvas画布宽高比
// const s = 0.5; //控制left, right, top, bottom范围大小
// const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 8000);
// camera.position.set(200, 200, 200);
// camera.lookAt(model.position);

const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
// renderer.render(scene, camera);
renderer.setClearColor(0x110000, 0.3);
document.body.appendChild(renderer.domElement);

render();
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera);
});
