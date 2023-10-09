import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 引入dat.gui.js的一个类GUI
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

/**
 * 3D场景
 */
const scene = new THREE.Scene();

/**
 * 三维坐标轴辅助
 */
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

// 2、几何体
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
});

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
mesh.position.set(0, 0, 0); //物体放置位置状态
scene.add(mesh);

/**
 * 点光源
 */
const pointLight = new THREE.PointLight(0xffffff, 1, 3000); //颜色，光照强度，光照距离
pointLight.position.set(150, 100, 50); //点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中

/**
 * 环境光
 */
// const light = new THREE.AmbientLight(0x404040); // soft white light
// scene.add(light);

/**
 * 透视投影相机
 */
const width = window.innerWidth; //窗口文档显示区的宽度作为画布宽度
const height = window.innerHeight; //窗口文档显示区的高度作为画布高度
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 8000);
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position); //指向mesh对应的位置

/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作
// 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x444444, 1); //设置背景颜色
document.body.appendChild(renderer.domElement);

/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  // 如果你遇到你的canvas画布输出模糊问题，注意设置
  renderer.render(scene, camera);
});

window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

/**
 * gui
 */
const gui = new GUI();

//改变交互界面的属性
gui.domElement.style.right = "50px"; //位置
gui.domElement.style.width = "200px"; //宽

//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
  color: 0x00ffff,
  specular: 0x00ffff,
  color1: 0x00ffff,
};
// 创建材质子菜单
const matFolder = gui.addFolder("材质");
// matFolder.close();
// 材质颜色color
matFolder.addColor(obj, "color").onChange(function (value) {
  material.color.set(value);
});
// 材质高光颜色specular
matFolder.addColor(obj, "specular").onChange(function (value) {
  material.specular.set(value);
});
// 材质高光颜色specular
matFolder.addColor(obj, "color1").onChange(function (value) {
  material.specular.set(value);
});

// 环境光子菜单
const ambientFolder = gui.addFolder("环境光");
// 环境光强度
ambientFolder.add(pointLight, "intensity", 0, 2);

// const dirFolder = gui.addFolder("平行光");
// // 平行光强度
// dirFolder.add(directionalLight, "intensity", 0, 2);
// // 平行光位置
// dirFolder.add(directionalLight.position, "x", -400, 400);
// dirFolder.add(directionalLight.position, "y", -400, 400);
// dirFolder.add(directionalLight.position, "z", -400, 400);
