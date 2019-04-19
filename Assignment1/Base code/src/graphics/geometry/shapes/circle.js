
class Circle extends Geometry {

  constructor(shader, g_points, redColor, greenColor, blueColor, sizeOfShape, stepCount) {
      super(shader);

      this.sizeOfShape= sizeOfShape
      this.vertices = this.generateCircleVertices(g_points, redColor, greenColor, blueColor, sizeOfShape, stepCount);
      this.faces = {0: this.vertices};


      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices(g_points, redColor, greenColor, blueColor, sizeOfShape, stepCount) {
      var vertices = []
      var x = 0
      var y = 0
      var counter = 360 / stepCount

      var centerVertex = new Vertex(g_points[0], g_points[1], 0.0, redColor, greenColor, blueColor);

  //    x = Math.cos(0) * sizeOfShape
  //    y = Math.sin(0) * sizeOfShape
  //    var vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0, redColor, greenColor, blueColor);
  //    vertices.push(vertex);


     for (var count = 0; count < 360; count = count + counter ) {

        vertices.push(centerVertex);

        x = Math.cos(count * (Math.PI/180)) * sizeOfShape
        y = Math.sin(count * (Math.PI/180)) * sizeOfShape
        var vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0, redColor, greenColor, blueColor);
        vertices.push(vertex);

        x = Math.cos((count + counter) * (Math.PI/180) ) * sizeOfShape
        y = Math.sin((count + counter) * (Math.PI/180) ) * sizeOfShape
        vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0, redColor, greenColor, blueColor);
        vertices.push(vertex);


      }

      return vertices;
  }
}
