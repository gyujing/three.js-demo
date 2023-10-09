import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/**
 * 3D场景
 */
const scene = new THREE.Scene();

/**
 * 三维坐标轴辅助
 */
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

// 2、
// 1）、长方体
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// 2）、球体
// const geometry = new THREE.SphereGeometry(50);
// 3）、圆柱
// const geometry = new THREE.CylinderGeometry(50, 100, 50); //顶部半径、底部半径、高
// 4）、矩形平面
// const geometry = new THREE.PlaneGeometry(40, 50);
// 5）、圆形平面
const geometry = new THREE.CircleGeometry(100);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  // side: THREE.FrontSide,//平面默认只有正面可见
  side: THREE.DoubleSide, //平面两面可见
});

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh);

/**
 * 点光源
 */
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(150, 100, 50); //点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中

/**
 * 环境光
 */
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

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
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作
document.body.appendChild(renderer.domElement);

/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera);
});
