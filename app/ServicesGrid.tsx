"use client";
import { useState, useEffect, useRef } from "react";

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 200, label: "Team member", suffix: "+" },
    { value: 10, label: "Complete project", suffix: "+" },
    { value: 20, label: "Winning award", suffix: "+" },
    { value: 20, label: "Winning award", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className=" bg-white flex items-center justify-center p-4">
      <div
        ref={sectionRef}
        className="w-full max-w-7xl bg-primary bg-linear-to-br from-primary to-secondary rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden"
      >
        <style>{`
          @keyframes countUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes dotPattern {
            0%, 100% { opacity: 0.3; transform: translate(0, 0); }
            50% { opacity: 0.5; transform: translate(10px, -10px); }
          }
          
          .dot-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 2px, transparent 2px);
            background-size: 20px 20px;
            animation: dotPattern 4s ease-in-out infinite;
          }
          
          .stat-item {
            animation: countUp 0.6s ease-out backwards;
          }
        `}</style>

        {/* Decorative dot pattern */}
        <div className="dot-pattern"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.2}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type StatCounterProps = {
  value: number;
  label: string;
  suffix: string;
  delay: number;
  isVisible: boolean;
};

function StatCounter({
  value,
  label,
  suffix,
  delay,
  isVisible,
}: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * value);

      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [value, delay, isVisible]);

  return (
    <div
      className="stat-item text-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-primary/90 font-medium">
        {label}
      </div>
    </div>
  );
}
