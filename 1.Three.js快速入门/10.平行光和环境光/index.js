import * as THREE from 'three';
import { OrbitControls  } from 'three/addons/controls/OrbitControls.js';
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
const axesHelper = new THREE.AxesHelper( 150 );
scene.add( axesHelper );


// 2、创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100); 

// 3、创建一个材质对象Material，
// 漫反射网格材质MeshLambertMaterial 会受到光照影响
const material = new THREE.MeshLambertMaterial({
    color: 0x00FF00,//0xff0000设置材质颜色为红色
    transparent:true,//开启透明
    opacity:0.6,//设置透明度
}); 

// 4、将长方体放在：网格模型Mesh，并设置位置
// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
// mesh.position.set(50, 10, 0);//物体放置位置状态,如果不设置，默认（0，0，0）

// 5、网格模型mesh添加到三维场景scene中
scene.add(mesh)

/**
 * 点光源
 */
//点光源：两个参数分别表示光源颜色和光照强度
// 参数1：0xffffff是纯白光,表示光源颜色
// 参数2：1.0,表示光照强度，可以根据需要调整
const pointLight = new THREE.PointLight(0xffffff, 1.0);
//点光源位置
pointLight.position.set(200, 0, 200);//点光源放在x轴上
// 光源添加到场景
// scene.add(pointLight); //点光源添加到场景中

/**
 * 点光源辅助观察
 */
//  const pointLightHelper = new THREE.PointLightHelper( pointLight, 10 );//辅助大小
//  scene.add( pointLightHelper );

/**
 * 平行光
 */
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
// directionalLight.position.set(-200, 0, 0);//点光源放在x轴上
// 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
directionalLight.target = mesh;
scene.add(directionalLight);

/**
 * 平行光辅助观察
 */
const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 5 );
scene.add( directionalLightHelper );

/**
 * 环境光
 */
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );





/**
 * 透视投影相机设置P
 */
// 实例化一个透视投影相机对象
// 定义相机输出画布的尺寸(单位:像素px)：照片大小
const width = 800; //宽度
const height = 500; //高度
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
// 相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值，相机位置xyz坐标：200, 200, 200
camera.position.set(200, 200, 200); 
// camera.position.set(-1000, 0, 0);
// 拍照目标

camera.lookAt(mesh.position);//指向mesh对应的位置
// camera.lookAt(-2000, 0, 0);


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
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener("change", function () {
    // 鼠标动了，就拍照
    renderer.render(scene, camera)
})