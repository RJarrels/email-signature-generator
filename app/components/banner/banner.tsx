"use client";
import Image from "next/image";
import { Language } from "@/app/scripts/language";
import { useLanguage } from "@/app/context/language-context";

interface BannerProps {
  logoSrc: string;
  alt: string;
  width: number;
  height: number;
}

export function Banner({
  logoSrc,
  alt,
  width,
  height,
}: BannerProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <header>
      <div>
        <Image src={logoSrc} alt={alt} width={width} height={height} />
      </div>

      <div>
        <select
          name="language"
          id="language"
          title="select your language or country"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          <option value="en-us">🇺🇸 English</option>
          <option value="en-gb">🇬🇧 English</option>
          <option value="en-cn">🇨🇳 English</option>
          <option value="en-ca">🇨🇦 English</option>
          <option value="fr-fr">🇫🇷 Français</option>
          <option value="fr-ca">🇨🇦 Français</option>
          <option value="de-de">🇩🇪 Deutsch</option>
          <option value="es-es">🇪🇸 Español</option>
          <option value="es-mx">🇲🇽 Español</option>
          <option value="it-it">🇮🇹 Italiano</option>
        </select>
      </div>
    </header>
  );
}