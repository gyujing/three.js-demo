// 引入three.js
import * as THREE from "../three.js-r150/build/three.module.js";
// pointsArrs：一个行政区包含一个或多个轮廓，一个轮廓对应pointsArrs的一个元素
function createExtrude(pointsArrs, height) {
  var shapeArr = []; //轮廓形状Shape集合
  pointsArrs.forEach((pointsArr) => {
    var vector2Arr = [];
    // 转化为Vector2构成的顶点数组
    pointsArr[0].forEach((elem) => {
      vector2Arr.push(new THREE.Vector2(elem[0], elem[1]));
    });
    var shape = new THREE.Shape(vector2Arr);
    shapeArr.push(shape);
  });
  var material = new THREE.MeshLambertMaterial({
    color: 0x004444,
    // side: THREE.DoubleSide, //两面可见
  }); //材质对象
  // var geometry = new THREE.ShapeGeometry(shapeArr);
  const geometry = new THREE.ExtrudeBufferGeometry(
    shapeArr, //二维轮廓
    {
      depth: height, //拉伸长度
      bevelEnabled: false, //禁止倒角,默认true
      //   bevelThickness: 5, //倒角尺寸:拉伸方向，改变拉伸宽度
      //   bevelSize: 5, //倒角尺寸:垂直拉伸方向，改变高度
      //   bevelSegments: 20, //倒圆角：倒角细分精度，默认3
    }
  );
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象
  return mesh;
}
export { createExtrude };
