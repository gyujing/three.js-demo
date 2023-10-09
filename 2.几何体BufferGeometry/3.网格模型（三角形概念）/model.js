import * as THREE from "three";
//创建一个空的几何体对象
const geometry = new THREE.BufferGeometry();

//类型化数组创建顶点数据
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  90,
  10,
  0, //顶点2坐标
  0,
  50,
  0, //顶点3坐标
  0,
  0,
  10, //顶点4坐标
  0,
  0,
  100, //顶点5坐标
  50,
  0,
  10, //顶点6坐标
]);

// 创建属性缓冲区对象
// 3个为一组，表示一个顶点的xyz坐标
const attribue = new THREE.BufferAttribute(vertices, 3); //2 x,y z默认0
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;
// 点渲染模式
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  //   side: THREE.BackSide,//背面可见
  side: THREE.DoubleSide, //双面可见
});

const mesh = new THREE.Mesh(geometry, material); //点模型对象

export default mesh;
