import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/DRACOLoader.js";



onload = function (){
	/*import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';*/
	
	const s = new THREE.Scene();
	
	const c = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight , 1, 2000);
	c.position.copy(new THREE.Vector3(0, 0, 30));
	c.lookAt(0,0,30);
	
	const r = new THREE.WebGLRenderer({ alpha: true });
	r.setSize(window.innerWidth, window.innerHeight);
	r.setClearColor(0xffffff, 0)
	
	document.body.appendChild(r.domElement);
	

const amblight = new THREE.AmbientLight(/*0xff0000*/);
	const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0, 0, -5)
const pointLight2 = new THREE.PointLight(0xffffff)
pointLight2.position.set(0, 0, 5)
	s.add(amblight, pointLight2);


const shape = new THREE.BoxGeometry(10, 10, 10);

/*const box = new THREE.Mesh(shape, mat)
const ok = new THREE.TextGeometry("Hello")

s.add(box, ok)
*/
const cool = new THREE.TorusGeometry(12.5, 1, 50, 100)
const mat = new THREE.MeshPhongMaterial({color: 0xFFD700})
const torus = new THREE.Mesh(cool, mat);

const tloader = new THREE.TextureLoader();

const texture1 = tloader.load('./images/erth-texture.jpg');
const uniforms = {
    texture1: { value: texture1 },
};

//s.add(torus)

const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture1 });
const sphereGeometry = new THREE.SphereGeometry( 15, 15, 15 );

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.z = -30;
if (this.window.innerWidth >= 1700){
	sphere.position.x = 50;
}
else
sphere.position.x = 5;
sphere.rotation.x = 6.8;

//sphere.position.y = 30;

s.add(sphere);

const gltfLoader = new GLTFLoader();




let mixer = THREE.AnimationMixer;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( './node_modules/three/examples/js/libs/draco/' );
gltfLoader.setDRACOLoader( dracoLoader );


   gltfLoader.load("./waving.glb", function(obj){
	const wave = obj.scene;
	wave.scale.set(30, 30, 30)
	wave.position.y = -50;
	wave.rotation.y = 6;
	

	   s.add(obj.scene);
	   /*var mixer = new THREE.AnimationMixer(wave);
	   const clips = obj.animations;
	   const clip = THREE.AnimationClip.findByName(clips, 'RetopoGroup2Action.002');
	   const action = mixer.clipAction(clip);
	   action.play();*/
	   
   });






function moveCamera(){
	const t = document.body.getBoundingClientRect().top;
	/*sphere.rotation.x += 0.1;*/
	
	
	
	/*c.position.z = t * -0.01;*/
	//c.position.z = t * -4;

	c.position.y = t * -.03
	//torus.rotation.y += 0.0001;
	/*if (c.position.z < 30){
		c.position.z = 30;
	};*/
	//box.position.z += .5
	
	//c.rotation.y = t * -0.0002;

}
document.body.onscroll = moveCamera;
var clock = new THREE.Clock();

const animate = function (){
	const t = document.body.getBoundingClientRect().top;

    
		/*torus.rotation.x += 0.01;*/
	/*torus.rotation.y += 0.005;*/
	/*torus.rotation.z += 0.01;*/
	sphere.rotation.y += -.005;
	sphere.position.y = t * -.03

		r.render(s, c);
		requestAnimationFrame(animate);
	}
   // requestAnimationFrame(animate);
	animate();
	// r.setAnimationLoop(animate);


}



//ENDING THREEJS.

const d = new Date();
const year = document.getElementById('year')
year.innerHTML = d.getFullYear();

var typed = new Typed(".typing", {
		strings: ["Developer"],//, "Software Engineer", "Designer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		//loop: true
	});
    var typed = new Typed(".typing2", {
		strings: ["Committed", "Dedicated", "Communicative"],//, "Software Engineer", "Designer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
