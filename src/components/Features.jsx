import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";

// Sector data for Dhruva Group with detailed information
const sectors = [
    {
        id: "defence",
        title: "Defence",
        description: "Strategic defence solutions and advanced military technologies for national security.",
        details: [
            "Next-gen surveillance systems",
            "Tactical communication networks",
            "Autonomous defence platforms",
            "Military-grade cybersecurity"
        ],
        gradient: "from-red-900/40 via-dhruva-dark to-dhruva-black",
        icon: "🛡️",
        stats: { projects: "50+", countries: "12" },
        geometry: "shield"
    },
    {
        id: "ai",
        title: "AI",
        description: "Cutting-edge artificial intelligence systems driving innovation across industries.",
        details: [
            "Machine learning solutions",
            "Natural language processing",
            "Computer vision systems",
            "Predictive analytics platforms"
        ],
        gradient: "from-blue-900/40 via-dhruva-dark to-dhruva-black",
        icon: "🤖",
        stats: { models: "100+", accuracy: "99.2%" },
        geometry: "neural"
    },
    {
        id: "agritech",
        title: "AgriTech",
        description: "Revolutionary agricultural technology transforming farming and food production.",
        details: [
            "Smart irrigation systems",
            "Crop health monitoring",
            "Precision farming tools",
            "Supply chain optimization"
        ],
        gradient: "from-green-900/40 via-dhruva-dark to-dhruva-black",
        icon: "🌱",
        stats: { farmers: "10K+", yield: "+40%" },
        geometry: "leaf"
    },
    {
        id: "corporate",
        title: "Corporate",
        description: "Enterprise solutions and strategic consulting for business excellence.",
        details: [
            "Digital transformation",
            "Process optimization",
            "Strategic consulting",
            "Change management"
        ],
        gradient: "from-purple-900/40 via-dhruva-dark to-dhruva-black",
        icon: "🏢",
        stats: { clients: "200+", success: "95%" },
        geometry: "hexagon"
    },
    {
        id: "security",
        title: "Security",
        description: "Advanced security systems and cyber protection for critical infrastructure.",
        details: [
            "Threat intelligence",
            "Network security",
            "Identity management",
            "Incident response"
        ],
        gradient: "from-teal-900/40 via-dhruva-dark to-dhruva-black",
        icon: "🔐",
        stats: { threats: "1M+", uptime: "99.99%" },
        geometry: "lock"
    },
];

