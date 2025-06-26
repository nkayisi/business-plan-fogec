
import React from 'react';

const FeaturesSection = () => {
  const features = [
    "Créez un business plan professionnel étape par étape",
    "Bénéficiez d'un accompagnement contextuel et d'exemples",
    "Intégrez vos prévisions financières avec clarté",
    "Exportez votre plan en PDF ou Word",
    "Soumettez-le directement au FOGEC depuis votre espace personnel",
    "Suivez votre projet jusqu'à l'obtention d'un financement"
  ];

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#00aced]">
            🧰 Ce que vous offre l'outil Business Plan
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-[#9B9B9B]">
            Découvrez une interface conviviale, pensée pour tous les porteurs de projets, avec des visuels pédagogiques et des aides à chaque étape. Vous restez concentré sur l'essentiel : faire avancer votre idée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 bg-[#F5F5F5]"
            >
              <div className="flex items-start md:space-x-4 space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#eed020]">
                  <span className="font-bold text-sm" style={{ color: '#0f4260' }}>✓</span>
                </div>
                <p className="leading-relaxed text-[#9B9B9B] text-sm md:text-base">{feature}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="text-white rounded-2xl p-4 md:p-8 lg:p-12 bg-[#0f4260]">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Prêt à transformer votre idée en projet structuré ?
            </h3>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Rejoignez les entrepreneurs qui font confiance à notre plateforme
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="font-semibold px-8 py-3 text-sm md:text-base rounded-lg transition-all duration-200 bg-[#eed020] text-[#0f4260] border border-[#eed020] hover:bg-transparent hover:text-[#eed020]"
              >
                Créer mon Business Plan
              </button>
              <button 
                className="font-semibold px-8 py-3 text-sm md:text-base rounded-lg transition-all duration-200 bg-transparent border-2 border-[#eed020] text-[#eed020] hover:bg-[#eed020] hover:text-[#0f4260]"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
