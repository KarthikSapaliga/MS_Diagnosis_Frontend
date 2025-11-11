import { useState, useMemo } from "react";
import {
  MapPin,
  Phone,
  Building2,
  Star,
  ExternalLink,
  Stethoscope,
  Users,
  Sparkles,
  Filter,
  X,
} from "lucide-react";

import { consulationService } from "@/lib/constants";

export default function MSConsultation() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedType, setSelectedType] = useState("All Types");
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const ratingOptions = [
    { value: 0, label: "All Ratings" },
    { value: 1, label: "1 or above" },
    { value: 2, label: "2 or above" },
    { value: 3, label: "3 or above" },
    { value: 4, label: "4 or above" },
    { value: 5, label: "5 only" },
  ];

  // Get unique cities
  const uniqueCities = useMemo(() => {
    const cities = [...new Set(consulationService.map((s) => s.city))];
    return ["All Cities", ...cities.sort()];
  }, []);

  // Get unique types
  const types = ["All Types", "Online", "Offline"];

  // Filter services
  const filteredServices = useMemo(() => {
    return consulationService.filter((service) => {
      const cityMatch =
        selectedCity === "All Cities" || service.city === selectedCity;
      const typeMatch =
        selectedType === "All Types" || service.type === selectedType;
      const ratingMatch =
        minRating === 0 ||
        (service.rating !== null && service.rating >= minRating);

      return cityMatch && typeMatch && ratingMatch;
    });
  }, [selectedCity, selectedType, minRating]);

  // Check if any filters are active
  const hasActiveFilters =
    selectedCity !== "All Cities" ||
    selectedType !== "All Types" ||
    minRating !== 0;

  const clearFilters = () => {
    setSelectedCity("All Cities");
    setSelectedType("All Types");
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="pt-28 pb-12 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          MS Consultation Services
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-6">
          Connect with leading medical institutions and support organizations
          specializing in Multiple Sclerosis care across India
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Filter Section */}
        <div className="mb-8">
          {/* Filter Toggle Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl shadow-md border border-slate-200 text-slate-700 font-medium mb-4"
          >
            <Filter className="h-5 w-5" />
            {showFilters ? "Hide Filters" : "Show Filters"}
            {hasActiveFilters && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                Active
              </span>
            )}
          </button>

          {/* Filters Container */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block bg-white rounded-2xl shadow-lg border border-slate-200 p-6`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-slate-700" />
                <h3 className="text-lg font-bold text-slate-900">Filters</h3>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* City Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {uniqueCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Consultation Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Rating
                </label>
                <select
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {ratingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value === 0 ? (
                        option.label
                      ) : (
                        <>
                          {"★".repeat(option.value)}
                          {" "}
                          {option.label}
                        </>
                      )}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing <span className="font-bold text-slate-900">{filteredServices.length}</span> of{" "}
                <span className="font-bold text-slate-900">{consulationService.length}</span> services
              </p>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((entry, index) => (
              <div
                key={index}
                className={`${entry.bgColor} ${entry.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden relative`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${entry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div
                        className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${entry.color} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                      >
                        {entry.name.includes("MSSI") ? (
                          <Users className="h-6 w-6 text-white" />
                        ) : (
                          <Stethoscope className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                          {entry.name}
                        </h2>
                      </div>
                    </div>
                    {entry.rating && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-slate-900">
                          {entry.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="text-sm font-medium">{entry.city}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <Phone className="h-4 w-4 text-slate-500 mt-0.5" />
                      <span className="text-sm">{entry.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-slate-500" />
                      <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-700 border border-slate-200">
                        {entry.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {entry.services}
                  </p>

                  <a
                    href={entry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${entry.color} text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${entry.color} opacity-5 rounded-tl-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-slate-200">
            <Filter className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No services found
            </h3>
            <p className="text-slate-600 mb-4">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">
                Need Help Finding the Right Care?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We recommend consulting with your primary care physician for
                personalized referrals. All listed institutions offer
                specialized MS care with experienced neurologists and
                comprehensive treatment programs. Contact details are provided
                for direct inquiries about appointments and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}