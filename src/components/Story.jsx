import gsap from "gsap";
import { useRef, useEffect } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import { FibonacciSpiral, SacredMandala } from "./Geometries";

// Founder data with actual images
const founders = [
  {
    name: "Akash",
    role: "Co-Founder",
    description: "Visionary leader driving innovation across defence and technology sectors.",
    image: "/img/akash.png",
  },
  {
    name: "Abhijeet",
    role: "Co-Founder",
    description: "Strategic mind behind corporate excellence and sustainable growth initiatives.",
    image: "/img/abhijeet.jpeg",
  }
];

// Geometric pattern for founder cards
const FounderGeometry = ({ className = "" }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });
    }
  }, []);

  return (
    <svg ref={svgRef} className={className} width="250" height="250" viewBox="0 0 250 250">
      {/* Flower of life pattern */}
      {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
        <circle
          key={idx}
          cx={125 + 40 * Math.cos(angle * Math.PI / 180)}
          cy={125 + 40 * Math.sin(angle * Math.PI / 180)}
          r="40"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}
      <circle cx="125" cy="125" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />

      {/* Outer rings */}
      {[70, 90, 110].map((r, idx) => (
        <circle
          key={idx}
          cx="125"
          cy="125"
          r={r}
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.3"
          opacity={0.15 - idx * 0.03}
          strokeDasharray={idx % 2 === 0 ? "8,4" : "none"}
        />
      ))}

      {/* Radiating lines */}
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="125"
          y1="125"
          x2={125 + 110 * Math.cos((i * 30) * Math.PI / 180)}
          y2={125 + 110 * Math.sin((i * 30) * Math.PI / 180)}
          stroke="#2dd4bf"
          strokeWidth="0.3"
          opacity="0.1"
        />
      ))}
    </svg>
  );
};

const FounderCard = ({ name, role, description, image }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = cardRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -5;
    const rotateY = ((xPos - centerX) / centerX) * 5;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = cardRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full md:w-[380px] bg-gradient-to-br from-dhruva-dark via-dhruva-black to-dhruva-gray rounded-2xl overflow-hidden border border-gold-500/20 cursor-pointer group hover:border-gold-500/40 transition-all duration-500"
    >
      {/* Animated geometric pattern */}
      <div className="absolute -right-16 -top-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <FounderGeometry />
      </div>

      {/* Fibonacci spiral bottom */}
      <div className="absolute -left-12 -bottom-12 opacity-15 group-hover:opacity-30 transition-opacity duration-500">
        <FibonacciSpiral size={150} color="#D4AF37" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '25px 25px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 border border-gold-500/30 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-20"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border border-teal-400/20 rounded-full z-20"></div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      {/* Founder Image - Full image display */}
      <div className="w-full bg-gradient-to-br from-dhruva-gray/50 to-dhruva-dark relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dhruva-black via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 bg-dhruva-black relative">
        {/* Small decorative line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

        <p className="text-gold-500 text-sm font-manrope uppercase tracking-widest mb-1">{role}</p>
        <h3 className="font-cormorant text-3xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{name}</h3>
        <p className="text-white/60 text-sm font-manrope">{description}</p>

        {/* Social icons placeholder */}
        <div className="flex gap-3 mt-4">
          {['LinkedIn', 'Twitter'].map((social, idx) => (
            <div key={idx} className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center hover:bg-gold-500/20 transition-colors cursor-pointer">
              <span className="text-gold-500/60 text-xs">{social.charAt(0)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="vision" className="min-h-dvh w-screen bg-dhruva-black text-white relative overflow-hidden">
      {/* Background geometry */}
      <div className="absolute top-0 left-0 opacity-10">
        <FibonacciSpiral size={500} color="#D4AF37" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10">
        <SacredMandala size={400} />
      </div>

      <div className="flex size-full flex-col items-center py-10 pb-24 relative z-10">
        <p className="font-manrope text-sm text-gold-500 uppercase md:text-[10px] tracking-[0.3em]">
          The Dhruva Vision
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="The St<b>o</b>ry of <br /> Innov<b>a</b>tion & Excell<b>e</b>nce"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                {/* Interactive vision card */}
                <div
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  className="w-full h-full bg-gradient-to-br from-gold-500/20 via-dhruva-dark to-teal-400/10 rounded-3xl p-8 flex flex-col justify-center items-center cursor-pointer relative overflow-hidden"
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }}
                  />

                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 border border-gold-500/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 right-12 w-24 h-24 border border-teal-400/30 rounded-full"></div>

                  {/* Rotating mandala */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <SacredMandala size={300} />
                  </div>

                  {/* Central logo */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center mb-6 glow-gold relative z-10">
                    <span className="font-cormorant font-bold text-dhruva-black text-7xl">D</span>
                  </div>

                  <h3 className="font-cormorant text-4xl text-white/90 text-center mb-2 relative z-10">Dhruva Group</h3>
                  <p className="font-manrope text-gold-500/80 text-center relative z-10">Pioneering Tomorrow</p>
                </div>
              </div>
            </div>
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-manrope text-white/70 md:text-start">
              Where vision meets execution, Dhruva Group stands as a beacon of excellence.
              Discover our journey of innovation across defence, technology, and beyond—
              shaping industries and building a stronger tomorrow.
            </p>

            <Button
              id="journey-btn"
              title="Discover Our Journey"
              containerClass="mt-5 bg-gold-500 text-dhruva-black hover:bg-gold-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Brand Tagline Section */}
      <div className="w-full py-20 px-5 md:px-20 bg-gradient-to-b from-dhruva-black via-dhruva-dark to-dhruva-black relative overflow-hidden">
        {/* Background decorative spirals */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
          <FibonacciSpiral size={300} />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
          <SacredMandala size={250} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-manrope text-sm text-gold-500 uppercase tracking-[0.3em] mb-6">Our Philosophy</p>
          <h2 className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            "The future belongs to those who <span className="text-gold-500">build it</span>, <br className="hidden md:block" />
            not for those who <span className="text-white/50">wait for it</span>"
          </h2>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="w-full py-20 px-5 md:px-20 bg-dhruva-black relative overflow-hidden">
        {/* Background geometry */}
        <div className="absolute top-10 right-10 opacity-10">
          <SacredMandala size={400} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="font-manrope text-sm text-gold-500 uppercase tracking-[0.3em] mb-4">Leadership</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-4">
              Meet Our <span className="text-gold-500">Founders</span>
            </h2>
            <p className="font-manrope text-white/50 max-w-xl mx-auto">
              The visionary minds behind Dhruva Group, driving innovation and excellence across industries.
            </p>
          </div>

          {/* Founder Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                name={founder.name}
                role={founder.role}
                description={founder.description}
                image={founder.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;