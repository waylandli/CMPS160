var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var camera = new Camera();

  var inputHandler = new InputHandler(canvas, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);


  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);


  camera.projectionMatrix.setOrtho(-1, 1, -1, 1, 0.1, 10)


  // Load texture and add triangle to the scene with that texture.
  inputHandler.readTexture("objs/wood.jpg", function(image) {

    for (i = 0; i < 1;i = i +.25){
        var shape = new Cube(shader,[i, -.875, 0], image, .125)
        scene.addGeometry(shape)
    }
    for (i = .25; i < 1;i = i +.25){
        var shape = new Cube(shader,[i, -.625, 0], image, .125)
        scene.addGeometry(shape)
    }
    for (i = .5; i < 1;i = i +.25){
        var shape = new Cube(shader,[i, -.375, 0], image, .125)
        scene.addGeometry(shape)
    }
    var shape = new Cube(shader,[.75, -.125, 0], image, .125)
    scene.addGeometry(shape)

    for (i = 0; i < 2;i = i +.25){
      for (j = 0; j < 1;j = j +.25){
        var shape = new Cube(shader,[-1, i-.875, j], image, .125)
        scene.addGeometry(shape)
      }
    }
  })

  inputHandler.readTexture("objs/grass.png", function(image) {
      var shape = new Square(shader, image)
      scene.addGeometry(shape)

  })

  inputHandler.readTexture("objs/blue.jpg", function(image) {
      var shape = new Cube(shader,[0, -1, -4], image, 8)
      scene.addGeometry(shape)

  })

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}
