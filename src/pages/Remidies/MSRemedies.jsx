import {
  Pill,
  Brain,
  Heart,
  Activity,
  Sun,
  Utensils,
  Dumbbell,
  Bed,
  Droplets,
  Smile,
  Stethoscope,
  FlaskConical,
  Wind,
  Leaf,
  Sparkles,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";

function MSRemedies() {
  const remedies = [
    {
      icon: Pill,
      title: "Disease-Modifying Therapies",
      description:
        "DMTs like Interferons, Glatiramer acetate, and Ocrelizumab help slow disease progression",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      size: "medium",
    },
    {
      icon: Brain,
      title: "Cognitive Training",
      description: "Mental exercises to support memory and focus",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      size: "small",
    },
    {
      icon: Dumbbell,
      title: "Physical Therapy",
      description: "Light exercise and stretching to maintain mobility",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      size: "small",
    },
    {
      icon: Utensils,
      title: "Balanced Diet",
      description: "Focus on anti-inflammatory and nutrient-rich foods",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      size: "small",
    },
    {
      icon: Bed,
      title: "Quality Sleep",
      description: "7–9 hours of restful sleep supports recovery",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      size: "small",
    },
    {
      icon: Sun,
      title: "Vitamin D",
      description:
        "Maintain optimal levels through sunlight exposure & supplements",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      size: "medium",
    },
    {
      icon: Droplets,
      title: "Hydration",
      description: "Drink adequate water throughout the day",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      size: "small",
    },
    {
      icon: Wind,
      title: "Stress Management",
      description: "Use breathing, meditation, or yoga to relax",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      size: "small",
    },
    {
      icon: Stethoscope,
      title: "Regular Check-ups",
      description:
        "Stay connected with your care team. Schedule neurological check-ups every few months, monitor progress with MRI scans, and discuss any new symptoms. Regular follow-ups help personalize treatment and keep your health on track.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      size: "large",
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Light cardio helps boost stamina & circulation",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      size: "small",
    },
    {
      icon: Sparkles,
      title: "Temperature Control",
      description: "Avoid overheating; stay cool to reduce flare-ups",
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      size: "small",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-1";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <div className="pt-28 pb-16 text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Multiple Sclerosis Management
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto px-6">
              Comprehensive remedies and lifestyle strategies to help manage MS
              symptoms and improve quality of life
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {remedies.map((remedy, index) => {
              const Icon = remedy.icon;
              return (
                <div
                  key={index}
                  className={`${getSizeClasses(remedy.size)} ${remedy.bgColor} ${remedy.borderColor} border-2 rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden relative`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${remedy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${remedy.color} rounded-xl shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3
                      className={`text-xl font-bold mb-2 bg-gradient-to-r ${remedy.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-all duration-300`}
                    >
                      {remedy.title}
                    </h3>

                    <p className="text-slate-600 text-md leading-relaxed flex-grow">
                      {remedy.description}
                    </p>

                    {/* Decorative element */}
                    <div
                      className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${remedy.color} opacity-5 rounded-tl-full`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Stethoscope className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Important Medical Disclaimer
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  This information is for educational purposes only. Always
                  consult with your healthcare provider or neurologist before
                  starting any new treatment, medication, or lifestyle change.
                  MS management should be personalized to your specific
                  condition and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSRemedies;
