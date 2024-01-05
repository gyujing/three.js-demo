import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 40);

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./1.jpg');

const material = new THREE.MeshLambertMaterial({
  map: texture,//map表示材质的颜色贴图属性
});



texture.offset.x += 0.5;//纹理U方向偏移
// 设置.wrapS也就是U方向，纹理映射模式(包裹模式)
texture.wrapS = THREE.RepeatWrapping;//对应offste.x偏移


// texture.offset.y +=0.5;//纹理V方向偏移
// texture.wrapT = THREE.RepeatWrapping;//对应offste.x偏移

// 网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

mesh.rotateX(-Math.PI/2);

export {mesh,texture};
