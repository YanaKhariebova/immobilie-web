import type { Property } from "../types/property";
import { isRecord } from "./isRecord";

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item: unknown) => typeof item === "string")
  );
}

export function isProperty(value: unknown): value is Property {
  if (!isRecord(value)) return false;

  const address = value.address;
  const certificate = value.energyCertificate;

  if (!isRecord(address) || !isRecord(certificate)) return false;

  return (
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.description === "string" &&
    (value.transactionType === "kauf" || value.transactionType === "miete") &&
    (value.propertyType === "wohnung" ||
      value.propertyType === "haus" ||
      value.propertyType === "gewerbe" ||
      value.propertyType === "grundstueck") &&
    (value.status === "verfuegbar" ||
      value.status === "reserviert" ||
      value.status === "verkauft" ||
      value.status === "vermietet") &&
    isNumber(value.price) &&
    isNumber(value.rooms) &&
    isNumber(value.livingArea) &&
    (value.plotArea === undefined || isNumber(value.plotArea)) &&
    typeof address.street === "string" &&
    typeof address.postalCode === "string" &&
    typeof address.city === "string" &&
    typeof address.state === "string" &&
    isStringArray(value.images) &&
    isStringArray(value.features) &&
    (certificate.type === "bedarfsausweis" ||
      certificate.type === "verbrauchsausweis") &&
    isNumber(certificate.energyValue) &&
    typeof certificate.energySource === "string" &&
    isNumber(certificate.yearOfConstruction) &&
    typeof value.agentId === "string" &&
    typeof value.featured === "boolean"
  );
}
