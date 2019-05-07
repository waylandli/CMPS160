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
    constructor(canvas, scene,clearing,sq,tri,cir,cube,sizes, sizeNumber, step) {
      this.canvas = canvas;
      this.scene = scene;

      // Clearing Button
      this.clearing = clearing;

      // Shapes Button
      this.sq = sq;
      this.tri=tri;
      this.cir=cir;
      this.cube=cube;

      // Size slider
      this.sizes=sizes

      // Segment step slider
      this.step = step

      var stepCount = step.value

      // Initializing initial size of the shapes
      var sizeOfShape=null
      sizeOfShape = sizeNumber

      // Counter to determine which shape
      var whichShape = 1

      var dragging = 0
      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) {
        _inputHandler.click(ev, canvas, whichShape, sizeOfShape, stepCount)
        dragging = 1
      };

      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };

      this.canvas.onmouseup = function() {
        dragging = 0
      };

      this.canvas.onmousemove = function(ev) {
        if (dragging == 1) {
          _inputHandler.click(ev, canvas, whichShape, sizeOfShape, stepCount)
        }
      }
      this.clearing.onclick = function() { _inputHandler.clickClear(scene) };

      this.tri.onclick = function() { whichShape = 1 };
      this.sq.onclick = function() { whichShape = 2 };
      this.cir.onclick = function() { whichShape = 3 };
      this.cube.onclick = function() { whichShape = 4 };


      this.sizes.onchange = function() { sizeOfShape = document.getElementById("sizes").value }

      this.step.onchange = function() { stepCount = step.value };

      var clr = document.getElementById("colorButton")

      this.clr = clr

      document.getElementById('texInput').onchange = function() { _inputHandler.readTexture() };

      clr.onclick = function() {

        console.log(clr.name);

        if (clr.value == "Solid Color") {
          clr.value = "Rainbow Color"
        }
        else
          clr.value ="Solid Color"
      }



    }
    /**
     * Function called upon mouse click.
     */

    click(ev, canvas, whichShape, sizeOfShape, stepCount) {
        var g_points = [];
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);
        var x = ev.clientX; // x coordinate of a mouse pointer
        var y = ev.clientY; // y coordinate of a mouse pointer
        var rect = ev.target.getBoundingClientRect();

        x = ((x - rect.left) - canvas.height/2)/(canvas.height/2);
        y = (canvas.width/2 - (y - rect.top))/(canvas.width/2);

        g_points.push(x);
        g_points.push(y);

        if (whichShape == 1) {
        var shape = new Triangle(shader, g_points, sizeOfShape);
        this.scene.addGeometry(shape);
        }
        else if (whichShape == 2) {
          var shape = new Square(shader, g_points, sizeOfShape);
          this.scene.addGeometry(shape);
        }
        else if (whichShape == 3) {
          var shape = new Circle(shader, g_points, sizeOfShape, stepCount);
          this.scene.addGeometry(shape);
        }
        else if (whichShape == 4) {
          if (_inputHandler.image == null) {
            var shape = new Cube(shader, g_points, sizeOfShape);
            _inputHandler.scene.addGeometry(shape);
          }
          else {
            var shape = new Cube(shaderT, g_points, sizeOfShape, _inputHandler.image);
            _inputHandler.scene.addGeometry(shape);
          }
        }
      }

    clickClear(scene) {
      this.scene.clearGeometries();
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
            // alert(fileReader.result);
            if (_inputHandler.image == null) {
              var customObj = new CustomOBJ(shader, fileReader.result);
              _inputHandler.scene.addGeometry(customObj);
            }
            else {
              var customObj = new CustomOBJ(shaderT, fileReader.result, _inputHandler.image.src);
              _inputHandler.scene.addGeometry(customObj);
            }

        }
    }

    readTexture() {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return false;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
        };

        var imgPath = document.getElementById("texInput").value;
        var imgPathSplit = imgPath.split("\\");

        // Tell the browser to load an image
        image.src = 'objs/' + imgPathSplit[imgPathSplit.length - 1];
        console.log(image.src);
        console.log(image);
        return true;
    }


}
