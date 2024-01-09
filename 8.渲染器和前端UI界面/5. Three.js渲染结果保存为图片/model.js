import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(100, 100, 100); 

const material = new THREE.MeshLambertMaterial({
    color: 0xFFB6C1,//0xff0000设置材质颜色为红色
}); 

// console.log(material);
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh


export default mesh;
