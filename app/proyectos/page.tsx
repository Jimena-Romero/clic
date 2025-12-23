'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projects = [
    {
      id: 1,
      category: 'ecommerce',
      title: 'E-commerce con IA',
      subtitle: 'Plataforma de ventas automatizada',
      description: 'Sistema completo de e-commerce con panel administrativo, gestión de productos y categorías, y chatbot con inteligencia artificial para atención al cliente 24/7.',
      tags: ['E-commerce', 'Admin Panel', 'IA', 'Chatbot'],
      features: [
        'Panel admin completo',
        'Gestión de productos y categorías',
        'Chatbot inteligente',
        'Sistema de pagos integrado'
      ],
      status: 'Vendido y en uso',
      color: 'from-[#110083] to-[#110083]/70',
      thumbnail: '/images/ecommerce-thumb.jpg', // Imagen principal para la card
      media: [
        { type: 'image', src: '/images/ecommerce-1.jpg', alt: 'Dashboard principal' },
        { type: 'image', src: '/images/ecommerce-2.jpg', alt: 'Panel de productos' },
        { type: 'video', src: '/videos/ecommerce-demo.mp4', alt: 'Demo del chatbot' },
        { type: 'image', src: '/images/ecommerce-3.jpg', alt: 'Sistema de pagos' }
      ],
      challenge: 'El cliente necesitaba automatizar su proceso de ventas y atención al cliente sin aumentar personal.',
      solution: 'Desarrollamos una plataforma completa con IA que gestiona consultas 24/7 y procesa pedidos automáticamente.',
      results: [
        '70% reducción en tiempo de respuesta',
        '3x aumento en conversiones',
        '90% de consultas resueltas por el bot'
      ]
    },
    {
      id: 2,
      category: 'finanzas',
      title: 'Sistema Financiero Inmobiliario',
      subtitle: 'Control integral de propiedades',
      description: 'Plataforma de gestión financiera para propietarios de múltiples alquileres. Incluye control de ingresos, gastos, visualización de datos con gráficos interactivos y exportación a Excel.',
      tags: ['Finanzas', 'Dashboard', 'Gráficos', 'Excel'],
      features: [
        'Control de ingresos y gastos',
        'Gráficos interactivos',
        'Exportación a Excel',
        'Reportes automáticos'
      ],
      status: 'Vendido y en uso',
      color: 'from-[#110083]/90 to-[#110083]/60',
      thumbnail: '/images/finanzas-thumb.jpg',
      media: [
        { type: 'image', src: '/images/finanzas-1.jpg', alt: 'Dashboard financiero' },
        { type: 'image', src: '/images/finanzas-2.jpg', alt: 'Gráficos de rendimiento' },
        { type: 'image', src: '/images/finanzas-3.jpg', alt: 'Control de propiedades' },
      ],
      challenge: 'Gestionar las finanzas de 15+ propiedades en alquiler era un caos de planillas Excel.',
      solution: 'Sistema centralizado con visualización clara de todas las propiedades, ingresos, gastos y proyecciones.',
      results: [
        '5 horas semanales ahorradas',
        'Control en tiempo real',
        'Decisiones basadas en datos reales'
      ]
    },
    {
      id: 3,
      category: 'automatizacion',
      title: 'Sistema de Presupuestos Automatizados',
      subtitle: 'Macros inteligentes para estudio contable',
      description: 'Desarrollo de macros personalizadas que automatizan la generación de presupuestos, eliminando tareas manuales y reduciendo errores en un 95%.',
      tags: ['Automatización', 'Macros', 'Excel', 'VBA'],
      features: [
        'Generación automática de presupuestos',
        'Plantillas personalizadas',
        'Reducción de errores',
        'Ahorro de 80% del tiempo'
      ],
      status: 'Vendido y en uso',
      color: 'from-[#110083]/80 to-[#110083]/50',
      thumbnail: '/images/macros-thumb.jpg',
      media: [
        { type: 'image', src: '/images/macros-1.jpg', alt: 'Interface del sistema' },
        { type: 'image', src: '/images/macros-thumb.jpg', alt: 'Interface del sistema' },
      ],
      challenge: 'Generar presupuestos tomaba 2+ horas por documento con alto riesgo de errores.',
      solution: 'Macros inteligentes que generan presupuestos completos en menos de 2 minutos con datos actualizados.',
      results: [
        '80% menos tiempo por presupuesto',
        '95% reducción de errores',
        'Plantillas estandarizadas profesionales'
      ]
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'finanzas', label: 'Finanzas' },
    { id: 'automatizacion', label: 'Automatización' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => 
        prev === selectedProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => 
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF9CE] via-[#FFFADB] to-[#FFF9CE]">
      
      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#110083]/10">
              <div className="w-2 h-2 rounded-full bg-[#110083] animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-[#110083]/70 font-medium">
                casos de éxito
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#110083] mb-6">
              Proyectos que <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#110083] to-[#110083]/60 bg-clip-text text-transparent">
                  transforman
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20">
                  <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="#110083" strokeWidth="3" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-[#110083]/70 leading-relaxed">
              De la idea al impacto real. Así convertimos el caos en sistemas que funcionan.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#110083] text-white shadow-lg scale-105'
                  : 'bg-white/60 backdrop-blur-sm text-[#110083] hover:bg-white/80 border border-[#110083]/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={`${index * 0.1}s`}
              onViewDetails={() => openModal(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[#110083]/50 font-medium">
              No hay proyectos en esta categoría
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/40 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#110083]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#110083]/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#110083] mb-6">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="text-xl text-[#110083]/70 mb-10">
              Convertí tu idea en un sistema que funcione. Sin vueltas, sin complicaciones.
            </p>
            <Link href="/contacto">
              <button className="group relative px-10 py-5 rounded-full bg-[#110083] text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
                <span className="relative z-10 flex items-center gap-3">
                  Hablemos
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#110083]/80 to-[#110083] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de detalles */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          currentMediaIndex={currentMediaIndex}
          onClose={closeModal}
          onNext={nextMedia}
          onPrev={prevMedia}
          onThumbnailClick={setCurrentMediaIndex}
        />
      )}

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
      `}</style>
    </main>
  );
}

function ProjectCard({ project, delay, onViewDetails }: { project: any; delay: string; onViewDetails: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/40 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      style={{ animation: `fadeInUp 0.8s ease-out ${delay} both` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onViewDetails}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      {/* Image - Placeholder para tu imagen real */}
      <div className="relative h-56 bg-gradient-to-br from-[#110083]/10 to-[#110083]/5 overflow-hidden">
        {/* Imagen real */}
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">
                {project.category === 'ecommerce' && '🛒'}
                {project.category === 'finanzas' && '📊'}
                {project.category === 'automatizacion' && '⚡'}
              </div>
            </div>
          </div>
        )}
        
        {/* Status badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#110083] border border-[#110083]/10 z-10">
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-2xl font-bold text-[#110083] mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-[#110083]/60 mb-4">
          {project.subtitle}
        </p>
        <p className="text-[#110083]/70 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[#110083]/5 text-xs font-medium text-[#110083]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex items-center gap-2 text-[#110083] font-semibold transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
          <span className="text-sm">Ver detalles completos</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, currentMediaIndex, onClose, onNext, onPrev, onThumbnailClick }: any) {
  const currentMedia = project.media[currentMediaIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[#110083] text-white flex items-center justify-center hover:scale-110 transition-transform"
        >
          ✕
        </button>

        {/* Media viewer */}
        <div className="relative bg-gradient-to-br from-[#110083]/5 to-[#110083]/10 p-8">
          <div className="relative aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl">
            {currentMedia.type === 'image' ? (
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                className="object-contain"
              />
            ) : (
              <video
                src={currentMedia.src}
                controls
                className="w-full h-full"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            )}

            {/* Navigation arrows */}
            {project.media.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-[#110083] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  ←
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-[#110083] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {project.media.length > 1 && (
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {project.media.map((media: any, index: number) => (
                <button
                  key={index}
                  onClick={() => onThumbnailClick(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
                    index === currentMediaIndex 
                      ? 'ring-4 ring-[#110083] scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {media.type === 'image' ? (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#110083]/20 to-[#110083]/10 flex items-center justify-center text-2xl">
                      🎥
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project details */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-[#110083] mb-2">{project.title}</h2>
            <p className="text-xl text-[#110083]/70">{project.subtitle}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#FFF9CE]/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#110083] mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                El desafío
              </h3>
              <p className="text-[#110083]/80 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-[#FFF9CE]/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#110083] mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                La solución
              </h3>
              <p className="text-[#110083]/80 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#110083] to-[#110083]/80 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              Resultados
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-2">✓</div>
                  <p className="font-semibold">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-[#110083] mb-4">Tecnologías utilizadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#110083]/10 text-sm font-medium text-[#110083]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}