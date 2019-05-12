
class Cube extends Geometry {

  constructor(shader, g_points, image) {
      super(shader);
      //if (image == null) {

    //  }
      this.image = image
      console.log(image);

      var sizeOfShape = 0.125;

      this.vertices = this.generateCubeVertices(g_points, sizeOfShape);
      this.faces = {0: this.vertices};

      this.x = g_points[0]
      this.y = g_points[1]


      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(this.x, this.y,0);

      this.modelMatrix = new Matrix4();
      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(1,1,0,0);
      this.count = 0

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(g_points, sizeOfShape) {

    var vertices = []

    // Front of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    // vertex1.texCoord = [0.0 , 0.0];
    // vertex2.texCoord = [1.0 , 0.0];
    // vertex3.texCoord = [1.0 , 1.0];
    // vertex4.texCoord = [0.0 , 0.0];
    // vertex5.texCoord = [0.0 , 1.0];
    // vertex6.texCoord = [1.0 , 1.0];

    // if (sizeOfShape == .1251) {
      vertex1.texCoord = [0.0 , 0.0];
      vertex2.texCoord = [1.0 , 0.0];
      vertex3.texCoord = [1.0 , 1.0];
      vertex4.texCoord = [0.0 , 0.0];
      vertex5.texCoord = [0.0 , 1.0];
      vertex6.texCoord = [1.0 , 1.0];
    // }

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Back of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    // vertex1.texCoord = [0.0 , 0.0];
    // vertex2.texCoord = [1.0 , 0.0];
    // vertex3.texCoord = [1.0 , 1.0];
    // vertex4.texCoord = [0.0 , 0.0];
    // vertex5.texCoord = [0.0 , 1.0];
    // vertex6.texCoord = [1.0 , 1.0];

    // if (sizeOfShape == .1251) {
      vertex1.texCoord = [0.0 , 0.0];
      vertex2.texCoord = [1.0 , 0.0];
      vertex3.texCoord = [1.0 , 1.0];
      vertex4.texCoord = [0.0 , 0.0];
      vertex5.texCoord = [0.0 , 1.0];
      vertex6.texCoord = [1.0 , 1.0];
    // }

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Right of Cube
    var vertex1 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex5 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    // vertex1.texCoord = [0.0 , 0.0];
    // vertex2.texCoord = [1.0 , 0.0];
    // vertex3.texCoord = [1.0 , 1.0];
    // vertex4.texCoord = [0.0 , 0.0];
    // vertex5.texCoord = [0.0 , 1.0];
    // vertex6.texCoord = [1.0 , 1.0];

    // if (sizeOfShape == .1251) {
      vertex1.texCoord = [0.0 , 0.0];
      vertex2.texCoord = [1.0 , 0.0];
      vertex3.texCoord = [1.0 , 1];
      vertex4.texCoord = [0.0 , 0.0];
      vertex5.texCoord = [0.0 , 1];
      vertex6.texCoord = [1.0 , 1];
    // }

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // if (sizeOfShape == .1251) {
      vertex1.texCoord = [0.0 , 0.0];
      vertex2.texCoord = [1.0 , 0.0];
      vertex3.texCoord = [1.0 , 1];
      vertex4.texCoord = [0.0 , 0.0];
      vertex5.texCoord = [0.0 , 1];
      vertex6.texCoord = [1.0 , 1];
    // }

    // Left of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex2 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex3 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex6 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    // vertex1.texCoord = [0.0 , 0.0];
    // vertex2.texCoord = [1.0 , 0.0];
    // vertex3.texCoord = [1.0 , 1.0];
    // vertex4.texCoord = [0.0 , 0.0];
    // vertex5.texCoord = [0.0 , 1.0];
    // vertex6.texCoord = [1.0 , 1.0];

    // if (sizeOfShape == .1251) {
      vertex1.texCoord = [0.0 , 1];
      vertex2.texCoord = [1.0 , 1];
      vertex3.texCoord = [1.0 , 1.0];
      vertex4.texCoord = [0.0 , 1];
      vertex5.texCoord = [0.0 , 1.0];
      vertex6.texCoord = [1.0 , 1.0];
    // }

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Top of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    // vertex1.texCoord = [0.0 , 0.0];
    // vertex2.texCoord = [1.0 , 0.0];
    // vertex3.texCoord = [1.0 , 1.0];
    // vertex4.texCoord = [0.0 , 0.0];
    // vertex5.texCoord = [0.0 , 1.0];
    // vertex6.texCoord = [1.0 , 1.0];

    // if (sizeOfShape == .1251) {
      vertex1.texCoord = [0.0 , 0.0];
      vertex2.texCoord = [1.0 , 0.0];
      vertex3.texCoord = [1.0 , 1.0];
      vertex4.texCoord = [0.0 , 0.0];
      vertex5.texCoord = [0.0 , 1.0];
      vertex6.texCoord = [1.0 , 1.0];
    // }

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Bottom of Cube
    var vertex1 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex2 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex3 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]);
    var vertex5 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    var vertex6 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), g_points[2]+Number(sizeOfShape) * 2);
    vertex1.texCoord = [0.0 , 0.0];
    vertex2.texCoord = [1.0 , 0.0];
    vertex3.texCoord = [1.0 , 1.0];
    vertex4.texCoord = [0.0 , 0.0];
    vertex5.texCoord = [0.0 , 1.0];
    vertex6.texCoord = [1.0 , 1.0];

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    return vertices;
  }

  render() {


  }

}
