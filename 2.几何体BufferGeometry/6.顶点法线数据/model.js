import * as THREE from "three";
//创建一个空的几何体对象
const geometry = new THREE.BufferGeometry();

//类型化数组创建顶点数据
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标，索引0

  0,
  100,
  0, //顶点2坐标，索引1

  0,
  0,
  100, //顶点3坐标，索引2

  0,
  0,
  100, //顶点4坐标

  0,
  100,
  0, //顶点5坐标

  0,
  100,
  100, //顶点6坐标，索引3
]);

// 创建属性缓冲区对象
// 3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = new THREE.BufferAttribute(vertices, 3);

// Uint16Array类型数组创建顶点索引数据
const indexes = new Uint16Array([
  // 下面索引值对应顶点位置数据中的顶点坐标
  0, 1, 2, 1, 2, 3,
]);

// 索引数据赋值给几何体的index属性，属性缓冲区
// geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组

const normals = new Float32Array([
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
]); //顶点1法线( 法向量 )

geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);
// 点渲染模式
// MeshLambertMaterial
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  //   side: THREE.BackSide,//背面可见
  side: THREE.DoubleSide, //双面可见
});

const mesh = new THREE.Mesh(geometry, material); //点模型对象

export default mesh;
