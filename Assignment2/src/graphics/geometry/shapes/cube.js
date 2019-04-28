
class Cube extends Geometry {

  constructor(shader, g_points, sizeOfShape) {
      super(shader);

      this.sizeOfShape= sizeOfShape
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
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Back of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Right of Cube
    var vertex1 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex5 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Left of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex2 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex3 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex6 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Top of Cube
    var vertex1 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex2 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex3 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), 0.0);
    var vertex5 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex6 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]+Number(sizeOfShape), -Number(sizeOfShape) * 2);

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    // Bottom of Cube
    var vertex1 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex2 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex3 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex4 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), 0.0);
    var vertex5 = new Vertex(g_points[0]+Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);
    var vertex6 = new Vertex(g_points[0]-Number(sizeOfShape), g_points[1]-Number(sizeOfShape), -Number(sizeOfShape) * 2);

    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);
    vertices.push(vertex6);

    return vertices;
  }

  render() {

    if (this.count == 0) {

      this.translationMatrix.setTranslate(this.x,this.y,0);
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

      this.rotationMatrix.setRotate(30,1,0,0);
      this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);

      this.translationMatrix.setTranslate(-this.x, -this.y, 0)
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

      this.count++
    }

    this.translationMatrix.setTranslate(this.x,this.y,0);
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

    this.rotationMatrix.setRotate(1,0,1,0);
    this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);

    this.translationMatrix.setTranslate(-this.x, -this.y, 0)
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);

    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
