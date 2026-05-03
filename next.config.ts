import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // En dev las imágenes se sirven sin cache → cambios inmediatos
    // En producción (Vercel) esto se ignora y usa la optimización normal
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
