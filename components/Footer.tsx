'use client';

import { useState } from 'react';

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      username: '@jimeromero0',
      url: 'https://instagram.com/jimeromero0',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      username: 'Jimena Romero',
      url: 'https://www.linkedin.com/in/jimena-romero-a7b01b300/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: '⚡',
      username: '@jimena-romero',
      url: 'https://github.com/jimena-romero',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'email',
      name: 'Email',
      icon: '📧',
      username: 'romerojimena700@gmail.com',
      url: 'mailto:romerojimena700@gmail.com',
      color: 'from-[#110083] to-[#110083]/70'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '💬',
      username: '+54 353 344 8354',
      url: 'https://wa.me/5493533448354',
      color: 'from-green-600 to-green-400'
    }
  ];

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#110083] via-[#110083]/95 to-[#110083]/90 text-white overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Main content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Clic
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Convertimos ideas en sistemas que <span className="text-white font-semibold">funcionan</span>.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-white/90 font-medium">Jimena Romero</p>
              <p className="text-sm text-white/60">
                Analista en Sistemas | UTN FRVM
              </p>
              <p className="text-sm text-white/60">
                Villa María, Córdoba, Argentina 🇦🇷
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Navegación
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="block group"
                >
                  <div className={`text-white/80 hover:text-white font-medium transition-all duration-300 flex items-center gap-2 ${
                    hoveredLink === link.name ? 'translate-x-2' : ''
                  }`}>
                    <span className={`text-xl transition-transform duration-300 ${
                      hoveredLink === link.name ? 'scale-125' : 'scale-100'
                    }`}>
                      →
                    </span>
                    {link.name}
                  </div>
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Conectemos
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="group block"
                >
                  <div className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                    hoveredSocial === social.id ? 'scale-105 shadow-xl' : 'scale-100'
                  }`}>
                    <div className={`text-3xl transition-transform duration-300 ${
                      hoveredSocial === social.id ? 'scale-125 rotate-12' : 'scale-100'
                    }`}>
                      {social.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white/90 mb-1">
                        {social.name}
                      </div>
                      <div className="text-xs text-white/60 truncate">
                        {social.username}
                      </div>
                    </div>
                    <div className={`text-white/60 transition-all duration-300 ${
                      hoveredSocial === social.id ? 'translate-x-2 text-white' : ''
                    }`}>
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with animation */}
        <div className="relative mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {year} <span className="font-semibold text-white/80">Clic</span>. Hecho con 💜.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Diseñado y desarrollado por Jimena Romero
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/contacto"
            className="group relative px-8 py-4 rounded-full bg-white text-[#110083] font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Trabajemos juntos
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Easter egg */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs italic hover:text-white/60 transition-colors cursor-default">
            "Si algo no funciona como debería, ¡hay un clic pendiente!" ✨
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-30px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(15px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}