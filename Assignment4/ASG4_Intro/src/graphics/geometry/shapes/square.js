
class Square extends Geometry {

  constructor(shader, image) {
      super(shader);
      this.image = image

      this.vertices = this.generateSquareVertices();
      this.faces = {0: this.vertices};





      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices() {
      var vertices = []

      var vertex1 = new Vertex(-8, -1, -8);
      var vertex2 = new Vertex(8, -1, -8);
      var vertex3 = new Vertex(8, -1, 8);
      var vertex4 = new Vertex(-8, -1, -8);
      var vertex5 = new Vertex(-8, -1, 8);
      var vertex6 = new Vertex(8, -1, 8);

      vertex1.texCoord = [0.0 , 0.0];
      vertex2.texCoord = [7.0 , 0.0];
      vertex3.texCoord = [7.0 , 7.0];
      vertex4.texCoord = [0.0 , 0.0];
      vertex5.texCoord = [0.0 , 7.0];
      vertex6.texCoord = [7.0 , 7.0];

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);

  //    var vertex1 = new Vertex(-8, -8, -8);
  //    var vertex2 = new Vertex(8, -8, -8);
  //    var vertex3 = new Vertex(8, 8, -8);


  //    vertices.push(vertex1);
  //    vertices.push(vertex2);
  //    vertices.push(vertex3);



      return vertices;
  }

  render() {

  }
  // Translate --> Rotate --> Translate -- To get Spinning Squares

}
