import * as THREE from 'three';


const geometry = new THREE.BufferGeometry();

const vertices  = new Float32Array([
     // 三角形1顶点坐标
  -50, -25, 0, //顶点1坐标
  50, -25, 0, //顶点2坐标
  50, 25, 0, //顶点3坐标
  // 三角形2顶点坐标
  -50, -25, 0, //顶点4坐标   和顶点1位置相同
  50, 25, 0, //顶点5坐标  和顶点3位置相同
  -50, 25, 0, //顶点6坐标
])

const attribute  = new THREE.BufferAttribute(vertices,3);//3个为一组，表示一个顶点的xyz坐标
// 设置几何体顶点位置.attributes.position
geometry.attributes.position  = attribute;

const vertexShader = `
    void main(){
        //投影矩阵 * 模型视图矩阵 * 顶点位置
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`
    ;
const fragmentShader = `
    uniform float opacity; //声明uniform变量
    uniform vec3 color; //声明uniform变量
    void main(){
        gl_FragColor = vec4(color,opacity);
    }
`

const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide, //双面可是
    transparent: true,
    uniforms: {
        opacity: {
            value: 0.5
        },
        color: {
            // value: new THREE.Vector3(0.0,1.0,1.0)
            value: new THREE.Color(0x0000ff)
        }
    }
});

material.uniforms.color.value = new THREE.Color(0xff00ff)

const mesh = new THREE.Mesh(geometry, material);
// 
export default mesh;
