import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.min.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/DRACOLoader.js";





onload = function (){
	
	/*import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';*/
	
	const s = new THREE.Scene();
	
	const c = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight , 1, 2000);
	c.position.copy(new THREE.Vector3(0, 0, 30));
	c.lookAt(0,0,30);
	
	const r = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
	r.setSize(window.innerWidth, window.innerHeight);
	r.setClearColor(0xffffff, 0)
	
	document.body.appendChild(r.domElement);
	

const amblight = new THREE.AmbientLight(/*0xff0000*/);

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(0, 0, 25)
	s.add(amblight, spotLight);

  



const cool = new THREE.TorusGeometry(12.5, 1, 50, 100)
const mat = new THREE.MeshPhongMaterial({color: 0xFFD700})
const torus = new THREE.Mesh(cool, mat);

const tloader = new THREE.TextureLoader();
//Creating custom textures
const earthT = tloader.load('./images/earth.webp');
const moonT = tloader.load('./images/moon.webp');
//const rockT = tloader.load('./images/rocks.webp');
//const woodT = tloader.load('./images/wood.webp');


//CREATING EARTH
const sphereMaterial = new THREE.MeshBasicMaterial({ map: earthT, flatShading: true });
const sphereGeometry = new THREE.SphereBufferGeometry( 15, 15, 15 );

const earth = new THREE.Mesh(sphereGeometry, sphereMaterial);
earth.position.z = -30;
if (this.window.innerWidth >= 1700){
	earth.position.x = 50;
}
else
earth.position.x = 5;
earth.rotation.x = 6.8;

//CREATING MOON
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonT, flatShading: true });
const moonGeometry = new THREE.SphereBufferGeometry( 8, 8, 8 );

const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.z = -60;
moon.position.y = 20;
if (this.window.innerWidth >= 1700){
	moon.position.x = 20;
}
else
moon.position.x = -15;
moon.rotation.x = 6.8;



//crystal
const front = Math.tan(Math.PI / 6)
  const back = Math.cos(Math.PI / 6)
  const vertices = [
	0, 1, 0, // 0: top
	1, 0, front, // 1: right
	-1, 0, front, // 2: left
	0, 0, -back, // 3: back middle
	0, -1, 0, // 4: bottom
  ]
  const faces = [
	2, 1, 0, // left, right, top
	1, 3, 0, // right, back, top
	3, 2, 0, // back, left, top
	2, 4, 1, // left, bottom, right
	1, 4, 3, // right, bottom, back
	3, 4, 2, // back, bottom, left
  ]
  const Crystalgeometry = new THREE.PolyhedronBufferGeometry(vertices, faces, .5, 0)
	const Crystalmaterial = new THREE.MeshNormalMaterial()
	const star = new THREE.Mesh(Crystalgeometry, Crystalmaterial);


	star.scale.set(5, 10, 5)
  star.position.x = -5.5;
  star.position.y = -2;
  star.position.z = 10;
  if (window.innerWidth <= 700){
	star.scale.set(3, 6, 3)
	star.position.y = -4;
	star.position.x = -2;
}
	s.add(star);

s.add(moon);


s.add(earth);






const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/libs/draco/' );


const gltfLoader = new GLTFLoader();

gltfLoader.setDRACOLoader( dracoLoader );


   gltfLoader.load("./dante1.glb", function(obj){
	const wave = obj.scene;
	window.wave = wave;
	wave.scale.set(30, 30, 30)
	wave.position.y = -50;
	wave.rotation.y = 6;
	if (window.innerWidth <= 700){
		wave.rotation.y = 6.2;
	}
	

	   s.add(obj.scene);

	   
   });
   gltfLoader.load("./rocket.glb", function(obj){
	const satellite = obj.scene;
	window.satellite = satellite;
	satellite.scale.set(2, 2, 2)
	satellite.position.y = -150;
	

	   s.add(obj.scene);

	   
   });






function moveCamera(){
	const t = document.body.getBoundingClientRect().top;


	c.position.y = t * .05;
	c.position.z = t * -.01 + 30;
		if (this.window.innerWidth >= 1500 ){
			window.satellite.position.z = t * -0.04 - 40;
			window.satellite.rotation.y = t * -0.003 - 70;
			window.satellite.position.y =  t * -0.03 - 150;
			window.satellite.rotation.x = 50;
		}
		else {
			window.satellite.position.z = t * -0.04 - 80;
			window.satellite.rotation.y = t * -0.003 - 70;
			window.satellite.position.y =  t * 0.003 - 130;



		};
	
	
	



}
document.body.onscroll = moveCamera;
var clock = new THREE.Clock();

const animate = function (){
	const t = document.body.getBoundingClientRect().top;

    

	earth.rotation.y += -.005;
	moon.rotation.y += .001;
	star.rotation.y += .02;


	
	
	

	

		r.render(s, c);
		requestAnimationFrame(animate);
	}
	animate();
	// r.setAnimationLoop(animate);


}



//ENDING THREEJS.

const d = new Date();
const year = document.getElementById('year')
year.innerHTML = d.getFullYear();

var typed = new Typed(".typing", {
		strings: ["Developer"],//, "Software Engineer", "Designer", "Freelancer"],
		typeSpeed: 150,
		backSpeed: 60,
		//loop: true
	});
var typed = new Typed(".typing2", {
		strings: ["Committed", "Dedicated", "Communicative"],//, "Software Engineer", "Designer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
