import { useLocation } from 'react-router-dom';
import Galaxy from './Galaxy';

export default function BackgroundAnimation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) {
    return (
      <div className="fixed inset-0 -z-30 w-full h-full overflow-hidden bg-[#030303]">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1.2}
          glowIntensity={0.4}
          saturation={0.5}
          hueShift={140}
          twinkleIntensity={0.4}
          rotationSpeed={0.06}
          repulsionStrength={2.5}
          autoCenterRepulsion={0}
          starSpeed={0.4}
          speed={0.8}
          transparent={false}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-30 w-full h-full overflow-hidden bg-[#07050f] transition-all duration-700">
      {/* Top-Left paint stroke/splatter effect, matching screenshots */}
      <div className="absolute -top-10 -left-10 w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-40 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-rose-900">
          {/* Crimson paint splatter brush shape */}
          <path d="M 0 0 C 80 10, 110 50, 150 90 C 180 120, 140 170, 90 190 C 50 200, 20 180, 0 140 Z" fill="#881337" />
          <path d="M 10 10 C 60 20, 80 60, 110 100 C 130 120, 100 150, 60 160 C 30 170, 10 150, 10 110 Z" fill="#b91c1c" opacity="0.6" />
          <path d="M 0 30 C 40 45, 60 80, 80 110 C 90 125, 70 140, 40 130 C 20 120, 0 100, 0 70 Z" fill="#ef4444" opacity="0.4" />
          {/* Splattered dots */}
          <circle cx="170" cy="70" r="10" fill="#881337" opacity="0.5" />
          <circle cx="130" cy="160" r="7" fill="#b91c1c" opacity="0.6" />
          <circle cx="190" cy="120" r="4" fill="#ef4444" opacity="0.7" />
          <circle cx="100" cy="185" r="5" fill="#dc2626" opacity="0.5" />
          <circle cx="155" cy="135" r="3" fill="#f43f5e" opacity="0.8" />
        </svg>
      </div>

      {/* Bottom-Right crimson brush/swirl effect */}
      <div className="absolute -bottom-10 -right-10 w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-35 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-rose-950">
          {/* Swirly circular wireframes + blob */}
          <path d="M 200 200 C 120 190, 90 150, 50 110 C 20 80, 60 30, 110 10 C 150 0, 180 20, 200 60 Z" fill="#4c0519" />
          <path d="M 200 200 C 140 195, 120 170, 90 140 C 70 120, 90 90, 120 70 C 150 50, 180 70, 200 100 Z" fill="#881337" opacity="0.5" />
          
          {/* High-tech concentric dashed rings */}
          <circle cx="200" cy="200" r="160" stroke="#b91c1c" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6 12" />
          <circle cx="200" cy="200" r="120" stroke="#ef4444" strokeWidth="0.75" fill="none" opacity="0.3" strokeDasharray="30 15" />
          <circle cx="200" cy="200" r="85" stroke="#f43f5e" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Background grids with diagonal animated offset */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] animate-grid-move pointer-events-none" />

      {/* Ambient gradient lighting in center */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />
    </div>
  );
}
