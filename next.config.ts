import type { NextConfig } from "next";

const securityHeaders = [
  // Evita que el sitio sea embebido en iframes (protege contra clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el browser "adivine" el tipo de archivo (MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Solo envía el origen en el Referer, sin la URL completa
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Fuerza HTTPS por 1 año en el browser del usuario
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Restringe acceso a cámara, micrófono y geolocalización
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Elimina el header que revela que el sitio usa Next.js
  { key: "X-Powered-By", value: "" },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;