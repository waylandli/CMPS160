var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  clearing = document.getElementById("clear");

  // Buttons to change between shapes
  sq = document.getElementById("squarebutton");
  tri = document.getElementById("trianglebutton");
  cir = document.getElementById("circlebutton");
  cube = document.getElementById("cubebutton");

  // Slider to change the size of shapes
  sizes = document.getElementById("sizes");
  sizeNumber = sizes.value

  //Slider to change segment Count
  var step = document.getElementById("step");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;

  }



  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);
  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Add uniforms
  var idMatrix = new Matrix4();
  shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);

  // Initialize another shader for textures
  shaderT = new Shader(gl, ASG3_VSHADER, ASG3_FSHADER);
  shaderT.addAttribute("a_Position");
  shaderT.addAttribute("a_Color");
  shaderT.addAttribute("a_TexCoord");

  shaderT.addUniform("u_Sampler", "sampler2D", 0);
  shaderT.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);


  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene,clearing,sq,tri,cir,cube, sizes, sizeNumber, step);

  //var image = new Image()
  //image.src = 'objs/patrick.jpg'

  var g_points = [];
  g_points.push(0);
  g_points.push(0);
  var shape = new Cube(shaderT, g_points, .125, image);
  scene.addGeometry(shape);





  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}
