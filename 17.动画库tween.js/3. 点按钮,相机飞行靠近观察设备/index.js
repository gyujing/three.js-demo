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

document.getElementById("A").addEventListener("click", function () {
  const A = model.getObjectByName('设备A标注');
  const pos = new THREE.Vector3();
  A.getWorldPosition(pos);
  console.log(pos);
  const pos2 = pos.clone().addScalar(30);//向量的x、y、z坐标分别在pos基础上增加30
  new TWEEN.Tween({
    // 相机开始坐标
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    // 相机开始指向的目标观察点
    tx: controls.target.x,
    ty: controls.target.y,
    tz: controls.target.z,
  })
    .onUpdate(function (obj) {
      // 动态改变相机位置
      camera.position.set(obj.x, obj.y, obj.z);
      // 动态计算相机视线
      camera.lookAt(obj.tx, obj.ty, obj.tz);
    })
    .to({
      // 相机结束坐标
      x: pos2.x,
      y: pos2.y,
      z: pos2.z,
      // 相机结束指向的目标观察点
      tx: pos.x,
      ty: pos.y,
      tz: pos.z,
    }, 2000)
    .start();
})


document.getElementById("B").addEventListener("click", function () {
  const A = model.getObjectByName('设备B标注');
  const pos = new THREE.Vector3();
  A.getWorldPosition(pos);
  console.log(pos);
  const pos2 = pos.clone().addScalar(30);//向量的x、y、z坐标分别在pos基础上增加30

    createCameraTween(pos2, pos)
})
console.log(model);

document.getElementById("car").addEventListener("click", function () {

  const A = model.getObjectByName('大货车1');
  const pos = new THREE.Vector3();
  A.getWorldPosition(pos);
  console.log(pos);
  const pos2 = pos.clone().addScalar(30);//向量的x、y、z坐标分别在pos基础上增加30

  createCameraTween(pos2, pos)
})

document.getElementById("all").addEventListener("click", function () {
  let cameraPos = {
    x: 202,
    y: 123,
    z: 125,
  };
  let target = {
    x: 0,
    y: 0,
    z: 0,
  }
  createCameraTween(cameraPos, target)
})


function createCameraTween(endPos, endTarget) {
  new TWEEN.Tween({
    // 相机开始坐标
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    // 相机开始指向的目标观察点
    tx: controls.target.x,
    ty: controls.target.y,
    tz: controls.target.z,
  })
    .onUpdate(function (obj) {
      // 动态改变相机位置
      camera.position.set(obj.x, obj.y, obj.z);
      // 动态计算相机视线
      camera.lookAt(obj.tx, obj.ty, obj.tz);
    })
    .to({
      // 相机结束坐标
      x: endPos.x,
      y: endPos.y,
      z: endPos.z,
      // 相机结束指向的目标观察点
      tx: endTarget.x,
      ty: endTarget.y,
      tz: endTarget.z,
    }, 2000)
    .start();

}
