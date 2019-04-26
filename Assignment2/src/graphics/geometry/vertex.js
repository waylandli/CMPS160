/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, redColor, greenColor, blueColor) {
      this.point  = new Vector3([x, y, z]);

      this.color  = [redColor/255, greenColor/255, blueColor/255, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
