var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

var cube, cube2;
var modelObject;

function createBox()
{
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(24,24,5)
scene.add(cube);
cube.scale.x= 10;
cube.scale.y= 10;
cube.scale.z= 10;

animate();

function animate() 
{
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
}


function createBox2()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x10ff86});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0,10,45)
scene.add(cube);
cube.scale.x= 8;
cube.scale.y= 8;
cube.scale.z= 8;

animate2();

function animate2() 
{
    requestAnimationFrame(animate2);
    cube.rotation.x += 0.06;
    cube.rotation.y += 0.06;
    renderer.render(scene, camera);
}
}


function createBox3()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x75aa11});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(30,20,45)
scene.add(cube);
cube.scale.x= 7.7;
cube.scale.y= 7;
cube.scale.z= 7;

animate3();

function animate3() 
{
    requestAnimationFrame(animate3);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    renderer.render(scene, camera);
}
}



function createBox4()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x45aa44});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(-30,5,40)
scene.add(cube);
cube.scale.x= 10;
cube.scale.y= 3;
cube.scale.z= 5;

animate4();

function animate4() 
{
    requestAnimationFrame(animate4);
    cube.rotation.x += 0.004;
    cube.rotation.y += 0.05;
    renderer.render(scene, camera);
}
}


function createBox5()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x12aa75});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(-30,10,5)
scene.add(cube);
cube.scale.x= 10;
cube.scale.y= 10;
cube.scale.z= 8;

animate5();

function animate5() 
{
    requestAnimationFrame(animate5);
    cube.rotation.x += 0.4;
    cube.rotation.y += 0.002;
    renderer.render(scene, camera);
}
}


function createBox6()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x12412355324});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(-30,5,-20)
scene.add(cube);
cube.scale.x= 10;
cube.scale.y= 12;
cube.scale.z= 8;

animate6();

function animate6() 
{
    requestAnimationFrame(animate6);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.009;
    renderer.render(scene, camera);
}
}


function createBox7()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x113245});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0,5,-20)
scene.add(cube);
cube.scale.x= 8;
cube.scale.y= 2;
cube.scale.z= 8;

animate5();

function animate5() 
{
    requestAnimationFrame(animate5);
    cube.rotation.x += 0;
    cube.rotation.y += 2;
    renderer.render(scene, camera);
}
}

function createBox8()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x4652});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(30,5,-20)
scene.add(cube);
cube.scale.x= 2;
cube.scale.y= 2;
cube.scale.z= 6;

animate5();

function animate5() 
{
    requestAnimationFrame(animate5);
    cube.rotation.x += .456;
    cube.rotation.y += 0.5;
    renderer.render(scene, camera);
}
}

function getScene()
{
    var scene = new THREE.Scene();

    return scene;
}

function getCamera()
{
    var aspectRatio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(80,aspectRatio,0.1,1000);
    camera.position.set(0,90,-10);
    return camera;
}


function getLight(scene)
{
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(20, 50, 20);
    scene.add(light);
  
    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);
    return light;
}

function getRenderer()
{
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

function getControls(camera, renderer) 
{
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;
    return controls;
}

function loadModel() 
{
    loader = new THREE.OBJLoader();
    loader.load('models/Skull.obj', function (object) 
    {
      object.rotation.z = Math.PI;
      modelObject = object;
      scene.add(object);
      //animateModel();
    });
}

function loadModel2() 
{
    loader = new THREE.OBJLoader();
    loader.load('models/Logo.obj', function (object) 
    {
      object.rotation.z = Math.PI;
      modelObject = object;
      scene.add(object);
      //animateModel();
      //object.rotation = 
    });
    
}


function animateModel() 
{
    requestAnimationFrame(animateModel);
    modelObject.rotation.x += 0.05;
    modelObject.rotation.y += 0.05;
}


function render() 
{
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();
};
  
//var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();
var game1 = createBox2();
var game1 = createBox3();
var game1 = createBox4();
var game1 = createBox5();
var game1 = createBox6();
var game1 = createBox7();
var game1 = createBox8();
  
  
loadModel()
//loadModel2()
  
render();