import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

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
    <div id="about" className="min-h-screen w-screen bg-dhruva-black">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-manrope text-sm uppercase md:text-[10px] text-gold-500 tracking-[0.3em]">
          Welcome to Dhruva Group
        </p>

        <AnimatedTitle
          title="Buil<b>d</b>ing Tom<b>o</b>rrow's <br /> Indus<b>t</b>ries T<b>o</b>day"
          containerClass="mt-5 !text-white text-center"
        />

        <div className="about-subtext">
          <p className="text-white/80">Excellence Redefined Across Five Strategic Sectors</p>
          <p className="text-gold-500/70 mt-2">
            From defence innovation to agricultural transformation, Dhruva Group pioneers solutions that shape the future of industries worldwide.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          {/* Gradient placeholder for about section */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-dhruva-dark to-teal-400/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center glow-gold">
                  <span className="font-cormorant font-bold text-dhruva-black text-6xl">D</span>
                </div>
                <p className="font-cormorant text-4xl text-white/90">Dhruva Group</p>
                <p className="font-manrope text-gold-500/80 mt-2">Excellence • Innovation • Impact</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-gold-500/30 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 border border-teal-400/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;