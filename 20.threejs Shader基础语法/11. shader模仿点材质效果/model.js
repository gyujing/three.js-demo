import * as THREE from 'three';


const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    25, 0, 0, //顶点2坐标
    50, 0, 0, //顶点3坐标
    75, 0, 0, //顶点4坐标
    100, 0, 0, //顶点5坐标
])

const attribute = new THREE.BufferAttribute(vertices, 3);//3个为一组，表示一个顶点的xyz坐标
// 设置几何体顶点位置.attributes.position
geometry.attributes.position = attribute;

const vertexShader = `
    void main(){
        gl_PointSize = 20.0; //float
        //投影矩阵 * 模型视图矩阵 * 顶点位置
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`
    ;

/**
 * Points可以渲染多个方形点，每个方形点的gl_PointCoord坐标原点都位于自身的左上角，x轴水平向右，y轴水平向下，
 * 不管gl_PointSize多大，Points方形点右下角gl_PointCoord坐标都是(1.0,1.0)。
 */
const fragmentShader = `
    void main(){
        //gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        if(gl_PointCoord.x<0.5 && gl_PointCoord.y<0.5){
            gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        }else{
            gl_FragColor = vec4(0.0,0.0,1.0,1.0);
        }
    }
`

/**
 * distance()是着色器语言GLSL ES内置函数，用来计算两个向量之间的距离。
 * distance(gl_PointCoord, vec2(0.5, 0.5));表示方形点里面每个片元的gl_PointCoord坐标与坐标(0.5,0.5)的距离r。
 * 以这个距离距离r作为临界值，每个方形点的所有片元凡是距离中心vec2(0.5, 0.5)的距离大于r，都舍弃，就会生成一个圆形的点。
 */
// // 片元着色器代码
// const fragmentShader = `
// void main() {
//   // vec2(0.5, 0.5)是方形点的圆心
//   float r = distance(gl_PointCoord, vec2(0.5, 0.5));
//   if(r < 0.5){
//     // 方形区域片元距离几何中心半径小于0.5，像素颜色设置红色
//     gl_FragColor = vec4(0.0,1.0,1.0,1.0);
//   }else {
//     // 方形区域距离几何中心半径不小于0.5的片元剪裁舍弃掉：
//     discard;
//   }
// }
// `

const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});


const mesh = new THREE.Points(geometry, material);
// 
export default mesh;
