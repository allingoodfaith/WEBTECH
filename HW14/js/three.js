var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

var cube, cube2;
var modelObject;


/*var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 30;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();

*/

function createBox()
{
    var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
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
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0,0,45)
scene.add(cube);
cube.scale.x= 8;
cube.scale.y= 8;
cube.scale.z= 8;

animate2();

function animate2() 
{
    requestAnimationFrame(animate);
    cube.rotation.x += 0.06;
    cube.rotation.y += 0.06;
    renderer.render(scene, camera);
}
}



function getScene()
{
    var scene = new THREE.Scene();
    scene.background = new THREE.color(0xaaaaaa);
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
    enderer.setSize(window.innerWidth, window.innerHeight);
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
      animateModel();
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
  
var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();
  
  
loadModel()
  
render();



//line
/* 
var material = new THREE.LineBasicMaterial( { color: 0xff00ff } );
var points = [];
points.push( new THREE.Vector3( - 20, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );
points.push( new THREE.Vector3( 20, 0, 0 ) );
points.push( new THREE.Vector3( 20, -20, -20 ));
points.push( new THREE.Vector3( 40, -40, -40 ));

var geometry = new THREE.BufferGeometry().setFromPoints( points );
var line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );
*/
