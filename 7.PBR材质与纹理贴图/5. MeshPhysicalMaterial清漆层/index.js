import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import model from "./model.js";
import gui from './gui.js'

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
 * 光源设置
 */
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight); //点光源添加到场景中
// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const pGui = gui.addFolder("平行光");
pGui.add(directionalLight ,"intensity",1,100).name("光照强度");

const aGui = gui.addFolder("环境光");
aGui.add(ambient ,"intensity",1,100).name("光照强度");
/**
 * 透视投影相机
 */
const width = window.innerWidth;
const height = window.innerHeight - 100;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(500.0, 500.0,500.0);
camera.lookAt(0, 0, 0);

const cGui = gui.addFolder("位置");
cGui.add(camera.position,"x",1,100)
cGui.add(camera.position,"y",1,100)
cGui.add(camera.position,"z",1,100)

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
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
// controls.addEventListener("change", function () {
//   renderer.render(scene, camera);
// });


controls.target.set(0, 0, 0);
controls.update();


// 画布跟随窗口变化
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
