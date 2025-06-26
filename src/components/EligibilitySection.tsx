
import React from 'react';
import { Button } from '@/components/ui/button';
import { Target, Users, TrendingUp } from 'lucide-react';

const EligibilitySection = () => {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#00aced]">
            Un outil simple, visuel et intuitif
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Eligibility criteria */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-[#0f4260]">
                <Target className="w-6 h-6 mr-3 text-[#eed020] hidden md:block" />
                🎯 Critères d'éligibilité
              </h3>
              <p className="mb-4 leading-relaxed text-[#9B9B9B]">
                Pour que votre projet soit éligible au financement via le FOGEC, il doit répondre aux conditions suivantes :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 text-[#eed020]"></div>
                  <p className="leading-relaxed" style={{ color: '#9B9B9B' }}>
                    Être porté par un citoyen congolais
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 text-[#eed020]"></div>
                  <p className="leading-relaxed" style={{ color: '#9B9B9B' }}>
                    Créer de la valeur ajoutée au niveau national (les activités de simple négoce de produits importés sont exclues)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 text-[#eed020]"></div>
                  <p className="leading-relaxed" style={{ color: '#9B9B9B' }}>
                    Démontrer une rentabilité suffisante (vous devez justifier de votre capacité à rembourser un crédit)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center text-[#0f4260]">
                <TrendingUp className="w-5 h-5 mr-3 text-[#eed020] hidden md:block" />
                👉 Priorité sectorielle
              </h4>
              <p className="mb-2 leading-relaxed text-[#9B9B9B]">
                Tous les secteurs légaux sont éligibles, mais priorité aux projets dans :
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed" style={{ color: '#9B9B9B' }}>• Agro-industrie</li>
                <li className="leading-relaxed" style={{ color: '#9B9B9B' }}>• Industrie locale (production/transformation)</li>
                <li className="leading-relaxed" style={{ color: '#9B9B9B' }}>• Économie verte et durable</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center text-[#0f4260]">
                <Users className="w-5 h-5 mr-3 text-[#eed020] hidden md:block" />
                📤 Soumettre votre projet
              </h4>
              <div className="space-y-3">
                <p className="leading-relaxed text-[#9B9B9B]">
                  Vous êtes porteur d'un projet et souhaitez accéder à un financement FOGEC ? Grâce à la plateforme Business Plan, vous pouvez désormais rédiger, structurer et soumettre votre dossier directement en ligne, sans vous déplacer.
                </p>
                <p className="leading-relaxed text-[#9B9B9B]">
                  L'outil vous guide étape par étape, avec une interface intuitive, conforme aux critères FOGEC. Une fois prêt, transmettez votre dossier en un clic à l'équipe FOGEC.
                </p>
              </div>
              
              <div className="mt-6">
                <Button
                  size="lg"
                  className="font-semibold px-8 py-3 text-white bg-[#eed020] border border-[#eed020] hover:bg-[#D4A600] hover:text-[#D4A600] hover:bg-transparent"
                >
                  Créer mon Business Plan
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-2xl md:p-8 p-4 shadow-lg border border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="md:space-y-6 space-y-4">
                <div className="text-center">
                  <h5 className="text-lg font-semibold mb-4 text-[#0f4260]">
                    Processus simplifié
                  </h5>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 md:p-4 p-2.5 rounded-lg bg-[#F5F5F5]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#0f4260] bg-[#eed020]">1</div>
                    <span className='text-[#9B9B9B]'>Création du business plan</span>
                  </div>
                  <div className="flex items-center space-x-4 md:p-4 p-2.5 rounded-lg bg-[#F5F5F5]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#0f4260] bg-[#eed020]">2</div>
                    <span className='text-[#9B9B9B]'>Validation et structuration</span>
                  </div>
                  <div className="flex items-center space-x-4 md:p-4 p-2.5 rounded-lg bg-[#F5F5F5]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#0f4260] bg-[#eed020]">3</div>
                    <span className='text-[#9B9B9B]'>Soumission au FOGEC</span>
                  </div>
                  <div className="flex items-center space-x-4 md:p-4 p-2.5 rounded-lg bg-[#F5F5F5]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#0f4260] bg-[#eed020]">4</div>
                    <span className='text-[#9B9B9B]'>Suivi du financement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
