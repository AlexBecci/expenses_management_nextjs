import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Aquí puedes modificar la configuración de Webpack si es necesario
    return config;
  },

};

export default nextConfig;
