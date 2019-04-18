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
    constructor(canvas, scene,clearing,sq,tri,cir,red,green,blue,size) {
      this.canvas = canvas;
      this.scene = scene;
      this.clearing = clearing;
      this.sq = sq;
      this.tri=tri;
      this.cir=cir;
      this.red=red
      this.green=green
      this.blue=blue
      this.size=size

      var whichShape = 1
      var redColor = 255
      var greenColor = 0
      var blueColor = 0
      var sizeOfShape = size.value
      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev, canvas, whichShape, redColor, greenColor, blueColor, sizeOfShape) };
      this.clearing.onclick = function() { _inputHandler.clickClear(scene) };

      this.tri.onclick = function() { whichShape = 1 };
      this.sq.onclick = function() { whichShape = 2 };
      this.cir.onclick = function() { whichShape = 3 };

      this.red.onchange = function() { redColor = red.value };
      this.green.onchange = function() { greenColor = green.value };
      this.blue.onchange = function() { blueColor = blue.value };
      this.size.onchange = function() { sizeOfShape = size.value    }
    }
    /**
     * Function called upon mouse click.
     */

    click(ev, canvas, whichShape, redColor, greenColor, blueColor, sizeOfShape) {
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
        var shape = new Triangle(shader, g_points, redColor, greenColor, blueColor, sizeOfShape);
        this.scene.addGeometry(shape);
        }
        else if (whichShape == 2) {
          var shape = new Square(shader, g_points, redColor, greenColor, blueColor, sizeOfShape);
          this.scene.addGeometry(shape);
        }
      }


    clickClear(scene) {
      this.scene.clearGeometries();
    }
}
