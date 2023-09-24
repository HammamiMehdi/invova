import React, { useEffect } from 'react';
import * as THREE from 'three'
import './MovePath.css'; // Import your CSS file for styling
import 'animate.css';
import logo from '../../assets/images/logo.png';
import styled, { keyframes } from 'styled-components';
import InfiniteLoopSlider from './infinityLoopSlider/InfinityLoopSlider'



// Define a styled-component for .canvas-container

const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
grid-template-columns: 55% 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

const CenteredH2 = styled.h1`
  grid-column: 1 / 2; /* Place the h2 in the center grid column */
  grid-row: 1;
  position: absolute;
  top: 50%;
  left: 40%;
  text-align: start;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  /* Add other styles for your heading */
`;

const InfiniteLoopSliderContainer = styled.div`
  grid-column: 2 / 2; /* Place the InfiniteLoopSlider in the second grid column */
  grid-row: 1;
  right: 0;
`;


const MovePath = () => {
  useEffect(() => {
    // Add your JavaScript code here

    // HTML Script Tags
    const script1 = document.createElement('script');
    script1.src = 'https://ga.jspm.io/npm:es-module-shims@1.5.1/dist/es-module-shims.js';
    script1.async = true;
    script1.crossOrigin = 'anonymous';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'importmap';
    script2.innerHTML = `{
      "imports": {
        "three": "https://unpkg.com/three@0.155.0/build/three.module.js",
        "three/addons/": "https://unpkg.com/three@0.155.0/examples/jsm/"
      }
    }`;
    document.head.appendChild(script2);

    // JavaScript Code
    const init = () => {
      console.clear();

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight);
      camera.position.set(0, 0, 10);
      camera.lookAt(scene.position);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animationLoop);
      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', (event) => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const N = 20;
      const L = 150;

      const colors = [];
      const color = new THREE.Color();
      for (let i = 0; i < N; i++) {
        color.setHSL(0.6, 1, (1 - i / (N - 1)) ** 4);
        colors.push(color.r, color.g, color.b);
      }

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
      });

      let geometry, line;
      const lines = [];
      for (let i = 0; i < L; i++) {
        geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        line = new THREE.Line(geometry, material);
        line.pos = geometry.getAttribute('position');
        line.rnd = Math.random();

        lines.push(line);
      }
      scene.add(...lines);

      function path(buf, t, i, rnd) {
        t += 10 * rnd;

        const x = (0.1 + 3 * rnd) * Math.sin(t + 13 * rnd) + 2 * rnd * Math.cos(3.2 * t + 3);
        const y = (3 - 3 * rnd) * Math.cos(t) + 2 * rnd * Math.cos(4.5 * t - 7 * rnd);
        const z = (3 * rnd ** 2) * Math.sin(2.7 * t - 4 * rnd);
        buf.setXYZ(i, x, y, z);
      }

      function animationLoop(t) {
        for (const line of lines) {
          for (let i = 0; i < N; i++) path(line.pos, t / 3000 - i / 50, i, line.rnd);

          line.pos.needsUpdate = true;
        }

        renderer.render(scene, camera);
      }
    };

    init(); // Call the initialization function

    // Clean up the script tags when the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  return (
    <>
   
    <CanvasContainer>
    <InfiniteLoopSliderContainer>
      <InfiniteLoopSlider />
    </InfiniteLoopSliderContainer>
      <CenteredH2>Unlocking Innovation: Partner with Invova to Propel Your Business into the Digital Future</CenteredH2>
      

    </CanvasContainer>
  </>
  );
};

export default MovePath;
