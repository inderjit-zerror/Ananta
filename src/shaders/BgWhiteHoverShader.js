 export const fragmentShader = `
   uniform vec2 uMouse;
    uniform float uRadius;
    uniform vec2 uResolution;
    varying vec2 vUv;
    
    void main() {
      // Convert UV to screen space
      vec2 screenPos = vUv * uResolution;
      
      // Calculate distance from mouse
      float dist = distance(screenPos, uMouse);
      
      // Create smooth circular gradient
      float alpha = smoothstep(uRadius * 0.5, uRadius, dist);

      
      // White color with calculated opacity
      gl_FragColor = vec4(0.90588, 0.85098, 0.74902, alpha * 0.75);
    }
  `;

 export const vertexShader = `
   varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
