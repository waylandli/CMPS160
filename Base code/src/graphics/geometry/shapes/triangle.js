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
  constructor(shader, g_points, redColor, greenColor, blueColor, sizeOfShape) {
      super(shader);

      this.redColor = redColor
      this.greenColor = greenColor
      this.blueColor = blueColor
      this.sizeOfShape = sizeOfShape
      this.vertices = this.generateTriangleVertices(g_points, redColor, greenColor, blueColor, sizeOfShape);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(g_points, redColor, greenColor, blueColor, sizeOfShape) {
      var vertices = []


      var vertex1 = new Vertex(g_points[0], g_points[1]+Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);
      var vertex2 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);
      var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);


      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }
}
