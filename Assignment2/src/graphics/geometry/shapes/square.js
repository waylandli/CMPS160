
class Square extends Geometry {

  constructor(shader, g_points, redColor, greenColor, blueColor, sizeOfShape) {
      super(shader);

      this.sizeOfShape= sizeOfShape
      this.vertices = this.generateSquareVertices(g_points, redColor, greenColor, blueColor, sizeOfShape);

      // Used for translation matrix
      this.x = g_points[0]
      this.y = g_points[1]

      this.faces = {0: this.vertices};

      this.modelMatrix = new Matrix4();

      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(2,0,0,1);

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(this.x, this.y,0);



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
      var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0, redColor, greenColor, blueColor);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);


      return vertices;
  }


  // Translate --> Rotate --> Translate -- To get Spinning Squares
  render () {
    // Translate
    this.translationMatrix.setTranslate(this.x,this.y,0);
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

    // Rotate
    this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);

    // Translate back to original position
    this.translationMatrix.setTranslate(-this.x, -this.y, 0)
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
