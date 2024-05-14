import * as THREE from 'three';


// const geometry = new THREE.PlaneGeometry(100, 50);
// const geometry = new THREE.BoxGeometry(100, 100, 100); //立方体
const geometry = new THREE.SphereGeometry(60, 25, 25); //球体

const texture = new THREE.TextureLoader().load('./Earth.png');

const material = new THREE.MeshLambertMaterial({
  map: texture
});

material.onBeforeCompile = function (shader) {
  console.log('fragmentShader', shader.fragmentShader);
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',
    `#include <dithering_fragment>
    float gray =  0.299 * gl_FragColor.r + 0.587 * gl_FragColor.g + 0.114 * gl_FragColor.b;
    gl_FragColor = vec4(gray,gray,gray,gl_FragColor.a);
    `
  )
}

const mesh = new THREE.Mesh(geometry, material);


export default mesh;
