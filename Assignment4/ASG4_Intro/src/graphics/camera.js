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

        this.newCenter = new Vector3();

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
      var u = this.upd.cross(n);

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

        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize()

        // Calculate the u camera axis
        var u = this.up.cross(n);
        u = u.normalize();

        // New center = center - eye
        this.newCenter = this.center.sub(this.eye);

        // Creating rotation matrix to rotate around u
        var rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(dir,u.elements[0],u.elements[1],u.elements[2]);

        // New Center multiplied by rotation matrix
        this.newCenter = rotationMatrix.multiplyVector3(this.newCenter)

        // Center = eye + new Center
        this.center = this.eye.add(this.newCenter);

        // If the angle between the line-of-sight and the "up vector" is less
        // than 10 degrees or greater than 170 degrees, then rotate the
        // "up_vector" about the u axis.
        // cos(10 degrees) = 0.985; cos(170 degrees) = -0.985
        var num = n.elements[0] * this.up.elements[0] + n.elements[1] * this.up.elements[1] + n.elements[2] * this.up.elements[2];
        console.log(num);
        if (Math.abs(num) >= 0.985) {
          //matrix.multiplyV3(this.up, rotationMatrix, this.up);

          this.up = rotationMatrix.multiplyVector3(this.up)

        }

      this.updateView();
    }

    updateView() {
        this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
                                  this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                  this.up.elements[0], this.up.elements[1], this.up.elements[2]);
    }
}
