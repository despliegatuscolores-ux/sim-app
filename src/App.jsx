import React, { useState } from 'react';
import { Shield, Brain, Heart, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const WEEKS_DATA = [
  { week: 1, title: 'Auditoría del SIM y la Tríada', focus: 'Mapear 6 necesidades, foco, lenguaje y fisiología habitual.' },
  { week: 2, title: 'Ruptura de Patrón y Anclaje', focus: 'Condicionar estados pico y romper bucles reactivos.' },
  { week: 3, title: 'Deconstrucción de Creencias', focus: 'Proceso Dickensiano y eliminación de creencias limitantes.' },
  { week: 4, title: 'Jerarquía de Valores y Reglas', focus: 'Alinear valores de atracción/evasión y relajar reglas.' },
  { week: 5, title: 'Vehículos de Necesidades', focus: 'Transición hacia Crecimiento y Contribución.' },
  { week: 6, title: 'Metáforas y Diálogo Maestro', focus: 'Preguntas de poder matutinas y nocturnas.' },
  { week: 7, title: 'Cableado Neuro-Asociativo', focus: 'Ensayo mental e inmersión en escenarios de prueba.' },
  { week: 8, title: 'Sellado e Identidad Inquebrantable', focus: 'Hito de ruptura y protocolo de mantenimiento diario.' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentWeek, setCurrentWeek] = useState(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Barra Superior */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-sky-500/10 border border-sky-500/30 rounded-lg text-sky-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight">S.I.M. OS</h1>
            <p className="text-xs text-slate-400">Sistema Interno Maestro · 8 Semanas</p>
          </div>
        </div>

        <nav className="flex space-x-2 text-sm">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${activeTab === 'overview' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
            Programa
          </button>
          <button 
            onClick={() => setActiveTab('triad')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${activeTab === 'triad' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
            La Tríada
          </button>
        </nav>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 space-y-8">
        {activeTab === 'overview' && (
          <>
            {/* Banner de Estado */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 mb-2">
                  Semana {currentWeek} Activa
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {WEEKS_DATA[currentWeek - 1].title}
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-xl">
                  {WEEKS_DATA[currentWeek - 1].focus}
                </p>
              </div>
              <button className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-sm transition flex items-center space-x-2">
                <span>Comenzar práctica</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Módulos de las 8 Semanas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WEEKS_DATA.map((item) => (
                <div 
                  key={item.week}
                  onClick={() => setCurrentWeek(item.week)}
                  className={`p-5 rounded-xl border cursor-pointer transition flex items-start space-x-4 ${
                    currentWeek === item.week 
                      ? 'border-sky-500 bg-sky-950/20 shadow-lg shadow-sky-500/5' 
                      : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg text-sm font-bold ${currentWeek === item.week ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    0{item.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-base">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'triad' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl w-fit">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">1. Enfoque y Foco</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Aquello en lo que te enfocas determina lo que sientes. Preguntas diarias conscientes dirigen el foco de inmediato hacia recursos y soluciones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">2. Fisiología</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                La emoción se crea con movimiento. Postura, respiración rítmica y tensión muscular cambian la bioquímica cerebral en segundos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl w-fit">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">3. Lenguaje y Significado</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Las palabras que utilizas definen tu experiencia. Cambiar las etiquetas lingüísticas reprograma la interpretación de los hechos.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}