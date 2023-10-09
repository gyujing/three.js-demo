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
  scale: 0,
  bool: false,
};

gui
  .add(pointLight, "intensity", 0, 2.0)
  .name("灯光强度")
  .step(0.1)
  .onChange(function (value) {
    pointLight.intensity = value;
  });

// add(控制对象，对象具体属性，其他参数)
// 参数3和参数4，分别是一个数字 => 拖动条
gui.add(mesh.position, "x", 0, 180).onChange(function (value) {
  mesh.position.x = value;
});
// 参数3是一个数组=>下拉菜单
gui
  .add(obj, "scale", [-100, 0, 100])
  .name("y坐标")
  .onChange(function (value) {
    mesh.position.y = value;
  });

// 参数3是一个对象 =>下拉菜单
// 参数3数据类型：对象(下拉菜单)
gui
  .add(obj, "scale", {
    left: -100,
    center: 0,
    right: 100,
    // 左: -100,//可以用中文
    // 中: 0,
    // 右: 100
  })
  .name("位置选择")
  .onChange(function (value) {
    mesh.position.x = value;
  });

// 对应属性的数据类型:布尔值 => 单选框
gui.add(obj, "bool").name("是否旋转");

//  对应属性的数据类型:颜色 => 颜色选框
gui.addColor(obj, "color").onChange(function (value) {
  mesh.material.color.set(value);
});

// 渲染循环
function render() {
  // 当gui界面设置obj.bool为true,mesh执行旋转动画
  if (obj.bool) mesh.rotateY(0.01);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
