
class Circle extends Geometry {

  constructor(shader, g_points, sizeOfShape, stepCount) {
      super(shader);

      this.sizeOfShape= sizeOfShape
      this.vertices = this.generateCircleVertices(g_points, sizeOfShape, stepCount);
      this.faces = {0: this.vertices};

      this.x = g_points[0]
      this.y = g_points[1]

      this.modelMatrix = new Matrix4();
      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(this.move,this.move,0);
      this.count = 0
      this.move = 0
      this.movex = 0
      this.movey = 0
      this.directionx = 0
      this.directiony = 0

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices(g_points, sizeOfShape, stepCount) {
      var vertices = []
      var x = 0
      var y = 0
      var counter = 360 / stepCount

      var centerVertex = new Vertex(g_points[0], g_points[1], 0.0);




     for (var count = 0; count < 360; count = count + counter ) {

        vertices.push(centerVertex);

        x = Math.cos(count * (Math.PI/180)) * sizeOfShape
        y = Math.sin(count * (Math.PI/180)) * sizeOfShape
        var vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0);
        vertices.push(vertex);

        x = Math.cos((count + counter) * (Math.PI/180) ) * sizeOfShape
        y = Math.sin((count + counter) * (Math.PI/180) ) * sizeOfShape
        vertex = new Vertex(g_points[0] + x, g_points[1] + y, 0.0);
        vertices.push(vertex);


      }
      return vertices;
  }

  render() {

      if (this.count == 0) {
        this.move = .0025
        this.directionx = Math.floor(Math.random() * 2);
        this.directiony = Math.floor(Math.random() * 2);

        if (this.directionx == 0) {
          this.movex = -this.move
        }
        else {
          this.movex = this.move
        }

        if (this.directiony == 0) {
          this.movey = -this.move
        }
        else {
          this.movey = this.move
        }

        this.count++
      }
      else if (this.count != 50) {
        this.translationMatrix.setTranslate(this.movex,this.movey,0);
        this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
        this.count++
      }
      else {
        this.count = 0
     }
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
