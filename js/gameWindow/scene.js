import * as THREE from "https://cdn.skypack.dev/three@0.151.3";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(geometry, material);
scene.add(box);


export function getScene() {
    return scene;
}

export function boxUpdate() {
    box.rotation.y += 0.01;
}