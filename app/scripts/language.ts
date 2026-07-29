// lib/language.ts
import enUS from "@/app/data/translations/en-us.json";
import enCA from "@/app/data/translations/en-ca.json";
import enGB from "@/app/data/translations/en-gb.json";
import enCN from "@/app/data/translations/en-cn.json";
import esES from "@/app/data/translations/es-es.json";
import frFR from "@/app/data/translations/fr-fr.json";
import frCA from "@/app/data/translations/fr-ca.json";
import deDE from "@/app/data/translations/de-de.json";
import esMX from "@/app/data/translations/es-mx.json";
import itIT from "@/app/data/translations/it-it.json";
interface LanguageProps {
  language: string;
}
export type Language =
  | "en-us"
  | "en-ca"
  | "en-gb"
  | "en-cn"
  | "es-es"
  | "fr-fr"
  | "fr-ca"
  | "de-de"
  | "es-mx"
  | "it-it";
export const translations: Record<Language, typeof enUS> = {
  "en-us": enUS,
  "en-ca": enCA,
  "en-gb": enGB,
  "en-cn": enCN,
  "es-es": esES,
  "fr-fr": frFR,
  "fr-ca": frCA,
  "de-de": deDE,
  "es-mx": esMX,
  "it-it": itIT,
};
