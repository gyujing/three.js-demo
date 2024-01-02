import * as THREE from "three";

// const geometry = new THREE.PlaneGeometry(200, 100); 

// const geometry = new THREE.BoxGeometry(100, 100, 100); //长方体

const geometry = new THREE.SphereGeometry(60, 25, 25); //球体

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('./earth.jpg');
const material = new THREE.MeshLambertMaterial({
  //  color: 0xDC143C, //红色
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture,//map表示材质的颜色贴图属性
});


// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
