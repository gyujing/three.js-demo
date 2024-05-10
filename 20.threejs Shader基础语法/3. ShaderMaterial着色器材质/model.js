import * as THREE from 'three';


const geometry = new THREE.PlaneGeometry(100, 50);

const vertexShader = `
    void main(){
        //投影矩阵 * 视图矩阵 * 模型矩阵 * 顶点位置
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position,1.0);
    }
`
    ;
const fragmentShader = `
    void main(){
        gl_FragColor = vec4(0.0,1.0,1.0,1.0);
    }
`

const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 100;

export default mesh;
