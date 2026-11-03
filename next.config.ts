import type { NextConfig } from "next";
import { routeRules } from "./src/i18n/routes";

const { rewrites, redirects } = routeRules();

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Localized slugs (see src/i18n/routes.ts).
  async rewrites() {
    return rewrites;
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
