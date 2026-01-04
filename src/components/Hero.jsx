import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FibonacciSpiral, GeometricParticles, SacredMandala, AnimatedGrid } from "./Geometries";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animate hero text on load
  useEffect(() => {
    if (!loading && textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll('.hero-animate'),
        { y: 100, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [loading]);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-dhruva-black">
          {/* Animated Fibonacci loader */}
          <div className="relative">
            <FibonacciSpiral size={150} color="#D4AF37" className="animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dhruva-black via-dhruva-dark to-dhruva-black">

          {/* Animated Grid */}
          <AnimatedGrid />

          {/* Fibonacci Spiral - Left */}
          <div className="absolute -left-32 top-1/4 opacity-40">
            <FibonacciSpiral size={500} color="#D4AF37" />
          </div>

          {/* Sacred Mandala - Right */}
          <div className="absolute -right-20 bottom-1/4 opacity-30">
            <SacredMandala size={400} />
          </div>

          {/* Geometric Particles floating */}
          <GeometricParticles />

          {/* Orbital rings */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-gold-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border border-teal-400/15 rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-2 border-gold-500/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
          </div>

          {/* Dynamic spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-gold-500/15 via-transparent to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-gradient-radial from-teal-400/10 via-transparent to-transparent blur-3xl"></div>

          {/* Noise overlay */}
          <div className="absolute inset-0 noise-overlay"></div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-white/90">
          GR<b>O</b>UP
        </h1>

        <div ref={textRef} className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-gold-500 hero-animate">
              DHR<b>U</b>V<b>A</b>
            </h1>

            <p className="mb-5 max-w-md font-manrope text-lg text-white/70 mt-4 hero-animate">
              Pioneering Excellence Across Industries — Defence, AI, AgriTech, Corporate & Security
            </p>

            <div className="hero-animate">
              <Button
                id="explore-vision"
                title="Explore Our Vision"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-gold-500 flex-center gap-1 text-dhruva-black hover:bg-gold-400 transition-colors glow-gold"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gold-500/60 text-xs font-manrope uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gold-500/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-gold-500/30">
        GR<b>O</b>UP
      </h1>
    </div>
  );
};

export default Hero;
