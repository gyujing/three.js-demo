import * as THREE from "three";

/**
 * 精灵模型
 */
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load("./光点.png");

const material = new THREE.SpriteMaterial({
  // color: 0x00ffff, //设置颜色
  map: texture, //贴图
  transparent: true,
});

const sprite = new THREE.Sprite(material);
// 位置 +10/2，精彩模型大小的一半
sprite.position.set(0, 50 + 10 / 2, 0);
// 控制精灵大小
sprite.scale.set(10, 10, 1); //只需要设置x、y两个分量就可以

/**
 * 长方体模型
 */
const geomertry = new THREE.BoxGeometry(30, 50, 30);

const material2 = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const model = new THREE.Mesh(geomertry, material2);

model.translateY(25);

const group = new THREE.Group();
group.add(sprite);
group.add(model);

export default group;
