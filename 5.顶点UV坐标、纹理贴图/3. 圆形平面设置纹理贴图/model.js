import * as THREE from "three";

const geometry = new THREE.CircleGeometry(60, 100);


console.log('uv', geometry.attributes.uv);


// const uvs = new Float32Array([
//   0, 0.5,
//   0.5, 0.5,
//   0, 0,
//   0.5, 0
// ]);


// // 设置几何体attributes属性的位置normal属性
// geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2); //2个为一组,表示一个顶点的纹理坐标

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('./1.jpg');
const material = new THREE.MeshBasicMaterial({
  map: texture,//map表示材质的颜色贴图属性
  side:THREE.DoubleSide,
});


// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
