import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(100, 100);

// const geometry = new THREE.BoxGeometry(100, 100, 100); //长方体

// const geometry = new THREE.SphereGeometry(60, 25, 25); //球体

console.log('uv', geometry.attributes.uv);


/**纹理坐标0~1之间随意定义*/
const uvs = new Float32Array([
  0, 0.5,
  0.5, 0.5,
  0, 0,
  0.5, 0
]);


// 设置几何体attributes属性的位置normal属性
geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2); //2个为一组,表示一个顶点的纹理坐标

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('./1.jpg');
const material = new THREE.MeshLambertMaterial({
  //  color: 0xDC143C, //红色
  // 设置纹理贴图：Texture对象作为材质map属性的属性值
  map: texture,//map表示材质的颜色贴图属性
});




// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
