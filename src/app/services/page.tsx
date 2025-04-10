"use client";

import React, { useEffect } from "react";
import { Header } from "../../sections/Header";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import '../services/services.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function ServicesPage() {
  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis RAF method to GSAP ticker for smoother scrolling
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's lag smoothing for smoother scrolling
    gsap.ticker.lagSmoothing(0);

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.model')?.appendChild(renderer.domElement);

    camera.position.set(0, 1, 5); // Adjust camera position


    console.log(scene.children);

const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Increase ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(3, 5, 2); // Move light in front of model
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.position.set(0, 2, 5); // Put it near the front
scene.add(pointLight);
    // Declare model
    let model: THREE.Object3D | null = null;

    // Create an instance of the loader
    const loader = new GLTFLoader();

    loader.load(
      '/models/scene.gltf', // Update path to your model if needed
      (gltf) => {
        model = gltf.scene;
        model.traverse((node) => {
          if ((node as THREE.Mesh).isMesh && (node as THREE.Mesh).material) {
            const mesh = node as THREE.Mesh;
            // Type casting to MeshStandardMaterial to access specific properties
            const material = mesh.material as THREE.MeshStandardMaterial;
            material.metalness = 0.8;  // ✅ Between 0 and 1
            material.roughness = 0.5;  // ✅ Between 0 and 1
            material.envMapIntensity = 2; // ✅ Lower intensity
            
          }
          node.castShadow = true;
          node.receiveShadow = true;
        });

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        scene.add(model);

        // Adjust camera position based on model size
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.z = maxDim * 1.75;

        model.rotation.set(2, 3.5, 0);

        // Play floating animation
        playFloatingAnimation();

        // Start the animation loop
        animate();
      },
      undefined,
      (error) => console.error('Error loading GLTF model:', error)
    );

    // Floating effect variables
    const floatAmplitude = 0.2; // Height of floating
    const floatSpeed = 1.5; // Speed of floating movement
    let currentScroll = 0;
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Play floating animation using GSAP
    function playFloatingAnimation() {
      if (model) {
        gsap.to(model.position, {
          y: `+=${floatAmplitude}`,
          duration: floatSpeed,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }

    // Scroll event listener with Lenis
    lenis.on('scroll', (e) => {
      currentScroll = e.scroll;
    });

    // Animate model based on scroll position
    function animate() {
      if (model) {
        const scrollProgress = Math.min(currentScroll / totalScrollHeight, 1);
        const baseTilt = 0.5;
        model.rotation.x = scrollProgress * Math.PI * 4 + baseTilt;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    animate();

    // Clean up when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      document.querySelector('.model')?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="model"></div>

      <div className="services-star services-body">
        <section className="intro">
          <div className="header-row">
            <h1 className="services-h1">Expert Care</h1>
          </div>
          <div className="header-row">
            <h1 className="services-h1">For Your Smile</h1>
            <p>OPTIMUS Dental Studio - Leading dental care with a focus on quality and precision.</p>
          </div>
          <div className="header-row">
            <h1 className="services-h1">Creating</h1>
          </div>
        </section>

        <section className="archive">
          <div className="archive-header">
            <p>Our Services</p>
          </div>
          {[...Array(6)].map((_, index) => (
            <div className="archive-item" key={index}>
              <h2>OPTIMUS</h2>
              <div className="archive-info">
                <p>Cosmetic Dentistry</p>
                <p>High-end Technology</p>
                <p>Personalized Treatment</p>
                <p>Expert Dentists</p>
              </div>
            </div>
          ))}
        </section>

        <section className="outro">
          <div className="outro-copy">
            <h2>We are a high-quality dental studio specializing in advanced cosmetic dentistry, dental implants, and restorative procedures.</h2>
            <p>For appointments: <span>contact@optimusdental.com</span></p>
            <p>For inquiries: <span>info@optimusdental.com</span></p>
          </div>
          <div className="footer">
            <p>OPTIMUS Dental Studio - Where quality and care meet.</p>
            <p>Built by SophieFlare</p>
          </div>
        </section>
      </div>
    </div>
  );
}
