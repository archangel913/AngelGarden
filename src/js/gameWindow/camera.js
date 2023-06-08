import * as THREE from "three";
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export class Camera {
    constructor(width, height) {
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
        this.camera.position.set(0, 10, +50);
        this.controls = new PointerLockControls(this.camera, document.body);

        this.controls.addEventListener('lock', function () {
        });
        this.controls.addEventListener('unlock', function () {
        });
    }

    get getCamera() {
        return this.camera;
    }

    update(v) {
        this.controls.moveForward(v.z);
        this.controls.moveRight(v.x);
        v = new THREE.Vector3(0, v.y, 0);
        this.camera.position.add(v);
    }

    mouseUnlock() {
        this.controls.unlock();
    }

    mouseLock() {
        this.controls.lock();
    }
}
