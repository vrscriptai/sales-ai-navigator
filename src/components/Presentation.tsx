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
  PieChart,
  Send
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const salesPerformanceData = [
  { name: 'Янв', plan: 100, actual: 120 },
  { name: 'Фев', plan: 110, actual: 130 },
  { name: 'Мар', plan: 120, actual: 140 },
  { name: 'Апр', plan: 130, actual: 145 },
  { name: 'Май', plan: 140, actual: 160 },
  { name: 'Июн', plan: 150, actual: 190 },
];

const callAnalyticsData = [
  { name: 'Пн', calls: 45, conversions: 12 },
  { name: 'Вт', calls: 55, conversions: 15 },
  { name: 'Ср', calls: 60, conversions: 18 },
  { name: 'Чт', calls: 52, conversions: 14 },
  { name: 'Пт', calls: 65, conversions: 20 },
];

const scriptUsageData = [
  { name: 'Соблюдено', value: 68, color: '#4ade80' },
  { name: 'Частично', value: 22, color: '#facc15' },
  { name: 'Нарушено', value: 10, color: '#f87171' },
];

const objectionHandlingData = [
  { month: 'Янв', score: 65 },
  { month: 'Фев', score: 70 },
  { month: 'Мар', score: 75 },
  { month: 'Апр', score: 82 },
  { month: 'Май', score: 90 },
  { month: 'Июн', score: 95 },
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    if (currentSlide < 2) {
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
          disabled={currentSlide === 2}
        >
          <ArrowDown className="rotate-270" />
        </Button>
      </div>

      <div className="slide-container">
        <div
          id="slide-0"
          ref={(el) => (slidesRef.current[0] = el)}
          className="slide bg-gradient-to-br from-gray-50 to-blue-50 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
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
                    Автоматическое обновление карточек клиентов
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-400">
                  <div className="feature-icon mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Транскрибация</h3>
                  <p className="text-brand-gray-600">
                    Преобразование звонков в текст с анализом
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-fade-in animate-delay-500">
                  <div className="feature-icon mb-4">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">AI-анализ</h3>
                  <p className="text-brand-gray-600">
                    Оценка этапов продаж и работы с возражениями
                  </p>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 w-full mb-16 animate-fade-in">
                <h3 className="text-2xl font-medium mb-6 text-center">Автоматическая аналитика</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <BarChart3 size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Графики в реальном времени</h4>
                    <p className="text-brand-gray-600">
                      Динамические графики с постоянным обновлением
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <LineChart size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Отчеты</h4>
                    <p className="text-brand-gray-600">
                      Автоматическое формирование по ключевым метрикам
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <PieChart size={24} />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Рекомендации</h4>
                    <p className="text-brand-gray-600">
                      Персонализированные советы для улучшения продаж
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

        <div
          id="slide-1"
          ref={(el) => (slidesRef.current[1] = el)}
          className="slide bg-gradient-to-br from-gray-50 to-blue-50 p-8"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="overflow-hidden mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center animate-slide-down">
                  Визуализация <span className="text-brand-blue">аналитики</span>
                </h2>
              </div>
              
              <div className="overflow-hidden mb-8">
                <p className="text-xl text-center text-brand-gray-600 animate-slide-down animate-delay-100">
                  Примеры дашбордов и отчетов, которые создает ScriptAI
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                <div className="glass-card rounded-2xl p-4 animate-fade-in animate-delay-200">
                  <h3 className="text-xl font-medium mb-4 px-2">Выполнение плана продаж</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={salesPerformanceData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="plan" name="План" fill="#64748b" />
                        <Bar dataKey="actual" name="Факт" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-brand-gray-600 mt-2 px-2">
                    Сравнение плана и фактических продаж по месяцам
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-4 animate-fade-in animate-delay-300">
                  <h3 className="text-xl font-medium mb-4 px-2">Соблюдение скрипта</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RePieChart>
                        <Pie
                          data={scriptUsageData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {scriptUsageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </RePieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-brand-gray-600 mt-2 px-2">
                    Процентное соотношение соблюдения скриптов менеджерами
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-4 animate-fade-in animate-delay-400">
                  <h3 className="text-xl font-medium mb-4 px-2">Статистика звонков</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={callAnalyticsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="calls" name="Звонки" fill="#a78bfa" />
                        <Bar dataKey="conversions" name="Успешные" fill="#4ade80" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-brand-gray-600 mt-2 px-2">
                    Количество звонков и успешных сделок по дням недели
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-4 animate-fade-in animate-delay-500">
                  <h3 className="text-xl font-medium mb-4 px-2">Работа с возражениями</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={objectionHandlingData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[50, 100]} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area 
                          type="monotone" 
                          dataKey="score" 
                          name="Оценка" 
                          stroke="#0ea5e9" 
                          fill="rgba(14, 165, 233, 0.2)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-brand-gray-600 mt-2 px-2">
                    Динамика навыка работы с возражениями по AI-оценке
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="slide-2"
          ref={(el) => (slidesRef.current[2] = el)}
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
                      <span>Персональное сопровождение и доработки под ваш бизнес</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>Аналитика адаптируется под задачи отдела</span>
                    </li>
                    <li>
                      <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
                      <span>Автоматические уведомления о критических моментах</span>
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
                      <span>Доступ к расширенной аналитике и дашбордам</span>
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
                </div>
                
                <div className="text-center">
                  <p className="text-xl mb-6">Свяжитесь со мной:</p>
                  <a 
                    href="https://t.me/rvviktor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button 
                      className="bg-[#0088cc] hover:bg-[#0077b5] text-white gap-2 px-6 py-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      <Send className="w-5 h-5" />
                      <span className="font-medium">Telegram @rvviktor</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-md">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default Presentation;
