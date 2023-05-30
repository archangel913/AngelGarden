import * as THREE from "https://cdn.skypack.dev/three@0.151.3";

export class Camera {
    constructor(width, height) {
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
        this.camera.position.set(0, 0, +1000);
    }

    get getCamera(){
        return this.camera;
    }

    addPosition(v){
        this.camera.position.add(v);
    }
}

