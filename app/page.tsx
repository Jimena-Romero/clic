'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF9CE] via-[#FFFADB] to-[#FFF9CE] relative overflow-hidden">
      {/* Elementos flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#110083]/5 blur-3xl transition-transform duration-1000"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-purple-300/10 blur-3xl transition-transform duration-1000"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* TEXTO */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#110083]/10">
              <div className="w-2 h-2 rounded-full bg-[#110083] animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-[#110083]/70 font-medium">
                procesos inteligentes
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#110083] leading-[1.1] mb-8">
              Dale el{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#110083] to-purple-600 bg-clip-text text-transparent">
                  clic
                </span>
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 20"
                  style={{
                    transform: `translateX(${scrollY * 0.1}px)`
                  }}
                >
                  <path
                    d="M0,10 Q50,0 100,10 T200,10"
                    fill="none"
                    stroke="#09003eff"
                    strokeWidth="3"
                    opacity="0.3"
                  />
                </svg>
              </span>{" "}
              <br />
              que tu empresa necesita
            </h1>

            <p className="text-xl text-[#110083]/70 max-w-lg mb-12 leading-relaxed">
              Ordeno procesos, automatizo tareas y convierto el caos operativo
              en sistemas simples que <span className="font-semibold text-[#110083]">funcionan</span>.
            </p>

          <div className="flex flex-wrap gap-4">
            <a href="/contacto" className="group relative px-8 py-4 rounded-full bg-[#110083] text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-xl inline-block">
              <span className="relative z-10 flex items-center gap-3">
                Empezar ahora
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#110083] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-12">
              {[
                { num: "90%", label: "Tiempo ahorrado" },
                { num: "24/7", label: "Disponibilidad" }
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#110083] mb-1">{stat.num}</div>
                  <div className="text-sm text-[#110083]/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL CON EFECTOS ANIMADOS */}
          <div className="relative">
            {/* Círculos decorativos animados */}
            <div 
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#110083]/20 to-purple-400/20 blur-2xl animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <div 
              className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-purple-400/20 to-[#110083]/20 blur-2xl animate-pulse"
              style={{ animationDuration: '3s', animationDelay: '1s' }}
            />

            {/* EFECTO DE ANILLOS ORBITANDO - MÁS VISIBLES */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0"
              style={{
                transform: isMounted 
                  ? `translate(-50%, -50%) rotateX(${(mousePosition.y / window.innerHeight - 0.5) * 10}deg) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 10}deg)`
                  : 'translate(-50%, -50%)',
                transition: 'transform 0.5s ease-out'
              }}
            >
              {/* Anillo 1 - Exterior azul */}
              <div className="absolute inset-0 rounded-full border-[3px] border-[#110083]/50 animate-spin-slow" 
                   style={{ animationDuration: '25s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#110083] rounded-full shadow-lg" />
              </div>
              
              {/* Anillo 2 - Grande morado */}
              <div className="absolute inset-8 rounded-full border-[3px] border-purple-600/40 animate-spin-slow" 
                   style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-purple-600 rounded-full shadow-lg" />
              </div>
              
              {/* Anillo 3 - Medio azul */}
              <div className="absolute inset-16 rounded-full border-[3px] border-[#110083]/40 animate-spin-slow" 
                   style={{ animationDuration: '18s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#110083] rounded-full shadow-lg" />
              </div>

              {/* Anillo 4 - Interior morado */}
              <div className="absolute inset-24 rounded-full border-[3px] border-purple-600/35 animate-spin-slow" 
                   style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full shadow-lg" />
              </div>

              {/* Anillo 5 - Pequeño azul */}
              <div className="absolute inset-32 rounded-full border-[2px] border-[#110083]/30 animate-spin-slow" 
                   style={{ animationDuration: '12s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#110083] rounded-full shadow-lg" />
              </div>

              {/* Núcleo central brillante */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#110083]/30 to-purple-600/30 blur-md animate-pulse" 
                   style={{ animationDuration: '3s' }} />
            </div>

            {/* PARTÍCULAS FLOTANTES VISIBLES */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {[...Array(15)].map((_, i) => {
                const delay = i * 0.8;
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#110083] rounded-full animate-float-gentle"
                    style={{
                      top: `${10 + (i * 6)}%`,
                      left: `${10 + (i * 6)}%`,
                      animationDelay: `${delay}s`,
                      opacity: 0.4
                    }}
                  />
                );
              })}
            </div>

            {/* Card principal con glassmorphism */}
            <div className="relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-10 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500" style={{ zIndex: 10 }}>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#110083] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg rotate-12 hover:rotate-0 transition-transform duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <p className="text-xs text-[#110083]/50 mb-6 uppercase tracking-widest font-semibold">
                Casos reales
              </p>

              <div className="space-y-5">
                {[
                  { icon: "✓", text: "Procesos automatizados", gradient: "from-[#110083] to-[#110083]/80" },
                  { icon: "✓", text: "Gestión de productos", gradient: "from-[#110083]/90 to-[#110083]/70" },
                  { icon: "✓", text: "Finanzas ordenadas", gradient: "from-[#110083]/80 to-[#110083]/60" },
                  { icon: "✓", text: "Menos procesos manuales", gradient: "from-[#110083]/70 to-[#110083]/50" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/80 transition-all cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                    }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="text-[#110083] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Badge de calidad */}
              <div className="mt-8 pt-8 border-t border-[#110083]/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#110083]/70">Calidad garantizada</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#110083] animate-pulse" />
                    <span className="text-lg font-bold text-[#110083]">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="relative max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#110083] mb-4">
            ¿Cómo lo hacemos?
          </h2>
          <p className="text-lg text-[#110083]/60 max-w-2xl mx-auto">
            Soluciones pensadas para escalar sin complicarte
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<ZapIcon />}
            title="Automatización"
            text="Menos tareas manuales, menos errores, más tiempo para lo importante."
            color="from-[#110083] to-[#110083]/80"
            delay="0s"
            serviceId="automatizacion"
          />
          <ServiceCard
            icon={<RefreshIcon />}
            title="Orden de procesos"
            text="Claridad, control y sistemas que no dependen de una sola persona."
            color="from-[#110083]/90 to-[#110083]/70"
            delay="0.1s"
            serviceId="orden"
          />
          <ServiceCard
            icon={<LayersIcon />}
            title="Soluciones a medida"
            text="No todo necesita un sistema gigante. Lo simple también escala."
            color="from-[#110083]/80 to-[#110083]/60"
            delay="0.2s"
            serviceId="soluciones"
          />
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-spin-slow {
          animation: spin linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

function ServiceCard({ icon, title, text, color, delay, serviceId }: { 
  icon: React.ReactNode; 
  title: string; 
  text: string; 
  color: string; 
  delay: string;
  serviceId: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay} both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
      
      <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-[#110083] mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-[#110083]/70 leading-relaxed relative z-10">
        {text}
      </p>

      <Link href={`/servicios?servicio=${serviceId}`}>
        <div className={`mt-6 flex items-center gap-2 text-[#110083] font-semibold transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
          <span className="text-sm">Saber más</span>
          <span className="text-lg">→</span>
        </div>
      </Link>
    </div>
  );
}

function ZapIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 1 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );
}