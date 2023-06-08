import * as THREE from "three";
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';

const scene = new THREE.Scene();
/*
const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(geometry, material);
scene.add(box);
*/

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
scene.add( directionalLight );

// Instantiate a loader
const loader = new MMDLoader();

// Load a MMD model
loader.load(
    // path to PMD/PMX file
    'models/MejiroMcQueen/MejiroMcQueen.pmx',
    // called when the resource is loaded
    function (mesh) {
        scene.add(mesh);
    },
    // called when loading is in progresses
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened');
    }
);

export function getScene() {
    return scene;
}


export function boxUpdate() {
    //box.rotation.y += 0.01;
}