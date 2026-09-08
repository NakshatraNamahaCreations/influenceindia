import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* several of the supplied client logos are SVGs; they are our own static
       files under public/logo, and the sandbox + CSP below keep the optimizer
       from serving them as anything executable */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