// Geometric pattern components for cards
const CardGeometry = ({ type, className = "" }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (svgRef.current) {
            gsap.to(svgRef.current, {
                rotation: 360,
                duration: 30,
                repeat: -1,
                ease: "none",
                transformOrigin: "center center"
            });
        }
    }, []);

    const patterns = {
        shield: (
            <svg ref={svgRef} className={className} width="200" height="200" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <path d="M100 20 L160 50 L160 100 C160 140 130 170 100 180 C70 170 40 140 40 100 L40 50 Z"
                    fill="none" stroke="url(#shieldGrad)" strokeWidth="1" />
                <path d="M100 40 L140 60 L140 95 C140 125 120 145 100 155 C80 145 60 125 60 95 L60 60 Z"
                    fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
                <circle cx="100" cy="90" r="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            </svg>
        ),
        neural: (
            <svg ref={svgRef} className={className} width="200" height="200" viewBox="0 0 200 200">
                {/* Neural network pattern */}
                {[...Array(6)].map((_, i) => (
                    <g key={i}>
                        <circle
                            cx={100 + 50 * Math.cos(i * Math.PI / 3)}
                            cy={100 + 50 * Math.sin(i * Math.PI / 3)}
                            r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3"
                        />
                        <line
                            x1="100" y1="100"
                            x2={100 + 50 * Math.cos(i * Math.PI / 3)}
                            y2={100 + 50 * Math.sin(i * Math.PI / 3)}
                            stroke="#D4AF37" strokeWidth="0.3" opacity="0.2"
                        />
                    </g>
                ))}
                <circle cx="100" cy="100" r="12" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.15" strokeDasharray="5,5" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#2dd4bf" strokeWidth="0.3" opacity="0.1" />
            </svg>
        ),
        leaf: (
            <svg ref={svgRef} className={className} width="200" height="200" viewBox="0 0 200 200">
                {/* Fibonacci leaf spiral */}
                <path d="M100 180 Q60 140 60 100 Q60 40 100 20 Q140 40 140 100 Q140 140 100 180"
                    fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
                <path d="M100 160 Q75 130 75 100 Q75 55 100 40 Q125 55 125 100 Q125 130 100 160"
                    fill="none" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.2" />
                {/* Spiral veins */}
                {[...Array(5)].map((_, i) => (
                    <path key={i}
                        d={`M100 ${180 - i * 30} Q${90 - i * 5} ${150 - i * 25} ${80 - i * 3} ${120 - i * 20}`}
                        fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity={0.2 - i * 0.03}
                    />
                ))}
            </svg>
        ),
        hexagon: (
            <svg ref={svgRef} className={className} width="200" height="200" viewBox="0 0 200 200">
                {/* Nested hexagons */}
                {[80, 60, 40, 20].map((size, i) => (
                    <polygon key={i}
                        points={[...Array(6)].map((_, j) =>
                            `${100 + size * Math.cos(j * Math.PI / 3 - Math.PI / 6)},${100 + size * Math.sin(j * Math.PI / 3 - Math.PI / 6)}`
                        ).join(' ')}
                        fill="none" stroke="#D4AF37" strokeWidth={0.5 + i * 0.2} opacity={0.3 - i * 0.05}
                    />
                ))}
                {/* Connection lines */}
                {[...Array(6)].map((_, i) => (
                    <line key={i}
                        x1={100 + 20 * Math.cos(i * Math.PI / 3 - Math.PI / 6)}
                        y1={100 + 20 * Math.sin(i * Math.PI / 3 - Math.PI / 6)}
                        x2={100 + 80 * Math.cos(i * Math.PI / 3 - Math.PI / 6)}
                        y2={100 + 80 * Math.sin(i * Math.PI / 3 - Math.PI / 6)}
                        stroke="#2dd4bf" strokeWidth="0.3" opacity="0.15"
                    />
                ))}
            </svg>
        ),
        lock: (
            <svg ref={svgRef} className={className} width="200" height="200" viewBox="0 0 200 200">
                {/* Lock shape */}
                <rect x="60" y="90" width="80" height="70" rx="5" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
                <path d="M80 90 L80 70 Q80 40 100 40 Q120 40 120 70 L120 90" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
                <circle cx="100" cy="120" r="10" fill="none" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3" />
                {/* Keyhole */}
                <line x1="100" y1="125" x2="100" y2="140" stroke="#D4AF37" strokeWidth="1" opacity="0.2" />
                {/* Security rings */}
                <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.1" strokeDasharray="10,5" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.05" />
            </svg>
        )
    };

    return patterns[type] || patterns.hexagon;
};

