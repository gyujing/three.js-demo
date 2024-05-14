import * as THREE from 'three';


const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    25, 0, 0, //顶点2坐标
    50, 0, 0, //顶点3坐标
    75, 0, 0, //顶点4坐标
    100, 0, 0, //顶点5坐标
])

// 设置几何体顶点位置.attributes.position
geometry.attributes.position = new THREE.BufferAttribute(vertices, 3);//3个为一组，表示一个顶点的xyz坐标;


/**
 * 点的大小：size
 */
const sizes = new Float32Array([
    1.0,
    0.8,
    0.6,
    0.4,
    0.2
])
geometry.attributes.size = new THREE.BufferAttribute(sizes, 1);;


const vertexShader = `
    attribute float size;
    void main(){
        gl_PointSize = 20.0 * size; //float
        //投影矩阵 * 模型视图矩阵 * 顶点位置
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;


const fragmentShader = `
    void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }
`


const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});


const mesh = new THREE.Points(geometry, material);
// 
export default mesh;
