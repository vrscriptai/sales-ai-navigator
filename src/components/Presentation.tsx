
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Map, 
  Camera, 
  Compass, 
  Plane,
  Mountain,
  Bird,
  Globe,
  Star,
  Sunrise,
  MapPin,
  Hotel
} from 'lucide-react';

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
      slidesRef.current[currentSlide + 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      slidesRef.current[currentSlide - 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="fixed bottom-8 right-8 z-50 flex gap-3">
        <Button
          variant="outline"
          className="rounded-full h-14 w-14 glass-card flex items-center justify-center"
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
        >
          <ArrowDown className="rotate-90" />
        </Button>
        <Button
          variant="outline"
          className="rounded-full h-14 w-14 glass-card flex items-center justify-center"
          onClick={handleNextSlide}
          disabled={currentSlide === 1}
        >
          <ArrowDown className="rotate-270" />
        </Button>
      </div>

      <div className="slide-container">
        <div
          id="slide-0"
          ref={(el) => (slidesRef.current[0] = el)}
          className="slide bg-gradient-to-br from-emerald-50 to-teal-100 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 text-gradient animate-slide-down animate-delay-100">
                  Путешествия с <span className="text-emerald-600">Птицей</span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-700 text-center mb-12 animate-slide-down animate-delay-200">
                  Откройте мир вместе с нами: Природа, Приключения, Впечатления
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full">
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-300">
                  <div className="feature-icon mb-4">
                    <Mountain size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Уникальные маршруты</h3>
                  <p className="text-gray-600">
                    Нестандартные путешествия по особенным местам
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-400">
                  <div className="feature-icon mb-4">
                    <Camera size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Фотографии</h3>
                  <p className="text-gray-600">
                    Профессиональные снимки в самых живописных локациях
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-500">
                  <div className="feature-icon mb-4">
                    <Compass size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-800">Экспертные гиды</h3>
                  <p className="text-gray-600">
                    Знатоки местной природы и культуры
                  </p>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 w-full mb-16 animate-fade-in">
                <h3 className="text-2xl font-medium mb-6 text-center text-gray-800">Наши направления</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:translate-y-[-5px]">
                    <div className="feature-icon mb-4">
                      <Sunrise size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Восточная Азия</h4>
                    <p className="text-gray-600">
                      Япония, Корея, Тайвань — страны восходящего солнца
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:translate-y-[-5px]">
                    <div className="feature-icon mb-4">
                      <Mountain size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Скандинавия</h4>
                    <p className="text-gray-600">
                      Норвегия, Швеция, Исландия — мир фьордов и северного сияния
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:translate-y-[-5px]">
                    <div className="feature-icon mb-4">
                      <Globe size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Латинская Америка</h4>
                    <p className="text-gray-600">
                      Перу, Чили, Эквадор — от джунглей до ледников
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 w-full max-w-4xl animate-slide-up">
                <h3 className="text-2xl font-medium mb-6 text-center text-gray-800">Как это работает?</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle workflow-icon">
                      <Globe className="text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600">Выбор направления</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-400" />
                  <ArrowDown className="block md:hidden text-gray-400" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-100 workflow-icon">
                      <MapPin className="text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600">Планирование</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-400" />
                  <ArrowDown className="block md:hidden text-gray-400" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-200 workflow-icon">
                      <Plane className="text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600">Путешествие</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-400" />
                  <ArrowDown className="block md:hidden text-gray-400" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-300 workflow-icon">
                      <Hotel className="text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600">Проживание</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-400" />
                  <ArrowDown className="block md:hidden text-gray-400" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-400 workflow-icon">
                      <Camera className="text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600">Впечатления</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="slide-1"
          ref={(el) => (slidesRef.current[1] = el)}
          className="slide bg-gradient-to-br from-emerald-50 to-teal-100 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-center animate-slide-down text-gradient">
                  Почему <span className="text-emerald-600">с Птицей</span>?
                </h2>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl text-center text-gray-700 mb-12 animate-slide-down animate-delay-100">
                  Индивидуальный подход + Забота о природе = Незабываемые впечатления
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
                <div className="glass-card rounded-2xl p-8 animate-fade-in animate-delay-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Bird className="text-emerald-600" size={28} />
                    <h3 className="text-2xl font-medium text-gray-800">Этичный туризм</h3>
                  </div>
                  
                  <ul className="list-check">
                    <li>
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">Минимальное воздействие на природу и местные сообщества</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">Поддержка локальных проектов по защите экосистем</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">Маленькие группы для максимального комфорта</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card rounded-2xl p-8 animate-fade-in animate-delay-300">
                  <div className="flex items-center gap-3 mb-6">
                    <Map className="text-emerald-600" size={28} />
                    <h3 className="text-2xl font-medium text-gray-800">Гибкие варианты туров</h3>
                  </div>
                  
                  <ul className="list-check">
                    <li>
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">От 35 000 ₽ за 7-дневный тур</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">90 000 ₽ за двухнедельное путешествие</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">Индивидуальные программы под ваши интересы</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 w-full max-w-4xl animate-slide-up animate-delay-400">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Star className="text-emerald-600" size={28} />
                  <h3 className="text-2xl font-medium text-gray-800">Наши преимущества</h3>
                </div>
                
                <div className="text-center mb-8">
                  <p className="text-3xl font-bold text-emerald-600 hover:text-gray-800 transition-colors duration-300">
                    5-летний опыт уникальных туров
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xl mb-6 text-gray-600">Свяжитесь с нами:</p>
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-medium text-gray-800">Анна Птицына</h4>
                    <a href="tel:+79150000000" className="text-emerald-600 hover:underline hover:text-gray-700 transition-colors duration-300 mt-2">+7 (915) 000-00-00</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
