import * as THREE from 'three';



const geometry = new THREE.BoxGeometry(40, 100, 40); //球体

const material = new THREE.MeshLambertMaterial({
  color: 0x008A8A,
});

let mesh = new THREE.Mesh(geometry, material);

mesh.position.y = 50;

material.onBeforeCompile = function (shader) {
  // console.log('vertexShader', shader.vertexShader);
  shader.vertexShader = shader.vertexShader.replace(
    'void main() {',
    `varying vec3 vPos;
     void main() {
       vPos = vec3(modelMatrix * vec4(position,1.0));
    `
  );
  console.log('fragmentShader', shader.fragmentShader);
  shader.fragmentShader = shader.fragmentShader.replace(
    'void main() {',
    
    `varying vec3 vPos;
     uniform float y;
     void main() {
      `
  )
  // 颜色在最后替换，以防被覆盖
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',

    `#include <dithering_fragment>
    // y随着时间改变光带位置也会改变
     if(vPos.y > y && vPos.y < (y+1.0)){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
     }
      `
  )

  shader.uniforms.y = { value: 0.0 };

  console.log("11");
  mesh.shader = shader;
}


console.log("mesh.shader", mesh.shader);
export default mesh;
