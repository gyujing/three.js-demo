import * as THREE from "three";

// 1、几何体
const geometry = new THREE.BufferGeometry(); //创建一个几何体对象

const pointsArr = [
  // 三维向量Vector3表示的坐标值
  new THREE.Vector3(0,0,0),
  new THREE.Vector3(0,100,0),
  new THREE.Vector3(0,100,100),
  new THREE.Vector3(0,0,100),
];

// 把数组pointsArr里面的坐标数据提取出来，赋值给`geometry.attributes.position`属性
geometry.setFromPoints(pointsArr);
console.log('几何体变化',geometry.attributes.position);

// 2、材质
const material = new THREE.PointsMaterial({
  color:0xff0000,
  size: 10.0, //点对象像素尺寸
})

// 3、模型
const points = new THREE.Points(geometry, material);

export default points;
