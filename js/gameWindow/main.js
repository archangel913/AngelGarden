import * as THREE from "three";
import { boxUpdate, getScene } from "./scene.js";
import { Camera } from "./camera.js";

document.addEventListener('keydown', keydown_ivent);
document.addEventListener('keyup', keyup_ivent);
document.getElementById('canvas').addEventListener('click', click);

let keyW = false;
let keyA = false;
let keyS = false;
let keyD = false;
let keySpace = false;
let keyShift = false;

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
        v.add(new THREE.Vector3(0, 0, 1));
    }
    if (keyA) {
        v.add(new THREE.Vector3(-1, 0, 0));
    }
    if (keyS) {
        v.add(new THREE.Vector3(0, 0, -1));
    }
    if (keyD) {
        v.add(new THREE.Vector3(1, 0, 0));
    }
    if(keySpace){
        v.add(new THREE.Vector3(0, 1, 0));
    }
    if(keyShift){
        v.add(new THREE.Vector3(0, -1, 0));
    }
    camera.update(v)
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
    if(e.key === ' '){
        keySpace = true;
    }
    if(e.key === 'Shift'){
        keyShift = true;
    }
    if (e.key === 'Escape') {
        camera.mouseUnlock();
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
    if(e.key === ' '){
        keySpace = false;
    }
    if(e.key === 'Shift'){
        keyShift = false;
    }
}

function click(e){
    camera.mouseLock();
}
