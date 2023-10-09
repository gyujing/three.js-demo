import * as THREE from "three";

// 4）、矩形平面
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 3、创建一个材质对象Material，
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.8,
});

// material.color.r = 1;
// material.color.setRGB(1, 0, 1);
// material.color.setHex(0x00ff00);
// material.color.setStyle("#00ff00");

material.color.set(0x00ff00); //十六进制方式设置颜色
material.color.set("#00ff00"); //前端CSS颜色值设置颜色

console.log(material.color);

// 4、网格模型Mesh
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

export default mesh;