// Fibonacci spiral for cards
const CardSpiral = ({ className = "" }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (svgRef.current) {
            gsap.to(svgRef.current, {
                rotation: -360,
                duration: 40,
                repeat: -1,
                ease: "none",
                transformOrigin: "center center"
            });
        }
    }, []);

    return (
        <svg ref={svgRef} className={className} width="150" height="150" viewBox="0 0 150 150">
            {[34, 55, 89].map((r, idx) => (
                <circle key={idx} cx="75" cy="75" r={r * 0.8} fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity={0.15 - idx * 0.03} />
            ))}
            <path d="M75 75 Q95 55 115 75 Q95 95 75 115 Q55 95 35 75 Q55 55 75 35"
                fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
        </svg>
    );
};

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle, transition: "transform 0.3s ease-out" }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ title, description, gradient, icon, details, stats, geometry, isComingSoon, learnMore }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();
        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className={`relative size-full bg-gradient-to-br ${gradient} overflow-hidden group`}>
            {/* Animated geometric pattern */}
            <div className="absolute -right-10 -top-10 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <CardGeometry type={geometry} />
            </div>

            {/* Fibonacci spiral bottom left */}
            <div className="absolute -left-10 -bottom-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <CardSpiral />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                    backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-20 h-20 border border-gold-500/20 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-20 left-8 w-12 h-12 border border-teal-400/15 rounded-full"></div>

            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
                <div>
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                    <h1 className="bento-title text-gold-500 special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-sm text-white/70 md:text-base font-manrope">{description}</p>
                    )}

                    {/* Additional details */}
                    {details && details.length > 0 && (
                        <ul className="mt-4 space-y-1">
                            {details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-white/50 font-manrope group-hover:text-white/70 transition-colors">
                                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Stats */}
                    {stats && (
                        <div className="mt-4 flex gap-6">
                            {Object.entries(stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <p className="text-gold-500 font-bold text-xl group-hover:scale-110 transition-transform">{value}</p>
                                    <p className="text-white/40 text-xs uppercase tracking-wide">{key}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {learnMore && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border border-gold-500/30 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-dhruva-black/80 px-5 py-2 text-xs uppercase text-gold-500 hover:border-gold-500/60 transition-colors"
                    >
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(212, 175, 55, 0.3), transparent)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20 font-manrope">Learn More</p>
                    </div>
                )}
                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border border-teal-400/30 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-dhruva-black/80 px-5 py-2 text-xs uppercase text-teal-400 hover:border-teal-400/60 transition-colors"
                    >
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(45, 212, 191, 0.3), transparent)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20 font-manrope">Coming Soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Features = () => (
    <section id="sectors" className="bg-dhruva-black pb-52 relative overflow-hidden">
        {/* Background geometry */}
        <div className="absolute top-20 left-10 opacity-10">
            <CardGeometry type="hexagon" className="w-[300px] h-[300px]" />
        </div>

        <div className="container mx-auto px-3 md:px-10 relative z-10">
            <div className="px-5 py-32">
                <p className="font-cormorant text-3xl text-gold-500 mb-2">
                    Our Sectors
                </p>
                <p className="max-w-md font-manrope text-lg text-white/50">
                    Dhruva Group operates across five strategic sectors, each driven by innovation and excellence to shape the future of industries.
                </p>
            </div>

            {/* Main featured sector - Defence */}
            <BentoTilt className="border border-gold-500/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] hover:border-gold-500/40 transition-colors">
                <BentoCard
                    title={<>Def<b>e</b>nce</>}
                    description="Strategic defence solutions and advanced military technologies protecting national interests with cutting-edge innovation."
                    gradient={sectors[0].gradient}
                    icon={sectors[0].icon}
                    details={sectors[0].details}
                    stats={sectors[0].stats}
                    geometry={sectors[0].geometry}
                    learnMore
                />
            </BentoTilt>

            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                {/* AI Sector */}
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                    <BentoCard
                        title={<>Artif<b>i</b>cial<br />Intell<b>i</b>gence</>}
                        description="Pioneering AI solutions that transform data into actionable intelligence across industries."
                        gradient={sectors[1].gradient}
                        icon={sectors[1].icon}
                        details={sectors[1].details}
                        stats={sectors[1].stats}
                        geometry={sectors[1].geometry}
                        learnMore
                    />
                </BentoTilt>

                {/* AgriTech Sector */}
                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                    <BentoCard
                        title={<>Agr<b>i</b>Tech</>}
                        description="Sustainable agricultural technology revolutionizing farming practices worldwide."
                        gradient={sectors[2].gradient}
                        icon={sectors[2].icon}
                        details={sectors[2].details}
                        stats={sectors[2].stats}
                        geometry={sectors[2].geometry}
                        learnMore
                    />
                </BentoTilt>

                {/* Corporate Sector */}
                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                    <BentoCard
                        title={<>Corp<b>o</b>rate</>}
                        description="Enterprise excellence through strategic consulting and business transformation."
                        gradient={sectors[3].gradient}
                        icon={sectors[3].icon}
                        details={sectors[3].details}
                        stats={sectors[3].stats}
                        geometry={sectors[3].geometry}
                        learnMore
                    />
                </BentoTilt>

                {/* Coming Soon Card */}
                <BentoTilt className="bento-tilt_2 border border-gold-500/10 hover:border-gold-500/40 transition-colors">
                    <div className="flex size-full flex-col justify-between bg-gradient-to-br from-gold-500 to-gold-700 p-5 relative overflow-hidden group">
                        {/* Geometric pattern */}
                        <div className="absolute -right-10 -top-10 opacity-20">
                            <svg width="150" height="150" viewBox="0 0 150 150">
                                {[...Array(4)].map((_, i) => (
                                    <polygon key={i}
                                        points={[...Array(6)].map((_, j) =>
                                            `${75 + (50 - i * 10) * Math.cos(j * Math.PI / 3)},${75 + (50 - i * 10) * Math.sin(j * Math.PI / 3)}`
                                        ).join(' ')}
                                        fill="none" stroke="#0a0a0f" strokeWidth="1" opacity={0.3}
                                    />
                                ))}
                            </svg>
                        </div>
                        <h1 className="bento-title special-font max-w-64 text-dhruva-black">
                            M<b>o</b>re Sec<b>t</b>ors<br />C<b>o</b>ming S<b>o</b>on
                        </h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end text-dhruva-black group-hover:scale-[6] transition-transform" />
                    </div>
                </BentoTilt>

                {/* Security Sector */}
                <BentoTilt className="bento-tilt_2 border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                    <BentoCard
                        title={<>Sec<b>u</b>rity</>}
                        description="Advanced security systems protecting critical infrastructure."
                        gradient={sectors[4].gradient}
                        icon={sectors[4].icon}
                        details={sectors[4].details}
                        stats={sectors[4].stats}
                        geometry={sectors[4].geometry}
                        isComingSoon
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
);

export default Features;
