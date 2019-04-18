
class Square extends Geometry {

  constructor(shader, g_points, redColor, greenColor, blueColor, sizeOfShape) {
      super(shader);

      this.sizeOfShape= sizeOfShape
      this.vertices = this.generateSquareVertices(g_points, redColor, greenColor, blueColor, sizeOfShape);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices(g_points, redColor, greenColor, blueColor, sizeOfShape) {
      var vertices = []

      var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);
      var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);
      var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);
      var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);
      var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);

      return vertices;
  }
}
