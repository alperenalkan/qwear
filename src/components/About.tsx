import React from 'react';
import { Target, Award, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../lib/LanguageContext';
import { images } from '../lib/images';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-lg mb-2 font-gothic-elegant">{t.about.title}</p>
          <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900 font-gothic-display">{t.about.welcome}</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-gothic-body">
            {t.about.welcomeText}
          </p>
        </div>

        {/* Our Journey */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl mb-6 text-gray-900 font-gothic-display">
                {t.about.journeyTitle}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-gothic-body">
                {t.about.journeyText}
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h4 className="text-xl mb-3 text-gray-900 font-gothic-display">
                  {t.about.excellenceTitle}
                </h4>
                <p className="text-gray-700 leading-relaxed font-gothic-body">
                  {t.about.excellenceText}
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src={images.about.trade}
                alt="International Trade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl mb-12 text-gray-900 text-center font-gothic-display">
            {t.about.missionTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-amber-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl mb-3 text-gray-900 font-gothic-display">{t.about.excellence}</h4>
                <p className="text-gray-600 font-gothic-body">
                  {t.about.excellenceDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl mb-3 text-gray-900 font-gothic-display">{t.about.integrity}</h4>
                <p className="text-gray-600 font-gothic-body">
                  {t.about.integrityDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl mb-3 text-gray-900 font-gothic-display">{t.about.partnership}</h4>
                <p className="text-gray-600 font-gothic-body">
                  {t.about.partnershipDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
}
