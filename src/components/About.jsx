import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import { FibonacciSpiral, SacredMandala } from "./Geometries";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-dhruva-black relative overflow-hidden">
      {/* Background Fibonacci */}
      <div className="absolute top-0 right-0 opacity-20">
        <FibonacciSpiral size={600} color="#D4AF37" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-15">
        <SacredMandala size={400} />
      </div>

      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 z-10">
        <p className="font-manrope text-sm uppercase md:text-[10px] text-gold-500 tracking-[0.3em]">
          Welcome to Dhruva Group
        </p>

        <AnimatedTitle
          title="Buil<b>d</b>ing Tom<b>o</b>rrow's <br /> Indus<b>t</b>ries T<b>o</b>day"
          containerClass="mt-5 !text-white text-center"
        />

        <div className="about-subtext z-10">
          <p className="text-white/80">Excellence Redefined Across Five Strategic Sectors</p>
          <p className="text-gold-500/70 mt-2">
            From defence innovation to agricultural transformation, Dhruva Group pioneers solutions that shape the future of industries worldwide.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          {/* Enhanced gradient with geometric elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-dhruva-dark to-teal-400/20 overflow-hidden">
            {/* Animated grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(#D4AF37 1px, transparent 1px),
                  linear-gradient(90deg, #D4AF37 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Central content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative">
                {/* Rotating mandala behind logo */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <SacredMandala size={250} className="opacity-40" />
                </div>

                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center glow-gold relative z-10">
                  <span className="font-cormorant font-bold text-dhruva-black text-6xl">D</span>
                </div>
                <p className="font-cormorant text-4xl text-white/90">Dhruva Group</p>
                <p className="font-manrope text-gold-500/80 mt-2">Excellence • Innovation • Impact</p>

                {/* Stats row */}
                <div className="flex justify-center gap-8 mt-8">
                  {[
                    { value: "5", label: "Sectors" },
                    { value: "100+", label: "Projects" },
                    { value: "50+", label: "Partners" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-gold-500 font-cormorant text-3xl font-bold">{stat.value}</p>
                      <p className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated corner decorations */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-gold-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 left-20 w-10 h-10 border border-teal-400/40 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 border border-teal-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute bottom-10 right-20 w-16 h-16 border border-gold-500/30 rounded-full"></div>

            {/* Floating geometric shapes */}
            <svg className="absolute top-1/4 right-1/4 w-16 h-16 opacity-20 animate-bounce" viewBox="0 0 40 40">
              <polygon points="20,5 35,35 5,35" fill="none" stroke="#D4AF37" strokeWidth="1" />
            </svg>
            <svg className="absolute bottom-1/3 left-1/4 w-12 h-12 opacity-15" viewBox="0 0 40 40">
              <polygon points="20,2 35,10 35,30 20,38 5,30 5,10" fill="none" stroke="#2dd4bf" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;