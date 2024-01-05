import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { mesh, texture } from "./model.js";

/**
 * 3D场景
 */
const scene = new THREE.Scene();

scene.add(mesh);

/**
 * 三维坐标轴辅助
 */
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

/**
 * 光源
 */
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(400, 200, 200); //点光源放在x轴上
scene.add(light); //点光源添加到场景中

/**
 * 透视投影相机
 */
const width = 800;
const height = 500;
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position);

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
// renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);


// 渲染函数
function render() {
  renderer.render(scene, camera); //执行渲染操作
  texture.offset.x += 0.001;
  requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}
render();


/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera);
});
