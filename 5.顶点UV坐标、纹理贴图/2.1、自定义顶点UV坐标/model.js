import * as THREE from "three";
//创建一个空的几何体对象
const geometry = new THREE.BufferGeometry();

//类型化数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0, // 0
  160, 0, 0, //1
  160, 80, 0, //2
  0, 80, 0,  //3
]);

// Uint16Array类型数组创建顶点索引数据
const indexes = new Uint16Array([
  // 下面索引值对应顶点位置数据中的顶点坐标
  0, 1, 2, 0, 2, 3,
]);

geometry.attributes.position = new THREE.BufferAttribute(vertices, 3);;
geometry.index = new THREE.BufferAttribute(indexes, 1); 
console.log('uv', geometry.attributes.uv);

const uvs = new Float32Array([
  0, 0,  // 0
  1, 0, //1
  1, 1,  //2
  0, 1,   //3
]);


// 设置几何体attributes属性的位置normal属性
geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2); //2个为一组,表示一个顶点的纹理坐标
console.log('uv', geometry.attributes.uv);

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('./1.jpg');
const material = new THREE.MeshBasicMaterial({
  // 设置纹理贴图：Texture对象作为材质map属性的属性值
  map: texture,//map表示材质的颜色贴图属性
});


const mesh = new THREE.Mesh(geometry, material); //点模型对象

export default mesh;
