import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 200);

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./瓷砖.jpg');
// 设置阵列模式
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 12, 12 );

const material = new THREE.MeshLambertMaterial({
  map: texture,//map表示材质的颜色贴图属性
});


// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

mesh.rotateX(-Math.PI/2);

export default mesh;
