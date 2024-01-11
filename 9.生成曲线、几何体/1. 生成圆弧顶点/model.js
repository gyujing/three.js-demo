import * as THREE from "three";

// 1、几何体
const geometry = new THREE.BufferGeometry(); //创建一个几何体对象

const R = 100; //圆弧半径
const N = 50; //分段数量
const sp = 2 * Math.PI / N;//两个相邻点间隔弧度
// 设置圆心坐标
const cx = 20;
const cy = 10;

// 批量生成圆弧上的顶点数据
const arr = [];
for (let i = 0; i < N; i++) {
  const angle = sp * i;//当前点弧度
  // 以坐标原点为中心，在XOY平面上生成圆弧上的顶点数据
  const x = cx + R * Math.cos(angle);
  const y = cy + R * Math.sin(angle);
  arr.push(x, y, 0);
  // arr.push( new THREE.Vector3(x,y,100))
}

const vertices = new Float32Array(arr);
const attribute = new THREE.BufferAttribute(vertices,3)
geometry.setAttribute( 'position', attribute );
console.log(geometry.attributes.position);
// geometry.setFromPoints(arr);

// 2、材质
const material = new THREE.LineBasicMaterial({
  color:0xff0000,
})

// 3、模型
const line = new THREE.LineLoop(geometry, material);

export default line;
