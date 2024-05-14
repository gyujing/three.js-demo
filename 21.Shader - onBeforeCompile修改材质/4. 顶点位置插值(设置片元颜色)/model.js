import * as THREE from 'three';



const geometry = new THREE.BoxGeometry(40, 100,40); //球体

const material = new THREE.MeshLambertMaterial({
  color: 0x008A8A
});

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
     void main() {
      `
  )
  // // 颜色在最后替换，以防被覆盖
  // shader.fragmentShader = shader.fragmentShader.replace(
  //   '#include <dithering_fragment>',
  //   `#include <dithering_fragment>
  //    if(vPos.y>20.0 && vPos.y<21.0){
  //       gl_FragColor = vec4(1.0,1.0,0.0,1.0);
  //    }
  //     `
  // )

   // 多条光带
   shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',

    `#include <dithering_fragment>
    float pos0  = 0.0;
    for(int i = 0;i<4;i++){
      pos0 += 20.0;
      if(vPos.y>pos0 && vPos.y<(pos0+1.0)){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
     }
    }
     
      `
  )
}

const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 50;

export default mesh;
