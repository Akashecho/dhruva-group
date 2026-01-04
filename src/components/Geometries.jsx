import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Fibonacci Spiral Component with animated particles
const FibonacciSpiral = ({ className = "", size = 400, color = "#D4AF37" }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (svgRef.current) {
            // Animate the spiral drawing
            gsap.fromTo(
                svgRef.current.querySelectorAll('path'),
                { strokeDashoffset: 1000, opacity: 0.3 },
                { strokeDashoffset: 0, opacity: 0.6, duration: 3, ease: "power2.out", stagger: 0.2 }
            );

            // Rotate slowly
            gsap.to(svgRef.current, {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "none",
                transformOrigin: "center center"
            });
        }
    }, []);

    // Generate Fibonacci spiral path
    const generateSpiral = () => {
        let path = "";
        let x = 0, y = 0;
        const fib = [1, 1, 2, 3, 5, 8, 13, 21];
        const scale = size / 55;

        fib.forEach((f, i) => {
            const r = f * scale;
            const startAngle = (i * 90) * Math.PI / 180;
            const endAngle = ((i + 1) * 90) * Math.PI / 180;

            const x1 = x + r * Math.cos(startAngle);
            const y1 = y + r * Math.sin(startAngle);
            const x2 = x + r * Math.cos(endAngle);
            const y2 = y + r * Math.sin(endAngle);

            path += `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} `;
        });

        return path;
    };

    return (
        <svg
            ref={svgRef}
            className={className}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
        >
            {/* Fibonacci Golden Spiral */}
            <g transform={`translate(${size / 2}, ${size / 2})`}>
                {/* Multiple spiral layers for depth */}
                {[0, 45, 90, 135].map((rotation, idx) => (
                    <g key={idx} transform={`rotate(${rotation})`} opacity={0.3 - idx * 0.05}>
                        <path
                            d={generateSpiral()}
                            stroke={color}
                            strokeWidth={1 + idx * 0.5}
                            strokeDasharray="1000"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </g>
                ))}

                {/* Golden ratio circles */}
                {[21, 34, 55, 89, 144].map((r, idx) => (
                    <circle
                        key={idx}
                        cx={0}
                        cy={0}
                        r={r * (size / 300)}
                        stroke={color}
                        strokeWidth={0.5}
                        fill="none"
                        opacity={0.15 - idx * 0.02}
                    />
                ))}
            </g>
        </svg>
    );
};

// Animated Geometric Particles
const GeometricParticles = ({ className = "" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const particles = containerRef.current.querySelectorAll('.particle');

        particles.forEach((particle, i) => {
            // Random floating animation
            gsap.to(particle, {
                y: `+=${Math.random() * 50 - 25}`,
                x: `+=${Math.random() * 30 - 15}`,
                rotation: Math.random() * 360,
                duration: 3 + Math.random() * 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2
            });
        });
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Sacred geometry particles */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="particle absolute"
                    style={{
                        left: `${10 + (i % 4) * 25}%`,
                        top: `${15 + Math.floor(i / 4) * 30}%`,
                    }}
                >
                    {i % 3 === 0 ? (
                        // Triangle
                        <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-20">
                            <polygon points="20,5 35,35 5,35" fill="none" stroke="#D4AF37" strokeWidth="1" />
                        </svg>
                    ) : i % 3 === 1 ? (
                        // Hexagon
                        <svg width="35" height="35" viewBox="0 0 40 40" className="opacity-15">
                            <polygon points="20,2 35,10 35,30 20,38 5,30 5,10" fill="none" stroke="#2dd4bf" strokeWidth="1" />
                        </svg>
                    ) : (
                        // Circle
                        <svg width="30" height="30" viewBox="0 0 40 40" className="opacity-10">
                            <circle cx="20" cy="20" r="15" fill="none" stroke="#D4AF37" strokeWidth="1" />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
};

// Sacred Geometry Mandala
const SacredMandala = ({ className = "", size = 300 }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (svgRef.current) {
            gsap.to(svgRef.current, {
                rotation: 360,
                duration: 120,
                repeat: -1,
                ease: "none",
                transformOrigin: "center center"
            });
        }
    }, []);

    return (
        <svg
            ref={svgRef}
            className={className}
            width={size}
            height={size}
            viewBox="0 0 200 200"
        >
            <g transform="translate(100, 100)">
                {/* Flower of Life pattern */}
                {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                    <circle
                        key={idx}
                        cx={30 * Math.cos(angle * Math.PI / 180)}
                        cy={30 * Math.sin(angle * Math.PI / 180)}
                        r="30"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        opacity="0.3"
                    />
                ))}
                <circle cx="0" cy="0" r="30" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />

                {/* Outer rings */}
                {[50, 70, 90].map((r, idx) => (
                    <circle
                        key={idx}
                        cx="0"
                        cy="0"
                        r={r}
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.3"
                        opacity={0.2 - idx * 0.05}
                        strokeDasharray={idx % 2 === 0 ? "5,5" : "none"}
                    />
                ))}

                {/* Golden ratio lines */}
                {[...Array(12)].map((_, i) => (
                    <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2={90 * Math.cos((i * 30) * Math.PI / 180)}
                        y2={90 * Math.sin((i * 30) * Math.PI / 180)}
                        stroke="#2dd4bf"
                        strokeWidth="0.3"
                        opacity="0.15"
                    />
                ))}
            </g>
        </svg>
    );
};

// Animated Grid Background
const AnimatedGrid = ({ className = "" }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(#D4AF37 1px, transparent 1px),
            linear-gradient(90deg, #D4AF37 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px'
                }}
            />
            {/* Animated diagonal lines */}
            <svg className="absolute inset-0 w-full h-full opacity-5">
                <defs>
                    <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
                        <path d="M-1,1 l2,-2 M0,40 l40,-40 M39,41 l2,-2" stroke="#D4AF37" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
        </div>
    );
};

export { FibonacciSpiral, GeometricParticles, SacredMandala, AnimatedGrid };
