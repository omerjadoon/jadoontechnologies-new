"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function ParticlesWave() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    // ---- Original constants ----
    const SEPARATION = 100;
    const AMOUNTX = 100;
    const AMOUNTY = 70;

    let width = container.clientWidth;
    let height = container.clientHeight;

    let camera, scene, renderer, points, animationFrameId;
    let count = 0;

    let mouseX = 85;
    let mouseY = -342;
    let windowHalfX = width / 2;
    let windowHalfY = height / 2;

    // ---- Renderer / scene / camera ----
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(120, width / height, 1, 10000);
    camera.position.y = 450; // Tilted view (top to bottom)
    camera.position.z = 900;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent
    container.appendChild(renderer.domElement);

    // ---- Geometry (grid of points like original) ----
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const sizes = new Float32Array(numParticles); // per-particle scale
    const colors = new Float32Array(numParticles * 3); // per-particle color
    const opacities = new Float32Array(numParticles); // per-particle opacity

    const colorPalette = [
      new THREE.Color(0xFFFFFF), // Pure White
      new THREE.Color(0xF8FAFC), // Slate 50 (Almost White)
      new THREE.Color(0xF1F5F9), // Slate 100 (Very Light)
      new THREE.Color(0xE0E7FF), // Indigo 100 (Light with hint of blue)
      new THREE.Color(0xDEEAFE), // Blue 100 (Light Blue)
    ];

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        const index = i * 3;
        positions[index] = x;
        positions[index + 1] = y;
        positions[index + 2] = z;

        sizes[i] = 1.0; // will animate later

        // Assign random color from palette
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[index] = color.r;
        colors[index + 1] = color.g;
        colors[index + 2] = color.b;

        // Assign random opacity between 0.3 and 0.6 for more visibility
        opacities[i] = Math.random() * (0.6 - 0.3) + 0.3;

        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));

    // ---- Shader material for perfectly round points ----
    const uniforms = {
      uBaseSize: { value: 4.0 }, // base size, will be multiplied by aSize
      uPixelRatio: { value: renderer.getPixelRatio() },
    };

    const vertexShader = `
      attribute float aSize;
      attribute vec3 color;
      attribute float aOpacity;
      varying vec3 vColor;
      varying float vOpacity;
      uniform float uBaseSize;
      uniform float uPixelRatio;

      void main() {
        vColor = color;
        vOpacity = aOpacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // make size react to perspective a bit, like sprites in distance
        float size = aSize * uBaseSize * uPixelRatio * (300.0 / -mvPosition.z);
        gl_PointSize = size;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vOpacity;

      void main() {
        // gl_PointCoord is (0..1, 0..1) inside the sprite
        vec2 c = gl_PointCoord - vec2(0.5);
        float dist = length(c);

        // hard-ish circular mask
        if (dist > 0.5) discard;

        // soft edge
        float alpha = 1.0 - smoothstep(0.4, 0.5, dist);
        gl_FragColor = vec4(vColor, alpha * vOpacity);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending, // Changed from Additive to Normal for better color visibility
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Mouse / touch interaction REMOVED for static background ----
    /*
    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      windowHalfX = rect.width / 2;
      windowHalfY = rect.height / 2;

      mouseX = x - windowHalfX;
      mouseY = y - windowHalfY;
    };

    const onTouchStart = (event) => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = touch.pageX - rect.left - windowHalfX;
        mouseY = touch.pageY - rect.top - windowHalfY;
      }
    };

    const onTouchMove = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = touch.pageX - rect.left - windowHalfX;
        mouseY = touch.pageY - rect.top - windowHalfY;
      }
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    */

    // ---- Resize handling ----
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      windowHalfX = width / 2;
      windowHalfY = height / 2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };

    window.addEventListener("resize", onResize);

    // ---- Animation loop (port of your render() + animate()) ----
    const animate = () => {
      const posArray = geometry.attributes.position.array;
      const sizeArray = geometry.attributes.aSize.array;

      // camera easing toward mouse - REMOVED, keeping static or slow drift
      // camera.position.x += (mouseX - camera.position.x) * 0.01;
      // camera.position.y += (-mouseY - camera.position.y) * 0.01;

      // Optional: Add a very slow automatic drift if desired, or just keep static
      // For now, keeping it static/centered as per "stay in background"
      camera.lookAt(scene.position);

      let i = 0;
      let idx = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // y movement
          const yPos =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;

          posArray[idx + 1] = yPos;

          // scale like original:
          // particle.scale.x = particle.scale.y =
          //   (Math.sin((ix + count) * 0.3) + 1) * 2 +
          //   (Math.sin((iy + count) * 0.5) + 1) * 2;
          const sizeVal =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2;
          sizeArray[i] = sizeVal;

          idx += 3;
          i++;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aSize.needsUpdate = true;

      renderer.render(scene, camera);

      count += 0.1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // ---- Cleanup ----
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      // window.removeEventListener("mousemove", onPointerMove);
      // window.removeEventListener("touchstart", onTouchStart);
      // window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none select-none absolute inset-0 -z-10"
      aria-hidden="true"
    >


    </div>
  );
}
