import * as THREE from "three";

const geometry = new THREE.BufferGeometry(); //创建一个几何体对象
const vertices = new Float32Array([
  //类型数组创建顶点数据
  -25,
  0,
  0, //顶点1坐标
  25,
  0,
  0, //顶点2坐标
  0,
  40,
  0, //顶点3坐标
]);
// 设置几何体attributes属性的位置属性.position
geometry.attributes.position = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标

const colors = new Float32Array([
  //类型数组创建顶点数据
  1, 0, 0, 0, 1, 0, 0, 0, 1,
]);
geometry.attributes.color = new THREE.BufferAttribute(colors, 3);

// 顶点着色器代码
const vertexShader = `
varying vec3 vColor;
void main(){
    vColor = color;
  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;
// 片元着色器代码
const fragmentShader = `
varying vec3 vColor;
void main() {
    gl_FragColor = vec4(vColor,1.0);
}
`;
const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader, // 顶点着色器
  fragmentShader: fragmentShader, // 片元着色器
  vertexColors: true, //允许设置使用顶点颜色渲染
});
const mesh = new THREE.Mesh(geometry, material);
export default mesh;
