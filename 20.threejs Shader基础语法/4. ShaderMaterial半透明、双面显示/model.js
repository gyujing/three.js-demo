import * as THREE from 'three';


const geometry = new THREE.PlaneGeometry(100, 50);

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
