// Vertex Shader
var ASG4_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;

  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;

  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_NormalMatrix;

  attribute vec4 a_Normal;
  varying vec3 v_Normal;

  void main() {
    v_TexCoord = a_TexCoord;
    v_Position = vec3(u_ModelMatrix * a_Position);
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;

// Fragment Shader
var ASG4_FSHADER =
  `precision mediump float;
  varying vec2 v_TexCoord;

  uniform float Ka;   // Ambient reflection coefficient
  uniform float Kd;   // Diffuse reflection coefficient
  uniform float Ks;   // Specular reflection coefficient
  uniform float shininessVal; // Shininess

  varying vec3 v_Normal; //surface normal
  varying vec3 v_Position; //vertex position

  uniform vec3 u_DiffuseColor;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_LightPosition;
  uniform vec3 u_SpecularColor;
  uniform sampler2D u_Sampler;

  void main() {
      vec4 v_Color = texture2D(u_Sampler, v_TexCoord);
      vec3 N = normalize(v_Normal);
      vec3 L = normalize(u_LightPosition - v_Position);
      // Lambert's cosine law
      float lambertian = max(dot(N, L), 0.0);
      float specular = 0.0;
      if(lambertian > 0.0) {
          vec3 R = reflect(-L, N);      // Reflected light vector
          vec3 V = normalize(-v_Position); // Vector to viewer
          // Compute the specular term
          float specAngle = max(dot(R, V), 0.0);
          specular = pow(specAngle, shininessVal);
      }
      gl_FragColor = vec4((Ka * u_AmbientColor * v_Color.rgb) + (Kd * lambertian * u_DiffuseColor * v_Color.rgb) + (Ks * specular * u_SpecularColor * v_Color.rgb), 1.0);
}`;
