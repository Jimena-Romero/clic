'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Componente interno que usa useSearchParams
function ServicesContent() {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Detectar el servicio desde la URL
  useEffect(() => {
    const servicioParam = searchParams.get('servicio');
    if (servicioParam === 'automatizacion') {
      setActiveService(0);
    } else if (servicioParam === 'orden') {
      setActiveService(1);
    } else if (servicioParam === 'soluciones') {
      setActiveService(2);
    }
  }, [searchParams]);

  const services = [
    {
      id: 0,
      title: "Automatización",
      subtitle: "Liberá tu tiempo, eliminá errores",
      icon: "⚡",
      gradient: "from-[#110083] to-[#110083]/70",
      description: "Transformo tareas repetitivas en procesos automáticos que funcionan mientras vos te enfocás en hacer crecer tu negocio.",
      benefits: [
        {
          title: "Ahorro de tiempo real",
          description: "Lo que tomaba horas, ahora toma minutos. O segundos.",
          icon: "⏱️"
        },
        {
          title: "Cero errores humanos",
          description: "Los sistemas no se distraen, no se cansan, no se equivocan.",
          icon: "✓"
        },
        {
          title: "Escala sin esfuerzo",
          description: "Crecé tu operación sin necesidad de duplicar tu equipo.",
          icon: "📈"
        }
      ],
      examples: [
        "Generación automática de reportes",
        "Procesamiento de pagos y facturación",
        "Envío inteligente de emails y notificaciones",
        "Actualización de inventarios en tiempo real",
        "Integración entre sistemas y plataformas"
      ],
      process: [
        { step: "Analizamos", desc: "Identifico qué tareas te roban tiempo" },
        { step: "Diseñamos", desc: "Creo flujos automáticos personalizados" },
        { step: "Implementamos", desc: "Pongo todo en funcionamiento" },
        { step: "Optimizamos", desc: "Ajusto y mejoro según resultados" }
      ]
    },
    {
      id: 1,
      title: "Orden de procesos",
      subtitle: "Claridad en el caos operativo",
      icon: "🎯",
      gradient: "from-[#110083]/90 to-[#110083]/60",
      description: "Convierto operaciones confusas en sistemas claros donde cada persona sabe qué hacer, cuándo y cómo.",
      benefits: [
        {
          title: "Todo documentado",
          description: "Ningún proceso depende de 'la memoria' de una sola persona.",
          icon: "📋"
        },
        {
          title: "Flujos visuales",
          description: "Entendé de un vistazo cómo funciona cada proceso de tu empresa.",
          icon: "🔄"
        },
        {
          title: "Equipo alineado",
          description: "Todos trabajan con el mismo método, sin improvisaciones.",
          icon: "👥"
        }
      ],
      examples: [
        "Manuales de procesos operativos",
        "Flujos de trabajo paso a paso",
        "Protocolos de atención al cliente",
        "Procedimientos de onboarding",
        "Sistemas de control y seguimiento"
      ],
      process: [
        { step: "Mapeo", desc: "Documento cómo funciona hoy tu operación" },
        { step: "Simplificación", desc: "Elimino pasos innecesarios y cuellos de botella" },
        { step: "Estandarización", desc: "Creo el 'modo correcto' de hacer cada cosa" },
        { step: "Implementación", desc: "Tu equipo adopta el nuevo sistema" }
      ]
    },
    {
      id: 2,
      title: "Soluciones a medida",
      subtitle: "Lo que necesitás, sin lo que no",
      icon: "🛠️",
      gradient: "from-[#110083]/80 to-[#110083]/50",
      description: "Desarrollo sistemas personalizados que resuelven exactamente tu problema. Sin pagar por funciones que no vas a usar.",
      benefits: [
        {
          title: "Hecho para vos",
          description: "No hay plantillas genéricas. Cada solución se adapta a tu negocio.",
          icon: "💎"
        },
        {
          title: "Simple cuando debe serlo",
          description: "No todo necesita ser complejo. A veces, menos es más.",
          icon: "✨"
        },
        {
          title: "Escalable si crece",
          description: "Empezás simple y agregás funcionalidades cuando las necesités.",
          icon: "🚀"
        }
      ],
      examples: [
        "Dashboards de gestión y métricas",
        "Sistemas de inventario personalizados",
        "Plataformas de gestión interna",
        "Herramientas de control financiero",
        "Apps web para necesidades específicas"
      ],
      process: [
        { step: "Entendemos", desc: "Escucho exactamente qué problema tenés" },
        { step: "Proponemos", desc: "Diseño la solución más simple y efectiva" },
        { step: "Desarrollamos", desc: "Construyo tu sistema paso a paso" },
        { step: "Acompañamos", desc: "Te ayudo a usarlo y lo mejoro con el tiempo" }
      ]
    }
  ];

  const currentService = services[activeService];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF9CE] via-[#FFFADB] to-[#FFF9CE] relative overflow-hidden">
      {/* Elementos flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#110083]/5 blur-3xl transition-transform duration-1000"
          style={{
            top: '5%',
            left: '0%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-[#110083]/5 blur-3xl transition-transform duration-1000"
          style={{
            bottom: '10%',
            right: '5%',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#110083]/10">
            <div className="w-2 h-2 rounded-full bg-[#110083] animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-[#110083]/70 font-medium">
              nuestros servicios
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#110083] leading-[1.1] mb-8">
            Soluciones que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#110083] to-[#110083]/60 bg-clip-text text-transparent">
                funcionan
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20">
                <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="#110083" strokeWidth="3" opacity="0.3"/>
              </svg>
            </span>
          </h1>

          <p className="text-xl text-[#110083]/70 max-w-3xl mx-auto leading-relaxed">
            No vendemos software. Resolvemos problemas reales con tecnología simple y efectiva.
          </p>
        </div>
      </section>

      {/* SERVICE SELECTOR */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`relative px-8 py-6 rounded-3xl font-semibold transition-all duration-500 ${
                activeService === index
                  ? 'bg-[#110083] text-white shadow-2xl scale-105'
                  : 'bg-white/60 backdrop-blur-sm text-[#110083] hover:bg-white/80 border border-[#110083]/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{service.icon}</span>
                <div className="text-left">
                  <div className="font-bold text-lg">{service.title}</div>
                  <div className={`text-xs ${activeService === index ? 'text-white/80' : 'text-[#110083]/60'}`}>
                    {service.subtitle}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICE DETAIL */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div 
          className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/40 shadow-2xl overflow-hidden"
          key={currentService.id}
          style={{ animation: 'fadeInScale 0.6s ease-out' }}
        >
          {/* Decorative gradient */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${currentService.gradient} opacity-5 rounded-full blur-3xl`} />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="text-7xl mb-6">{currentService.icon}</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#110083] mb-4">
                {currentService.title}
              </h2>
              <p className="text-xl text-[#110083]/70 max-w-3xl mx-auto leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {currentService.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#110083]/10 hover:bg-white/90 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#110083] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#110083]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Examples & Process Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Examples */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#110083]/10">
                <h3 className="text-2xl font-bold text-[#110083] mb-6 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  ¿Qué incluye?
                </h3>
                <ul className="space-y-4">
                  {currentService.examples.map((example, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-[#110083]/80"
                      style={{ animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both` }}
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentService.gradient} flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0`}>
                        ✓
                      </div>
                      <span className="leading-relaxed">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#110083]/10">
                <h3 className="text-2xl font-bold text-[#110083] mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔄</span>
                  ¿Cómo trabajamos?
                </h3>
                <div className="space-y-6">
                  {currentService.process.map((step, index) => (
                    <div 
                      key={index}
                      className="flex gap-4"
                      style={{ animation: `fadeInRight 0.6s ease-out ${index * 0.1}s both` }}
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentService.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#110083] mb-1">{step.step}</h4>
                        <p className="text-[#110083]/70 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative bg-gradient-to-br from-[#110083] to-[#110083]/80 rounded-[3rem] p-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 -right-20" />
            <div className="absolute w-80 h-80 bg-white/5 rounded-full blur-3xl bottom-0 -left-20" />
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para ordenar tu operación?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Hablemos de tu proyecto. Sin compromiso, sin vueltas, sin perder tiempo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto">
                <button className="group relative px-10 py-5 rounded-full bg-white text-[#110083] font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center gap-3">
                    Empezar ahora
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </Link>
              <Link href="/proyectos">
                <button className="px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                  Ver proyectos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}

// Componente principal con Suspense
export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-[#FFF9CE] via-[#FFFADB] to-[#FFF9CE] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#110083]/20 border-t-[#110083] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-xl text-[#110083] font-semibold">Cargando servicios...</p>
        </div>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}