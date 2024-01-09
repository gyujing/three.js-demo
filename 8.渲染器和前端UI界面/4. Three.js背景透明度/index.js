import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'

/**
 * 3D场景
 */
const scene = new THREE.Scene();
scene.add(model)

/**
 * 光:平行光 + 环境光
 */
const light = new THREE.DirectionalLight(0xFFFFFF);
light.position.set(100, 150, 120)
scene.add(light);
const alight = new THREE.AmbientLight(0x404040); // 柔和的白光
scene.add(alight);

/**
 * 透视投影相机设置
 */
const width = window.innerWidth; //宽度
const height = window.innerHeight - 60; //高度
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
camera.position.set(200, 200, 200);
camera.lookAt(model.position);//指向mesh对应的位置


/**
 * 渲染器
 */
const renderer = new THREE.WebGLRenderer({
    // 抗锯齿
    antialias:true,
    // 透明度
    alpha:true,
});
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
document.body.appendChild(renderer.domElement);
// renderer.setClearAlpha(0.1);
// renderer.setClearColor(0x000000,0.3);

// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

/**
 * 设置相机轨道控制器（OrbitControls）
 */
const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
    const width = window.innerWidth; //宽度
    const height = window.innerHeight - 60; //高度
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};
