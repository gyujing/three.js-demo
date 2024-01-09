import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(250, 250); 
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,//0xff0000设置材质颜色为红色
    side: THREE.DoubleSide
}); 
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

const geometry2 = new THREE.PlaneGeometry(300, 300); 
const material2 = new THREE.MeshLambertMaterial({
    color: 0xff6666,//0xff0000设置材质颜色为红色
    side: THREE.DoubleSide
}); 
const mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh

// mesh2.position.z = 0.1;
mesh2.position.z = 0.01; //间隙很小，又出现深度冲突
// mesh2.position.z = 0.000001; //间隙很小，又出现深度冲突

const group = new THREE.Group();
group.add( mesh,mesh2 );

export default group;
