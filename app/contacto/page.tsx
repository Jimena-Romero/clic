'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      id: 'email',
      icon: '📧',
      title: 'Email',
      value: 'romerojimena700@gmail.com',
      description: 'Respondo en 24hs',
      color: 'from-[#110083] to-[#110083]/70',
      link: 'mailto:romerojimena700@gmail.com'
    },
    {
      id: 'whatsapp',
      icon: '💬',
      title: 'WhatsApp',
      value: '+54 353 344 8354',
      description: 'Hablemos directo',
      color: 'from-[#110083]/90 to-[#110083]/60',
      link: 'https://wa.me/5493533448354'
    }
  ];

  const projectTypes = [
    { id: 'ecommerce', label: 'E-commerce', icon: '🛒' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'automatizacion', label: 'Automatización', icon: '⚡' },
    { id: 'otro', label: 'Otro', icon: '💡' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mvzprgba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message
        })
      });

      if (response.ok) {
        alert('¡Mensaje enviado! Te respondo pronto 🚀');
        setFormData({ name: '', email: '', message: '', projectType: '' });
      } else {
        alert('Hubo un error. Probá contactarme por WhatsApp o email directo.');
      }
    } catch (error) {
      alert('Hubo un error. Probá contactarme por WhatsApp o email directo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF9CE] via-[#FFFADB] to-[#FFF9CE] overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#110083]/10 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#110083] animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-[#110083]/70 font-medium">
                hablemos
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#110083] mb-6 animate-fade-in-up">
              Del caos al{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#110083] to-[#110083]/60 bg-clip-text text-transparent">
                  sistema
                </span>
                <svg className="absolute -bottom-3 left-0 w-full animate-draw-line" viewBox="0 0 200 20">
                  <path d="M0,10 Q50,5 100,10 T200,10" fill="none" stroke="#110083" strokeWidth="3" opacity="0.3" strokeDasharray="200" strokeDashoffset="200"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#110083]/70 leading-relaxed animate-fade-in-up-delay">
              Un mensaje, una llamada. Así de fácil empezamos.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-[#110083]/5 rounded-full blur-2xl animate-float" />
        <div className="absolute top-60 right-20 w-32 h-32 bg-[#110083]/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-[#110083]/5 rounded-full blur-2xl animate-float-slow" />
      </section>

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/40 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#110083]/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#110083]/5 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-[#110083] to-[#110083]/70 flex items-center justify-center text-6xl md:text-7xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
              👋
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#110083] mb-3">
                Soy Jimena Romero
              </h2>
              <p className="text-xl text-[#110083]/70 font-medium mb-6">
                La persona detrás de Clic
              </p>

              <div className="space-y-4 text-lg text-[#110083]/80 leading-relaxed mb-8">
                <p>
                  <strong className="text-[#110083] font-semibold">Analista Universitaria en Sistemas de Información</strong> recibida de la UTN FRVM, y estudiante avanzada de Ingeniería en Sistemas.
                </p>
                <p>
                  Hago sistemas que <strong className="text-[#110083] font-semibold">resuelven</strong> problemas reales. Que te ahorran tiempo, plata y dolores de cabeza.
                </p>
                <p>
                  Si tenés un caos que necesita orden, una idea que necesita forma, o un proceso manual que te está consumiendo... llegaste al lugar correcto.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['🎓 UTN FRVM', '💻 Full-Stack', '⚡ Automatización', '🤖 IA'].map((tag, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 rounded-full bg-[#110083]/5 text-[#110083] text-sm font-medium hover:bg-[#110083]/10 transition-colors cursor-default"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#110083] mb-4">
            Elegí tu canal
          </h2>
          <p className="text-xl text-[#110083]/70">
            Lo que te sea más cómodo. Yo respondo siempre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/40 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredMethod(method.id)}
              onMouseLeave={() => setHoveredMethod(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#110083]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className={`text-7xl mb-6 transition-all duration-500 ${hoveredMethod === method.id ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}`}>
                  {method.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-[#110083] mb-2">
                  {method.title}
                </h3>
                
                <p className="text-sm text-[#110083]/60 font-medium mb-6 uppercase tracking-wide">
                  {method.description}
                </p>
                
                <div className="text-lg font-semibold text-[#110083] mb-6 break-all bg-[#110083]/5 rounded-2xl p-4">
                  {method.value}
                </div>
                
                <div className={`flex items-center gap-3 text-[#110083] font-bold text-lg transition-all duration-300 ${hoveredMethod === method.id ? 'translate-x-3' : 'translate-x-0'}`}>
                  <span>Contactar ahora</span>
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/40 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#110083]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#110083]/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-block mb-4">
                <div className="text-6xl">✉️</div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#110083] mb-4">
                O dejame un mensaje
              </h2>
              <p className="text-lg text-[#110083]/70">
                Contame qué necesitás y coordinamos
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#110083] mb-2">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#110083]/10 text-[#110083] placeholder-[#110083]/40 focus:outline-none focus:ring-2 focus:ring-[#110083]/30 focus:border-transparent transition-all"
                    placeholder="¿Cómo te llamás?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#110083] mb-2">
                    Tu email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#110083]/10 text-[#110083] placeholder-[#110083]/40 focus:outline-none focus:ring-2 focus:ring-[#110083]/30 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#110083] mb-3">
                  ¿Qué tipo de proyecto?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, projectType: type.id})}
                      className={`px-4 py-4 rounded-2xl font-medium transition-all text-sm ${
                        formData.projectType === type.id
                          ? 'bg-[#110083] text-white shadow-lg scale-105'
                          : 'bg-white/70 backdrop-blur-sm text-[#110083] hover:bg-white/90 hover:scale-105 border border-[#110083]/10'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#110083] mb-2">
                  Contame sobre tu proyecto *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#110083]/10 text-[#110083] placeholder-[#110083]/40 focus:outline-none focus:ring-2 focus:ring-[#110083]/30 focus:border-transparent transition-all resize-none"
                  placeholder="¿Qué problema necesitás resolver? ¿Qué tenés en mente? Cuanto más detalles, mejor..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-10 py-6 rounded-full bg-[#110083] text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#110083] via-[#110083]/80 to-[#110083] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }
        
        .animate-draw-line {
          animation: draw-line 1.5s ease-out 0.5s forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}