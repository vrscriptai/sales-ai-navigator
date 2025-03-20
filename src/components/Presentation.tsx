
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Phone, 
  FileText, 
  Brain, 
  Database, 
  TrendingUp,
  PersonStanding,
  Settings,
  Star,
  BarChart3,
  LineChart,
  PieChart
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
          className="slide bg-gradient-to-br from-black to-gray-900 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 text-gradient animate-slide-down animate-delay-100">
                  Script<span className="text-brand-blue">AI</span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-12 animate-slide-down animate-delay-200">
                  AI-агент для отдела продаж: Анализ звонков → Рост прибыли
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full">
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-300">
                  <div className="feature-icon mb-4">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">Интеграция с CRM</h3>
                  <p className="text-gray-300">
                    Автоматическое обновление карточек клиентов
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-400">
                  <div className="feature-icon mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">Транскрибация</h3>
                  <p className="text-gray-300">
                    Преобразование звонков в текст с анализом
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-500">
                  <div className="feature-icon mb-4">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">AI-анализ</h3>
                  <p className="text-gray-300">
                    Оценка этапов продаж и работы с возражениями
                  </p>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 w-full mb-16 animate-fade-in">
                <h3 className="text-2xl font-medium mb-6 text-center text-white">Автоматическая аналитика</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <BarChart3 size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-white">Графики в реальном времени</h4>
                    <p className="text-gray-300">
                      Динамические графики с постоянным обновлением
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <LineChart size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-white">Отчеты</h4>
                    <p className="text-gray-300">
                      Автоматическое формирование по ключевым метрикам
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <PieChart size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-white">Рекомендации</h4>
                    <p className="text-gray-300">
                      Персонализированные советы для улучшения продаж
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 w-full max-w-4xl animate-slide-up">
                <h3 className="text-2xl font-medium mb-6 text-center text-white">Как это работает?</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle">
                      <Phone className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-gray-300">Звонок</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-600" />
                  <ArrowDown className="block md:hidden text-gray-600" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-100">
                      <FileText className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-gray-300">Текст</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-600" />
                  <ArrowDown className="block md:hidden text-gray-600" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-200">
                      <Brain className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-gray-300">AI-анализ</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-600" />
                  <ArrowDown className="block md:hidden text-gray-600" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-300">
                      <Database className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-gray-300">Данные в CRM</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-gray-600" />
                  <ArrowDown className="block md:hidden text-gray-600" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-400">
                      <TrendingUp className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-gray-300">Рост продаж</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="slide-1"
          ref={(el) => (slidesRef.current[1] = el)}
          className="slide bg-gradient-to-br from-black to-gray-900 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-center animate-slide-down text-gradient">
                  Почему <span className="text-brand-blue">Script</span>?
                </h2>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl text-center text-gray-300 mb-12 animate-slide-down animate-delay-100">
                  Кастомизация + Поддержка = Ваши рекорды
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
                <div className="glass-card rounded-2xl p-8 animate-fade-in animate-delay-200">
                  <div className="flex items-center gap-3 mb-6">
                    <PersonStanding className="text-brand-blue" size={28} />
                    <h3 className="text-2xl font-medium text-white">Не просто инструмент, а партнер</h3>
                  </div>
                  
                  <ul className="list-check">
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">Персональное сопровождение и доработки под ваш бизнес</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">Аналитика адаптируется под задачи отдела</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">Автоматические уведомления о критических моментах</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card rounded-2xl p-8 animate-fade-in animate-delay-300">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="text-brand-blue" size={28} />
                    <h3 className="text-2xl font-medium text-white">Гибкая подписка</h3>
                  </div>
                  
                  <ul className="list-check">
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">5 000 ₽/менеджер в месяц</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">30 000 ₽/3000 минут звонков</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">Доступ к расширенной аналитике и дашбордам</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 w-full max-w-4xl animate-slide-up animate-delay-400">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Star className="text-brand-blue" size={28} />
                  <h3 className="text-2xl font-medium text-white">Результат</h3>
                </div>
                
                <div className="text-center mb-8">
                  <p className="text-3xl font-bold text-brand-blue">
                    +15-30% к выполнению плана
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xl mb-6 text-gray-300">Свяжитесь со мной:</p>
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-medium text-white">Ряснов Виктор</h4>
                    <a href="tel:+79150862516" className="text-brand-blue hover:underline mt-2">+7 (915) 086-25-16</a>
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
