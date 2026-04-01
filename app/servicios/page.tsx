'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const SPRING = { type: 'spring' as const, damping: 22, stiffness: 90 };
const SPRING_SLOW = { type: 'spring' as const, damping: 30, stiffness: 70 };

function ServicesContent() {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => { clearTimeout(t); window.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  useEffect(() => {
    const servicioParam = searchParams.get('servicio');
    if (servicioParam === 'automatizacion') setActiveService(0);
    else if (servicioParam === 'orden') setActiveService(1);
    else if (servicioParam === 'soluciones') setActiveService(2);
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
        { title: "Ahorro de tiempo real",  description: "Lo que tomaba horas, ahora toma minutos. O segundos.", icon: "⏱️" },
        { title: "Cero errores humanos",   description: "Los sistemas no se distraen, no se cansan, no se equivocan.", icon: "✓" },
        { title: "Escala sin esfuerzo",    description: "Crecé tu operación sin necesidad de duplicar tu equipo.", icon: "📈" },
      ],
      examples: [
        "Generación automática de reportes",
        "Procesamiento de pagos y facturación",
        "Envío inteligente de emails y notificaciones",
        "Actualización de inventarios en tiempo real",
        "Integración entre sistemas y plataformas",
      ],
      process: [
        { step: "Analizamos",    desc: "Identifico qué tareas te roban tiempo" },
        { step: "Diseñamos",     desc: "Creo flujos automáticos personalizados" },
        { step: "Implementamos", desc: "Pongo todo en funcionamiento" },
        { step: "Optimizamos",   desc: "Ajusto y mejoro según resultados" },
      ],
    },
    {
      id: 1,
      title: "Orden de procesos",
      subtitle: "Claridad en el caos operativo",
      icon: "🎯",
      gradient: "from-[#110083]/90 to-[#110083]/60",
      description: "Convierto operaciones confusas en sistemas claros donde cada persona sabe qué hacer, cuándo y cómo.",
      benefits: [
        { title: "Todo documentado", description: "Ningún proceso depende de 'la memoria' de una sola persona.", icon: "📋" },
        { title: "Flujos visuales",  description: "Entendé de un vistazo cómo funciona cada proceso de tu empresa.", icon: "🔄" },
        { title: "Equipo alineado",  description: "Todos trabajan con el mismo método, sin improvisaciones.", icon: "👥" },
      ],
      examples: [
        "Manuales de procesos operativos",
        "Flujos de trabajo paso a paso",
        "Protocolos de atención al cliente",
        "Procedimientos de onboarding",
        "Sistemas de control y seguimiento",
      ],
      process: [
        { step: "Mapeo",            desc: "Documento cómo funciona hoy tu operación" },
        { step: "Simplificación",   desc: "Elimino pasos innecesarios y cuellos de botella" },
        { step: "Estandarización",  desc: "Creo el 'modo correcto' de hacer cada cosa" },
        { step: "Implementación",   desc: "Tu equipo adopta el nuevo sistema" },
      ],
    },
    {
      id: 2,
      title: "Soluciones a medida",
      subtitle: "Lo que necesitás, sin lo que no",
      icon: "🛠️",
      gradient: "from-[#110083]/80 to-[#110083]/50",
      description: "Desarrollo sistemas personalizados que resuelven exactamente tu problema. Sin pagar por funciones que no vas a usar.",
      benefits: [
        { title: "Hecho para vos",           description: "No hay plantillas genéricas. Cada solución se adapta a tu negocio.", icon: "💎" },
        { title: "Simple cuando debe serlo", description: "No todo necesita ser complejo. A veces, menos es más.", icon: "✨" },
        { title: "Escalable si crece",       description: "Empezás simple y agregás funcionalidades cuando las necesités.", icon: "🚀" },
      ],
      examples: [
        "Dashboards de gestión y métricas",
        "Sistemas de inventario personalizados",
        "Plataformas de gestión interna",
        "Herramientas de control financiero",
        "Apps web para necesidades específicas",
      ],
      process: [
        { step: "Entendemos",   desc: "Escucho exactamente qué problema tenés" },
        { step: "Proponemos",   desc: "Diseño la solución más simple y efectiva" },
        { step: "Desarrollamos",desc: "Construyo tu sistema paso a paso" },
        { step: "Acompañamos",  desc: "Te ayudo a usarlo y lo mejoro con el tiempo" },
      ],
    },
  ];

  const current = services[activeService];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF9CE] via-[#FFFADB] to-[#FFF9CE] relative overflow-hidden">

      {/* Patrón de puntos */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(17,0,131,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Orbs de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-[#110083]/5 blur-3xl transition-transform duration-1000"
          style={{ top: '5%', left: '0%', transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)` }} />
        <div className="absolute w-80 h-80 rounded-full bg-purple-300/8 blur-3xl transition-transform duration-1000"
          style={{ bottom: '10%', right: '5%', transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }} />
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#110083]/10"
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING_SLOW, delay: 0 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#110083] animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-[#110083]/70 font-medium">nuestros servicios</span>
          </motion.div>

          {/* Título */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#110083] leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING_SLOW, delay: 0.12 }}
          >
            Soluciones que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 shimmer-word">funcionan</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20">
                <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="#110083" strokeWidth="3" opacity="0.3" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#110083]/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING_SLOW, delay: 0.26 }}
          >
            No vendemos software. Resolvemos problemas reales con tecnología simple y efectiva.
          </motion.p>
        </div>
      </section>

      {/* SERVICE SELECTOR */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`relative px-8 py-6 rounded-3xl font-semibold transition-colors duration-300 ${
                activeService === index
                  ? 'bg-[#110083] text-white shadow-2xl'
                  : 'bg-white/60 backdrop-blur-sm text-[#110083] hover:bg-white/80 border border-[#110083]/10'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={ready ? { opacity: 1, y: 0, scale: activeService === index ? 1.05 : 1 } : {}}
              whileHover={{ scale: activeService === index ? 1.05 : 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ ...SPRING, delay: 0.35 + index * 0.1 }}
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
            </motion.button>
          ))}
        </div>
      </section>

      {/* SERVICE DETAIL — AnimatePresence para transición al cambiar */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/40 shadow-2xl overflow-hidden">
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${current.gradient} opacity-5 rounded-full blur-3xl`} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="relative z-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {/* Header */}
              <div className="text-center mb-16">
                <motion.div
                  className="text-7xl mb-6"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...SPRING, delay: 0.1 }}
                >
                  {current.icon}
                </motion.div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-[#110083] mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_SLOW, delay: 0.15 }}
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  className="text-xl text-[#110083]/70 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING_SLOW, delay: 0.22 }}
                >
                  {current.description}
                </motion.p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-20">
                {current.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#110083]/10 hover:bg-white/90 hover:shadow-xl transition-colors duration-300 cursor-default"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...SPRING, delay: 0.1 + i * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-[#110083] mb-3">{benefit.title}</h3>
                    <p className="text-[#110083]/70 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Examples & Process */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Examples */}
                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#110083]/10"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING_SLOW, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-[#110083] mb-6 flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-4">
                    {current.examples.map((example, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-[#110083]/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SPRING, delay: 0.25 + i * 0.07 }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0`}>
                          ✓
                        </div>
                        <span className="leading-relaxed">{example}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Process */}
                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#110083]/10"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING_SLOW, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-[#110083] mb-6 flex items-center gap-3">
                    <span className="text-3xl">🔄</span>
                    ¿Cómo trabajamos?
                  </h3>
                  <div className="space-y-6">
                    {current.process.map((step, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SPRING, delay: 0.25 + i * 0.08 }}
                      >
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#110083] mb-1">{step.step}</h4>
                          <p className="text-[#110083]/70 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div
          className="relative bg-gradient-to-br from-[#110083] to-[#110083]/80 rounded-[3rem] p-12 md:p-20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={SPRING_SLOW}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 -right-20" />
            <div className="absolute w-80 h-80 bg-white/5 rounded-full blur-3xl bottom-0 -left-20" />
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para ordenar tu operación?</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Hablemos de tu proyecto. Sin compromiso, sin vueltas, sin perder tiempo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto">
                <motion.button
                  className="group relative px-10 py-5 rounded-full bg-white text-[#110083] font-bold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Empezar ahora
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>→</motion.span>
                  </span>
                </motion.button>
              </Link>
              <Link href="/proyectos">
                <motion.button
                  className="px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ver proyectos
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes shimmerMove {
          0%   { background-position: -300% center; }
          100% { background-position: 300% center; }
        }
        .shimmer-word {
          background: linear-gradient(90deg,
            #110083 0%, #110083 20%,
            #7c3aed 40%, #c084fc 55%,
            #7c3aed 70%, #110083 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerMove 4s linear infinite;
        }
      `}</style>
    </main>
  );
}

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
