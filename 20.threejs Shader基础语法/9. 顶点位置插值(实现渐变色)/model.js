import * as THREE from 'three';


const geometry = new THREE.PlaneGeometry(100, 50);

console.log("顶点数据：", geometry.attributes.position);
// 顶点着色器代码
const vertexShader = `
varying vec3 pos;
void main(){
  pos = vec3(modelMatrix * vec4(position,1.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

// // 片元着色器代码
// const fragmentShader = `
// varying vec3 pos;
// void main() {
//   if(pos.y >0.0){
//     gl_FragColor = vec4(1.0,0.0,0.0,1.0);
//   }else{
//     gl_FragColor = vec4(0.0,1.0,0.0,1.0);
//   }
// }
// `;

// 片元着色器代码
const fragmentShader = `
varying vec3 pos;
void main() {
  float per = (pos.y + 25.0)/50.0;
  gl_FragColor = vec4(per,1.0-per,0.0,1.0);
}
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,// 顶点着色器
  fragmentShader: fragmentShader,// 片元着色器
});

const mesh = new THREE.Mesh(geometry, material);

// mesh.position.y += 25;

export default mesh;
