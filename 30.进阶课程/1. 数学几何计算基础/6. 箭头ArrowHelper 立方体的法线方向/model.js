import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);


const P = mesh.geometry.attributes.position;
console.log(mesh.geometry.attributes);
const N = mesh.geometry.attributes.normal;
const count = P.count;//顶点数量
for (let i = 0; i < count; i++) {
    // 顶点位置O
    const o = new THREE.Vector3(P.getX(i), P.getY(i), P.getZ(i));
    // 顶点位置O对应的顶点法线
    const dir = new THREE.Vector3(N.getX(i), N.getY(i), N.getZ(i));
      // 箭头可视化顶点法线
    const arrowHelper = new THREE.ArrowHelper(dir, o, 20)
    mesh.add(arrowHelper)
}

export default mesh;
