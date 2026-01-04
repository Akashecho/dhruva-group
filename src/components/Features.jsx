import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

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
        stats: { projects: "50+", countries: "12" }
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
        stats: { models: "100+", accuracy: "99.2%" }
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
        stats: { farmers: "10K+", yield: "+40%" }
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
        stats: { clients: "200+", success: "95%" }
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
        stats: { threats: "1M+", uptime: "99.99%" }
    },
];

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
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
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ title, description, gradient, icon, details, stats, isComingSoon, learnMore }) => {
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
        <div className={`relative size-full bg-gradient-to-br ${gradient}`}>
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-24 h-24 border border-gold-500/20 rounded-full opacity-50"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border border-teal-400/10 rounded-full"></div>

            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
                <div>
                    <div className="text-5xl mb-4">{icon}</div>
                    <h1 className="bento-title text-gold-500 special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-sm text-white/70 md:text-base font-manrope">{description}</p>
                    )}

                    {/* Additional details */}
                    {details && details.length > 0 && (
                        <ul className="mt-4 space-y-1">
                            {details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-white/50 font-manrope">
                                    <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Stats */}
                    {stats && (
                        <div className="mt-4 flex gap-4">
                            {Object.entries(stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <p className="text-gold-500 font-bold text-lg">{value}</p>
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
                        className="border border-gold-500/30 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-dhruva-black/80 px-5 py-2 text-xs uppercase text-gold-500"
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
                        className="border border-teal-400/30 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-dhruva-black/80 px-5 py-2 text-xs uppercase text-teal-400"
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
    <section id="sectors" className="bg-dhruva-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-cormorant text-3xl text-gold-500 mb-2">
                    Our Sectors
                </p>
                <p className="max-w-md font-manrope text-lg text-white/50">
                    Dhruva Group operates across five strategic sectors, each driven by innovation and excellence to shape the future of industries.
                </p>
            </div>

            {/* Main featured sector - Defence */}
            <BentoTilt className="border border-gold-500/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    title={<>Def<b>e</b>nce</>}
                    description="Strategic defence solutions and advanced military technologies protecting national interests with cutting-edge innovation."
                    gradient={sectors[0].gradient}
                    icon={sectors[0].icon}
                    details={sectors[0].details}
                    stats={sectors[0].stats}
                    learnMore
                />
            </BentoTilt>

            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                {/* AI Sector */}
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 border border-gold-500/10">
                    <BentoCard
                        title={<>Artif<b>i</b>cial<br />Intell<b>i</b>gence</>}
                        description="Pioneering AI solutions that transform data into actionable intelligence across industries."
                        gradient={sectors[1].gradient}
                        icon={sectors[1].icon}
                        details={sectors[1].details}
                        stats={sectors[1].stats}
                        learnMore
                    />
                </BentoTilt>

                {/* AgriTech Sector */}
                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 border border-gold-500/10">
                    <BentoCard
                        title={<>Agr<b>i</b>Tech</>}
                        description="Sustainable agricultural technology revolutionizing farming practices worldwide."
                        gradient={sectors[2].gradient}
                        icon={sectors[2].icon}
                        details={sectors[2].details}
                        stats={sectors[2].stats}
                        learnMore
                    />
                </BentoTilt>

                {/* Corporate Sector */}
                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 border border-gold-500/10">
                    <BentoCard
                        title={<>Corp<b>o</b>rate</>}
                        description="Enterprise excellence through strategic consulting and business transformation."
                        gradient={sectors[3].gradient}
                        icon={sectors[3].icon}
                        details={sectors[3].details}
                        stats={sectors[3].stats}
                        learnMore
                    />
                </BentoTilt>

                {/* Coming Soon Card */}
                <BentoTilt className="bento-tilt_2 border border-gold-500/10">
                    <div className="flex size-full flex-col justify-between bg-gradient-to-br from-gold-500 to-gold-700 p-5">
                        <h1 className="bento-title special-font max-w-64 text-dhruva-black">
                            M<b>o</b>re Sec<b>t</b>ors<br />C<b>o</b>ming S<b>o</b>on
                        </h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end text-dhruva-black" />
                    </div>
                </BentoTilt>

                {/* Security Sector */}
                <BentoTilt className="bento-tilt_2 border border-gold-500/10">
                    <BentoCard
                        title={<>Sec<b>u</b>rity</>}
                        description="Advanced security systems protecting critical infrastructure."
                        gradient={sectors[4].gradient}
                        icon={sectors[4].icon}
                        details={sectors[4].details}
                        stats={sectors[4].stats}
                        isComingSoon
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
);

export default Features;
