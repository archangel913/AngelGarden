import * as THREE from "https://cdn.skypack.dev/three@0.151.3";
import { boxUpdate, getScene } from "./scene.js";
import { Camera } from "./camera.js";

document.addEventListener('keydown', keydown_ivent);
document.addEventListener('keyup', keyup_ivent);

let keyW = false;
let keyA = false;
let keyS = false;
let keyD = false;

const width = 960;
const height = 540;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

const scene = getScene();
const camera = new Camera(width, height);

tick();

function tick() {
    boxUpdate();
    renderer.render(scene, camera.getCamera);

    let v = new THREE.Vector3(0, 0, 0);
    if (keyW) {
        v.add(new THREE.Vector3(0, 0, -10));
    }
    if (keyA) {
        v.add(new THREE.Vector3(10, 0, 0));
    }
    if (keyS) {
        v.add(new THREE.Vector3(0, 0, 10));
    }
    if (keyD) {
        v.add(new THREE.Vector3(-10, 0, 0));
    }
    camera.addPosition(v)
    requestAnimationFrame(tick);
}

function keydown_ivent(e) {
    if (e.key === 'w' || e.key === 'W') {
        keyW = true;
    }
    if (e.key === 'a' || e.key === 'A') {
        keyA = true;
    }
    if (e.key === 's' || e.key === 'S') {
        keyS = true;
    }
    if (e.key === 'd' || e.key === 'D') {
        keyD = true;
    }
}

function keyup_ivent(e) {
    if (e.key === 'w' || e.key === 'W') {
        keyW = false;
    }
    if (e.key === 'a' || e.key === 'A') {
        keyA = false;
    }
    if (e.key === 's' || e.key === 'S') {
        keyS = false;
    }
    if (e.key === 'd' || e.key === 'D') {
        keyD = false;
    }
}