import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// 创建GLTF加载器对象
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("../../工厂.glb", function (gltf) {
  console.log("控制台查看加载gltf文件返回的对象结构", gltf);
  console.log("gltf对象场景属性", gltf.scene);
  model.add(gltf.scene);
});

/**
 * 精灵模型
 */
const group = new THREE.Group();

const texLoader = new THREE.TextureLoader();
const texture = texLoader.load("./雨滴.png");

const material = new THREE.SpriteMaterial({
  // color: 0x00ffff, //设置颜色
  map: texture, //贴图
  transparent: true,
});

for (let i = 0; i < 2000; i++) {
  const sprite = new THREE.Sprite(material);
  sprite.position.x = 1000 * (Math.random() - 0.5);
  sprite.position.y = 600 * Math.random();
  sprite.position.z = 1000 * (Math.random() - 0.5);
  // 控制精灵大小
  sprite.scale.set(1, 1, 1); //只需要设置x、y两个分量就可以

  group.add(sprite);
}
model.add(group);

function loop() {
  console.log(group.children);
  group.children.forEach((sprite) => {
    sprite.position.y -= 1;
    if (sprite.position.y <= 0) {
      sprite.position.y = 600;
    }
  });
  requestAnimationFrame(loop);
}

loop();

export default model;t'h'r'r
