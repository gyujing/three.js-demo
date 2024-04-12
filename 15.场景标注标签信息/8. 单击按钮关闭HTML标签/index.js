import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 引入CSS2渲染器CSS2DRenderer
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
// 伽马校正后处理Shader
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js';
// ShaderPass功能：使用后处理Shader创建后处理通道
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
// SMAA抗锯齿通道
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';

import model from './model.js'; //模型对象
import tag from './tag.js'; //模型对象

//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中


//辅助观察的坐标系
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
camera.position.set(82, 53, 165);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
// renderer.outputEncoding = THREE.sRGBEncoding;

// 后处理
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const v2 = new THREE.Vector2(width, height);
const outlinePass = new OutlinePass(v2, scene, camera);
outlinePass.visibleEdgeColor.set(0x00ffff);
outlinePass.edgeThickness = 4;
outlinePass.edgeStrength = 6;
composer.addPass(outlinePass);

// 创建伽马校正通道
const gammaPass = new ShaderPass(GammaCorrectionShader);
composer.addPass(gammaPass);
const pixelRatio = renderer.getPixelRatio();
// 创建SMAAPass抗锯齿通道
// width、height是canva画布的宽高度
const smaaPass = new SMAAPass(width * pixelRatio, height * pixelRatio);
composer.addPass(smaaPass);


// 创建一个CSS2渲染器CSS2DRenderer
const css2Renderer = new CSS2DRenderer();
css2Renderer.setSize(width, height);
// HTML标签<div id="tag"></div>外面父元素叠加到canvas画布上且重合
css2Renderer.domElement.style.position = 'absolute';
css2Renderer.domElement.style.top = '0px';//具体值根据canvas画布位置来定
//设置.pointerEvents=none，解决HTML元素标签对threejs canvas画布鼠标事件的遮挡
css2Renderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(css2Renderer.domElement);




// 渲染循环
function render() {
    css2Renderer.render(scene, camera);
    // renderer.render(scene, camera);
    composer.render();
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);


// 画布跟随窗口变化
window.onresize = function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // cnavas画布宽高度重新设置
    renderer.setSize(width, height);
    // HTML标签css2Renderer.domElement尺寸重新设置
    css2Renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};

let chooseObj = null;
const span = document.getElementById('name');
addEventListener('click', function (event) {
    const px = event.offsetX;
    const py = event.offsetY;
    const x = (px / window.innerWidth) * 2 - 1;
    const y = -(py / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();

    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
    const cunchu = model.getObjectByName("存储罐");
    // console.log(cunchu);
    for (let i = 0; i < cunchu.children.length; i++) {
        let group = cunchu.children[i];
        group.traverse((obj) => {
            if (obj.isMesh) {
                obj.ancestors = group;
            }
        })
    }

    const intersects = raycaster.intersectObjects(cunchu.children);
    // intersects.length大于0说明，说明选中了模型
    if (intersects.length > 0) {
        console.log("射线射中");
        console.log(intersects[0].object.ancestors);
        // 选中高亮描边
        outlinePass.selectedObjects = [intersects[0].object.ancestors];
        intersects[0].object.ancestors.add(tag);
        chooseObj = intersects[0].object.ancestors;

        span.innerHTML = intersects[0].object.ancestors.name;//修改标签数据
    } else {
        console.log("射线没有射中");
        // if (chooseObj) {
        //     outlinePass.selectedObjects = [];
        //     chooseObj.remove(tag);
        // }
    }
})


document.getElementById("delete").addEventListener("click",()=>{
    console.log("关闭");
    if (chooseObj) {
        outlinePass.selectedObjects = [];
        chooseObj.remove(tag);
    }
})
