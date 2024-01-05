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
 * 环境光
 */
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

/**
 * 透视投影相机
 */
const width = 800;
const height = 500;
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
camera.position.set(40, 40, 40);
camera.lookAt(0,0,0);

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
// renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

//解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.outputEncoding = THREE.sRGBEncoding;
//新版本，加载gltf，不需要执行下面代码解决颜色偏差
renderer.outputColorSpace = THREE.SRGBColorSpace;//设置为SRGB颜色空间

function render(){
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
render();

/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera);
});


controls.target.set(0, 0, 0);
controls.update();
