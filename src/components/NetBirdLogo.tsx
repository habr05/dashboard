import { cn } from "@utils/helpers";
import Image from "next/image";
import * as React from "react";
import { useBrandingConfig } from "@/hooks/useBrandingConfig";

type Props = {
  size?: "default" | "large";
  mobile?: boolean;
};

const sizes = {
  default: {
    desktop: 22,
    mobile: 30,
  },
  large: {
    desktop: 24,
    mobile: 40,
  },
};

export const NetBirdLogo = ({ size = "default", mobile = true }: Props) => {
  const { branding } = useBrandingConfig();

  return (
    <>
      <Image
        src={branding.APP_LOGO_FULL}
        height={sizes[size].desktop}
        alt={`${branding.APP_NAME} Logo`}
        className={cn(mobile && "hidden md:block")}
      />
      {mobile && (
        <Image
          src={branding.APP_LOGO_MARK}
          width={sizes[size].mobile}
          alt={`${branding.APP_NAME} Logo`}
          className={cn(mobile && "md:hidden ml-4")}
        />
      )}
    </>
  );
};
