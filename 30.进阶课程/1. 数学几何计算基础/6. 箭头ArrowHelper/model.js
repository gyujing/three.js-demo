import * as THREE from 'three';

/**
 * 创建两个小球
 */
const A = new THREE.Vector3(0, 30, 0);//A点
const B = new THREE.Vector3(80, 0, 0);//B点

const AMesh = createcreateSphereMesh(0x00ff00, 2);
AMesh.position.copy(A);

const BMesh = createcreateSphereMesh(0xff0000, 2);
BMesh.position.copy(B);


function createcreateSphereMesh(color, R) {
    const geometry = new THREE.SphereGeometry(R);
    const material = new THREE.MeshLambertMaterial({
        color: color
    })
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

const group = new THREE.Group();
group.add(AMesh, BMesh);

/**
 * 箭头： A指向B
 */
const AB = B.clone().sub(A);
const length = AB.length();//长度
const dir = AB.clone().normalize();//单位向量
const arrowHelper = new THREE.ArrowHelper(dir, A, length, 0xffff00)
group.add(arrowHelper);

export default group;
