/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, g_points, sizeOfShape) {
      super(shader);

      
      this.sizeOfShape = sizeOfShape
      this.vertices = this.generateTriangleVertices(g_points, sizeOfShape);
      this.faces = {0: this.vertices};

      // Used for translation matrix
      this.x = g_points[0]
      this.y = g_points[1]

      this.modelMatrix = new Matrix4();

      this.scalingMatrix = new Matrix4();
      this.scalingMatrix.setScale(1.01,1.01,0);

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(this.x, this.y,0);

      this.triangleSize = 0
      this.growing = true

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(g_points, sizeOfShape) {
      var vertices = []


      var vertex1 = new Vertex(g_points[0], g_points[1]+Number(sizeOfShape), 0.0);
      var vertex2 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
      var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }

  render() {

    if (this.growing == true) {
        this.triangleSize++
      if (this.triangleSize == 50) {
        this.growing = false
      }
      this.scalingMatrix.setScale(1.01,1.01,0);
    }
    else if (this.growing == false) {
      this.triangleSize--
      if (this.triangleSize == 0) {
        this.growing = true
      }
      this.scalingMatrix.setScale(.99,.99,0);
    }


    this.translationMatrix.setTranslate(this.x,this.y,0);
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

    this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);

    this.translationMatrix.setTranslate(-this.x,-this.y,0);
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
