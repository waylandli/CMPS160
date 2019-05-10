/**
 * Specifies a Camera that can Dolly/Truck and Tilt/Pan.
 *
 * @author Lucas N. Ferreira
 * @this {Renderer}
 */
class Camera {
   /**
    * Constructor for Camera.
    *
    * @constructor
    * @returns {Camera} Camera object created
    */
    constructor(shader) {
        this.speed = 0.1;

        // Camera view attributes
        this.eye     = new Vector3([0, 0, 1]);
        this.center  = new Vector3([0, 0,-1]);
        this.up      = new Vector3([0, 1, 1]);
        this.xAxis      = new Vector3([1, 0, 0]);
        this.yAxis      = new Vector3([0, 1, 0]);

        this.viewMatrix = new Matrix4();
        this.updateView();

        this.projectionMatrix = new Matrix4();
    }

    truck(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize()

        console.log(n);
        // Calculate the u camera axis
        var u = this.up.cross(n);

        console.log(u);
        u = u.normalize();

        // Scale the u axis to the desired distance to move
        u = u.mul(dir * this.speed);
        // Add the direction vector to both the eye and center positions
        this.eye = this.eye.add(u);
        this.center = this.center.add(u);

        this.updateView();
    }

    // Moving the camera up or down
    dolly(dir) {
      // Calculate the n camera axis
      var n = this.eye.sub(this.center);
      n = n.normalize()

      // Calculate the u camera axis
      var u = this.xAxis.cross(n);

      u = u.normalize();

      // Scale the u axis to the desired distance to move
      u = u.mul(dir * this.speed);
      // Add the direction vector to both the eye and center positions
      this.eye = this.eye.add(u);
      this.center = this.center.add(u);

      this.updateView();
    }

    pan(dir) {
      if (dir < 0) {
        this.eye.elements[0] = this.eye.elements[0] + .01
    //    this.center.elements[0] = this.center.elements[0] + .01
      }
      else if (dir > 0) {
        this.eye.elements[0] = this.eye.elements[0] - .01
    //   this.center.elements[0] = this.center.elements[0] - .01
      }
      this.updateView();
    }

    tilt(dir) {
      if (dir < 0) {
        this.eye.elements[1] = this.eye.elements[1] + .01
        
      }
      else if (dir > 0) {
        this.eye.elements[1] = this.eye.elements[1] - .01

      }
      this.updateView();
    }

    updateView() {
        this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
                                  this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                  this.up.elements[0], this.up.elements[1], this.up.elements[2]);
    }
}
