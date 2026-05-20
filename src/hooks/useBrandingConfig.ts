"use client";

import { useEffect, useState } from "react";

interface BrandingConfig {
  APP_NAME: string;
  APP_LOGO_FULL: string;
  APP_LOGO_MARK: string;
}

/**
 * Hook to access runtime branding configuration
 * Fetches branding-config.json generated at container startup
 */
export const useBrandingConfig = () => {
  const [branding, setBranding] = useState<BrandingConfig>({
    APP_NAME: "NetBird Dashboard",
    APP_LOGO_FULL: "/assets/netbird-full.svg",
    APP_LOGO_MARK: "/assets/netbird.svg",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBranding = async () => {
      try {
        const response = await fetch("/branding-config.json");
        if (response.ok) {
          const data = await response.json();
          setBranding(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to load branding"));
      } finally {
        setLoading(false);
      }
    };

    loadBranding();
  }, []);

  return { branding, loading, error };
};
