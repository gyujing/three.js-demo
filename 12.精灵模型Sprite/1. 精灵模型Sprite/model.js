import * as THREE from "three";

const material = new THREE.SpriteMaterial({
  color: 0x00ffff, //设置颜色
});

const sprite = new THREE.Sprite(material);

console.log(sprite);

// 设置精灵模型在三维空间中的位置坐标
sprite.position.set(0, 50, 0);
// 控制精灵大小
sprite.scale.set(50, 25, 1); //只需要设置x、y两个分量就可以

export default sprite;
