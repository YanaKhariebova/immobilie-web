import { FilterBar } from "../components/organisms/FilterBar";
import { PropertyGrid } from "../components/organisms/PropertyGrid";
import type { Property, PropertyFilterSearch } from "../types";
import { useEffect, useState } from "react";
import { loadProperties } from "../data/loadProperties";

interface PropertiesPageProps {
  filters: PropertyFilterSearch;
  onFilterChange: (filters: Partial<PropertyFilterSearch>) => void;
  onFilterReset: () => void;
}

export function PropertiesPage({
  filters,
  onFilterChange,
  onFilterReset,
}: PropertiesPageProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const data = await loadProperties();

        if (active) setProperties(data);
      } catch {
        if (active) {
          setError("Die Immobilien konnten nicht geladen werden. Bitte versuchen Sie es erneut.");
        }
      } finally {
        if (active) setIsLoading(false);
      }
    }

    void loadData();

    return () => {
      active = false;
    };
  }, [retryCount]);

  const handleRetry = () => {
    setError("");
    setIsLoading(true);
    setRetryCount((currentCount) => currentCount + 1);
  };

  const normalizedCity = filters.city.trim().toLocaleLowerCase("de-DE");
  const filteredProperties = properties.filter((property) => {
    const matchesTransaction =
      filters.transactionType === "alle" ||
      property.transactionType === filters.transactionType;
    const matchesPropertyType =
      filters.propertyType === "alle" ||
      property.propertyType === filters.propertyType;
    const matchesCity =
      normalizedCity.length === 0 ||
      property.address.city.toLocaleLowerCase("de-DE").includes(normalizedCity);
    const matchesPrice =
      filters.maxPrice === undefined || property.price <= filters.maxPrice;
    const matchesRooms =
      filters.minRooms === undefined || property.rooms >= filters.minRooms;
    const matchesLivingArea =
      filters.minLivingArea === undefined ||
      property.livingArea >= filters.minLivingArea;

    return (
      matchesTransaction &&
      matchesPropertyType &&
      matchesCity &&
      matchesPrice &&
      matchesRooms &&
      matchesLivingArea
    );
  });

  return (
    <div className="bg-ink-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            Immobilienportfolio
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl">
            Besondere Immobilien für besondere Ansprüche.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Entdecken Sie sorgfältig ausgewählte Kauf- und Mietobjekte in den
            gefragtesten Lagen Deutschlands.
          </p>
        </header>

        <div className="mt-12 lg:mt-16">
          <FilterBar
            filters={filters}
            onChange={onFilterChange}
            onReset={onFilterReset}
          />
        </div>

        <div className="mt-14 lg:mt-20">
          {isLoading ? (
            <p role="status" className="py-10 text-white/75">
              Immobilien werden geladen …
            </p>
          ) : error ? (
            <div className="border border-white/15 bg-white/[0.04] p-5 sm:p-8">
              <p role="alert" className="leading-7 text-white/75">{error}</p>
              <button
                type="button"
                onClick={handleRetry}
                className="mt-5 min-h-12 w-full bg-gold-500 px-5 py-3 font-semibold text-black transition hover:bg-white sm:w-auto"
              >
                Erneut versuchen
              </button>
            </div>
          ) : (
            <PropertyGrid properties={filteredProperties} />
          )}
        </div>
      </div>
    </div>
  );
}
