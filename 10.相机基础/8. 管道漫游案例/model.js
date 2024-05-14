import * as THREE from "three";

// 三维样条曲线
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-50, 20, 90),
  new THREE.Vector3(-10, 40, 40),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(60, -60, 0),
  new THREE.Vector3(70, 0, 80),
]);

// path:路径   40：沿着轨迹细分数  6：管道半径   25：管道截面圆细分数
const geometry = new THREE.TubeGeometry(path, 40, 6, 25);

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load("./diffuse.jpg");

//UV坐标U方向阵列模式
texture.wrapS = THREE.RepeatWrapping;
//纹理沿着管道方向阵列(UV坐标U方向)
texture.repeat.x = 10;
const material = new THREE.MeshLambertMaterial({
  // 设置纹理贴图：Texture对象作为材质map属性的属性值
  map: texture, //map表示材质的颜色贴图属性
  side: THREE.DoubleSide,
});

// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

// 从曲线上等间距获取一定数量点坐标
const pointsArr = path.getSpacedPoints(500);
console.log(pointsArr);

export { mesh, pointsArr };
