import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 浏览器控制台测试，是否引入成功
// console.log(THREE.Scene);

/**
 * 3D场景
 */
// 1、创建3D场景对象Scene
const scene = new THREE.Scene();

/**
 * 三维坐标轴辅助
 */
const axesHelper = new THREE.AxesHelper(150);
// scene.add(axesHelper);

// 2、创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(10, 10, 10);

// 3、创建一个材质对象Material，
// 漫反射网格材质MeshLambertMaterial 会受到光照影响
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00, //0xff0000设置材质颜色为红色
  transparent: true, //开启透明
  opacity: 0.6, //设置透明度
});

// 4、将长方体放在：网格模型Mesh，并设置位置
for (let i = 0; i < 2; i++) {
  for (let j = 0; i < 2; j++) {
    const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    mesh.position.set(50 * i, 0, 50 * j); //物体放置位置状态,如果不设置，默认（0，0，0）

    scene.add(mesh);
  }
}

/**
 * 点光源
 */
//点光源：两个参数分别表示光源颜色和光照强度
// 参数1：0xffffff是纯白光,表示光源颜色
// 参数2：1.0,表示光照强度，可以根据需要调整
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(150, 100, 50); //点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中

/**
 * 点光源辅助观察
 */
//  const pointLightHelper = new THREE.PointLightHelper( pointLight, 10 );//辅助大小
//  scene.add( pointLightHelper );

/**
 * 平行光
 */
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(-200, 0, 0);//点光源放在x轴上
// directionalLight.target = mesh;
// scene.add(directionalLight);

/**
 * 平行光辅助观察
 */
// const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 5 );
// scene.add( directionalLightHelper );

/**
 * 环境光
 */
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

/**
 * 透视投影相机设置P
 */
// 实例化一个透视投影相机对象
// 定义相机输出画布的尺寸(单位:像素px)：照片大小
const width = window.innerWidth; //窗口文档显示区的宽度作为画布宽度
const height = window.innerHeight; //窗口文档显示区的高度作为画布高度
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 8000);
camera.position.set(200, 200, 200);
// camera.position.set(-1000, 0, 0);
// 拍照目标

// camera.lookAt(mesh.position); //指向mesh对应的位置
camera.lookAt(0, 0, 0);
// camera.lookAt(1000, 0, 1000);

/**
 * 渲染器
 */
// 相当于拍照，咔嚓一下
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
// 定义threejs输出画布的尺寸(单位:像素px)
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作
document.body.appendChild(renderer.domElement);

/**
 * 设置相机轨道控制器（OrbitControls）
 */
// 1、相机的位置在动
// 2、相机拍照场景中模型的角度
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera);
});

function render() {
  renderer.render(scene, camera); //执行渲染操作
  mesh.rotateX(0.01); //每次绕y轴旋转0.01弧度
  mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
  requestAnimationFrame(render);
}

// render();

// onresize 事件会在窗口被调整大小时发生
window.onresize = function () {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect(window.innerWidth / window.innerHeight);
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
};
