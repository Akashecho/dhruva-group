import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dhruva-black via-dhruva-dark to-dhruva-black">
          {/* Orbital lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-gold-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border border-teal-400/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-gold-500/40 rounded-full"></div>
          </div>

          {/* Spotlight gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-gold-500/10 via-transparent to-transparent blur-3xl"></div>

          {/* Noise overlay */}
          <div className="absolute inset-0 noise-overlay"></div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-white/90">
          GR<b>O</b>UP
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-gold-500">
              DHR<b>U</b>V<b>A</b>
            </h1>

            <p className="mb-5 max-w-md font-manrope text-lg text-white/70 mt-4">
              Pioneering Excellence Across Industries — Defence, AI, AgriTech, Corporate & Security
            </p>

            <Button
              id="explore-vision"
              title="Explore Our Vision"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-gold-500 flex-center gap-1 text-dhruva-black hover:bg-gold-400 transition-colors"
            />
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
