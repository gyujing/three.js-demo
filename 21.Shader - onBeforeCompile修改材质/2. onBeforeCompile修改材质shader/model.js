import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});

material.onBeforeCompile = function (shader) {
  console.log('shader', shader);
  console.log('顶点着色器', shader.vertexShader);
  console.log('片元着色器', shader.fragmentShader);
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',
    `#include <dithering_fragment>
    gl_FragColor.r = 0.0;
    gl_FragColor.g = 0.0;
    `
  )
}

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
