var _inputHandler = null;

/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene, camera, hud) {
      this.canvas = canvas;
      this.scene  = scene;
      this.camera = camera;
      this.hud    = hud;
      this.stepsTaken = 0;
      this.time = 30;

      var ctx = hud.getContext('2d');
      ctx.font = "20px Arial";
      ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);
      ctx.fillText("You have " + this.time + " seconds left.", 50, 75);

      ctx.rect(0, 0, 400, 400);
      ctx.fillStyle = "red";
      ctx.fill();

      var move = false;

      _inputHandler = this;

      // Mouse Events
      this.hud.onmousedown = function(ev) { move = true };
      this.hud.onmouseup   = function(ev) { move = false };
      this.hud.onmousemove = function(ev) {
        if (move == true)
         _inputHandler.mouseMove(ev)
       };

      // Keyboard Events
      document.addEventListener('keydown', function(ev) { _inputHandler.keyDown(ev); _inputHandler.updateStep(ctx); }, false);
      document.addEventListener('keyup',   function(ev) { _inputHandler.keyUp(ev);   }, false);
      document.addEventListener('wheel',   function(ev) { _inputHandler.zoom(ev);   }, false);

      var timer = setInterval(function(){_inputHandler.time--; _inputHandler.updateStep(ctx); }, 1000);

    }


    /**
     * Function called upon mouse click.
     */
    mouseClick(ev) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);

        var shape = new Triangle(shader);
        this.scene.addGeometry(shape);
    }

    mouseMove(ev) {
        var movementX = ev.movementX;
        console.log("movementX", movementX);

        var movementY = ev.movementY;
        console.log("movementY", movementY);

        if(movementY > 0) {
            this.camera.tilt(-1);
        }
        else if(movementY < 0) {
            this.camera.tilt(1);
        }

        if(movementX > 0) {
            this.camera.pan(-1);
        }
        else if(movementX < 0) {
            this.camera.pan(1);
        }


    }

    zoom(ev) {
      var Y = ev.deltaY;
      if (Y>0)
        this.camera.zooom(1)
      else {
        this.camera.zooom(-1)
      }
    }

    updateStep(ctx) {
      ctx.clearRect(0,0,400,400)
      ctx.fillText("You have taken " + this.stepsTaken + " steps.", 50, 50);

      if (this.time >0)
        ctx.fillText("You have " + this.time + " seconds left.", 50, 75);
      else
        ctx.fillText("You have lost.", 50, 75)
    }

    keyUp(ev) {
        var keyName = event.key;
        console.log("key up", keyName);
    }

    keyDown(ev) {
        var keyName = event.key;
        console.log("key down", keyName);

        if(keyName == "a") {
            this.camera.truck(-1);
            this.stepsTaken++
        }
        else if(keyName == "d") {
            this.camera.truck(1);
            this.stepsTaken++
        }
        else if(keyName == "w") {
            this.camera.dolly(-1);
            this.stepsTaken++
        }
        else if(keyName == "s") {
            this.camera.dolly(1);
            this.stepsTaken++
        }
        else if(keyName == "z") {
            this.camera.addDist();
        }

    }

    /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
        var fileReader = new FileReader();
        var objFile = document.getElementById("fileInput").files[0];

        if (!objFile) {
            alert("OBJ file not set!");
            return;
        }

        fileReader.readAsText(objFile);
        fileReader.onloadend = function() {
            alert(fileReader.result);
        }
    }

    readTexture(src, onTexLoad) {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return false;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
            onTexLoad(image);
        };

        // Tell the browser to load an image
        image.src = src
        return true;
    }

    dist() {
      this.camera.addDist();
    }
}
