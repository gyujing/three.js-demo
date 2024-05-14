import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import mesh from './model.js'; //模型对象

//场景
const scene = new THREE.Scene();
scene.add(mesh); //模型对象添加到场景中


//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
// 添加一个辅助网格地面
const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
scene.add(gridHelper);


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
camera.position.set(-18, 223, 342);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


// //物体初始速度
// const v = new THREE.Vector3(30, 0, 0);
// //重力加速度
// const g = new THREE.Vector3(0, -9.8, 0);
// const clock = new THREE.Clock();
// const pos0 = mesh.position.clone();
// let t = 0;
// 速度 x 间隔时间，然后累加计算位移
// function render() {
//     const tt = clock.getDelta();
//     t += tt;
//     const dis = v.clone().multiplyScalar(t).add(g.clone().multiplyScalar(0.5 * t * t));
//     const newPos = pos0.clone().add(dis)
//     if (mesh.position.y >= 0) {
//         mesh.position.copy(newPos)
//     }

//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }


/**
 * 累加
 */
//物体初始速度
const v = new THREE.Vector3(30, 0, 0);
//重力加速度
const g = new THREE.Vector3(0, -9.8, 0);
const clock = new THREE.Clock();
function render() {
    const tt = clock.getDelta();
    //mY:重力加速度在时间tt内对速度的改变
    const mY = g.clone().multiplyScalar(tt);
    v.add(mY);//更新当前速度
    // 在tt时间内，以速度v运动的位移量
    const dis = v.clone().multiplyScalar(tt);

    if (mesh.position.y >= 0) {
        mesh.position.add(dis)
    }

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
