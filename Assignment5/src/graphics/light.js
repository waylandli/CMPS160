class Light {
    constructor(x, y, z) {
        this.pos = new Vector3([x, y, z]);

        // light colors
        this.ambient = [0.4, 0.4, 0.4];
        this.diffuse = [0.7, 0.7, 0.7];
        this.specular = [0.7, 0.7, 0.7];
        // Later you will add specular here too.
    }
}
