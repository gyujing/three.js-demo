import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 80);

const vertexShader = `
    void main(){
        //投影矩阵 * 视图矩阵 * 模型矩阵 * 顶点位置
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position,1.0);
    }
`;

// 左右颜色区分
// const fragmentShader = `
//     void main(){
//         if(gl_FragCoord.x < 400.0){
//             gl_FragColor = vec4(0.0,1.0,1.0,1.0);
//         }else{
//             gl_FragColor = vec4(1.0,1.0,1.0,1.0);
//         }
//     }
// `;

// 上下颜色区分
// const fragmentShader = `
//     void main(){
//         if(gl_FragCoord.y < 300.0){
//             gl_FragColor = vec4(0.0,1.0,1.0,1.0);
//         }else{
//             gl_FragColor = vec4(1.0,1.0,1.0,1.0);
//         }
//     }
// `;

// // 渐变色
// const fragmentShader = `
//     void main(){
//         gl_FragColor = vec4(gl_FragCoord.x/800.0 * 1.0,0.0,0.0,1.0);
//     }
// `;

const fragmentShader = `
    void main(){
        if(gl_FragCoord.x < 400.0){
            gl_FragColor = vec4(0.0,1.0,1.0,1.0);
        }else{
            discard;//不符合条件片元直接舍弃掉
        }
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
