
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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const generatePDF = async () => {
    if (!containerRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const slides = slidesRef.current.filter(Boolean);
      
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        if (!slide) continue;
        
        // Force each slide to be visible before capturing
        slide.style.display = 'flex';
        
        const canvas = await html2canvas(slide, {
          scale: 2,
          useCORS: true,
          logging: false
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        
        // First page doesn't need addPage
        if (i > 0) {
          pdf.addPage();
        }
        
        // Calculate aspect ratio to fit on A4 page
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        
        // Reset display if needed
        if (i !== currentSlide) {
          slide.style.display = '';
        }
      }
      
      pdf.save('Script-AI-Presentation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
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
        <Button
          onClick={generatePDF}
          disabled={isGenerating}
          className="rounded-full glass-card bg-brand-blue hover:bg-blue-600 text-white border-none px-6"
        >
          {isGenerating ? 'Generating...' : 'Download PDF'}
        </Button>
      </div>

      <div className="slide-container">
        {/* Slide 1 */}
        <div
          ref={(el) => (slidesRef.current[0] = el)}
          className="slide bg-gradient-to-br from-gray-50 to-blue-50 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden">
                <div className="text-sm uppercase tracking-wider text-brand-gray-500 mb-2 animate-slide-down">
                  Представляем
                </div>
              </div>
              
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple animate-slide-down animate-delay-100">
                  Script<span className="text-brand-gray-800">AI</span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-medium text-brand-gray-800 text-center mb-12 animate-slide-down animate-delay-200">
                  AI-агент для отдела продаж: Анализ звонков → Рост прибыли
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full">
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-300">
                  <div className="feature-icon mb-4">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Интеграция с CRM</h3>
                  <p className="text-brand-gray-600">
                    Автоматическое обновление карточек клиентов через API
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-400">
                  <div className="feature-icon mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Транскрибация</h3>
                  <p className="text-brand-gray-600">
                    Преобразование звонков в текст с последующим анализом
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-500">
                  <div className="feature-icon mb-4">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">AI-анализ</h3>
                  <p className="text-brand-gray-600">
                    Оценка этапов продаж, возражений, упоминаний конкурентов
                  </p>
                </div>
              </div>
              
              {/* Added new section for analytics */}
              <div className="glass-card rounded-2xl p-6 w-full mb-16 animate-fade-in">
                <h3 className="text-2xl font-medium mb-6 text-center">Автоматическая аналитика</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <BarChart3 size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Графики в режиме реального времени</h4>
                    <p className="text-brand-gray-600">
                      Динамические графики с обновлением по мере поступления новых данных
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <LineChart size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Детальные отчеты</h4>
                    <p className="text-brand-gray-600">
                      Автоматическое формирование отчетов по ключевым показателям продаж
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <PieChart size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Умные рекомендации</h4>
                    <p className="text-brand-gray-600">
                      Персонализированные советы для улучшения стратегии продаж
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 w-full max-w-4xl animate-slide-up">
                <h3 className="text-2xl font-medium mb-6 text-center">Как это работает?</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle">
                      <Phone className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-brand-gray-700">Звонок</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-brand-gray-300" />
                  <ArrowDown className="block md:hidden text-brand-gray-300" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-100">
                      <FileText className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-brand-gray-700">Текст</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-brand-gray-300" />
                  <ArrowDown className="block md:hidden text-brand-gray-300" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-200">
                      <Brain className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-brand-gray-700">AI-анализ</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-brand-gray-300" />
                  <ArrowDown className="block md:hidden text-brand-gray-300" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-300">
                      <Database className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-brand-gray-700">Данные в CRM</p>
                  </div>
                  
                  <ArrowRight className="hidden md:block text-brand-gray-300" />
                  <ArrowDown className="block md:hidden text-brand-gray-300" />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 animate-bounce-subtle animate-delay-400">
                      <TrendingUp className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-brand-gray-700">Рост продаж</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          ref={(el) => (slidesRef.current[1] = el)}
          className="slide bg-gradient-to-br from-gray-50 to-blue-50 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-center animate-slide-down">
                  Почему <span className="text-brand-blue">Script</span>?
                </h2>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl text-center text-brand-gray-600 mb-12 animate-slide-down animate-delay-100">
                  Кастомизация + Поддержка = Ваши рекорды
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
                <div className="glass-card rounded-2xl p-8 animate-fade-in animate-delay-200">
                  <div className="flex items-center gap-3 mb-6">
                    <PersonStanding className="text-brand-blue" size={28} />
                    <h3 className="text-2xl font-medium">Не просто инструмент, а партнер</h3>
                  </div>
                  
                  <ul className="list-check">
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>Персональное сопровождение, обратная связь, доработки алгоритмов под ваш бизнес</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>Аналитика адаптируется под задачи отдела (например, акцент на конкурентов или этапы продаж)</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>Автоматические уведомления о критических моментах в реальном времени</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card rounded-2xl p-8 animate-fade-in animate-delay-300">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="text-brand-blue" size={28} />
                    <h3 className="text-2xl font-medium">Гибкая подписка</h3>
                  </div>
                  
                  <ul className="list-check">
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>5 000 ₽/менеджер в месяц</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>30 000 ₽/3000 минут звонков</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>Доступ к расширенной аналитике и дашбордам в режиме реального времени</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 w-full max-w-4xl animate-slide-up animate-delay-400">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Star className="text-brand-blue" size={28} />
                  <h3 className="text-2xl font-medium">Результат</h3>
                </div>
                
                <div className="text-center mb-8">
                  <p className="text-3xl font-bold text-brand-blue">
                    +15-30% к выполнению плана
                  </p>
                  <p className="text-brand-gray-600 mt-2">
                    (по данным пилотных клиентов)
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xl mb-6">Хотите такие же цифры?</p>
                  <Button className="rounded-full bg-brand-blue hover:bg-blue-600 text-white px-8 py-6 text-lg">
                    Записаться на демо
                  </Button>
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
