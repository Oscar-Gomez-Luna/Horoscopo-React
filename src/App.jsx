import './App.css'
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const App = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [imgSing, setImgSing] = useState('');
  const [horoscope, setHoroscope] = useState('');

  const getZodiacFromDate = (dateString) => {
    if (!dateString) return 'Aries';
    
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Tauro';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Géminis';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cáncer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitario';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricornio';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Acuario';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Piscis';
    
    return 'Aries';
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    var urlSign = "";
    setBirthDate(date);
    if (date) {
      const sign = getZodiacFromDate(date);
      setZodiacSign(sign);
      urlSign = "signos/" + sign.toLocaleLowerCase() + ".png";
      setImgSing(urlSign)
    }
  };

  const generateHoroscope = () => {
    const horoscopes = {
      'Aries': 'Hoy es un día perfecto para nuevos comienzos. Tu energía natural te llevará hacia oportunidades inesperadas. Confía en tu instinto.',
      'Tauro': 'La paciencia será tu mejor aliada hoy. Los proyectos que has estado cultivando comenzarán a dar frutos pronto.',
      'Géminis': 'Tu versatilidad te abrirá múltiples caminos. Es momento de comunicar tus ideas con claridad y entusiasmo.',
      'Cáncer': 'Tu intuición está especialmente aguda hoy. Presta atención a las señales emocionales de quienes te rodean.',
      'Leo': 'Tu carisma natural brillará intensamente. Es el momento perfecto para liderar y inspirar a otros.',
      'Virgo': 'Los detalles importan más que nunca. Tu análisis meticuloso te llevará al éxito en proyectos importantes.',
      'Libra': 'El equilibrio y la armonía serán claves en tus relaciones. Busca soluciones que beneficien a todos.',
      'Escorpio': 'Tu intensidad emocional será tu fortaleza. Profundiza en lo que realmente te apasiona.',
      'Sagitario': 'La aventura te llama. Mantente abierto a experiencias que expandan tu perspectiva del mundo.',
      'Capricornio': 'Tu determinación te acerca a tus metas. La disciplina que has mantenido comenzará a mostrar resultados.',
      'Acuario': 'Tu originalidad será reconocida. Las ideas innovadoras que tienes cambiarán tu entorno positivamente.',
      'Piscis': 'Tu sensibilidad te conecta profundamente con otros. Usa tu empatía como herramienta de sanación.'
    };
    
    setHoroscope(horoscopes[zodiacSign] || horoscopes['']);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8 flex items-center justify-center gap-3">
          Horóscopo React
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Panel de Entrada */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Calendar className="text-blue-300" />
              Información Personal
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={handleDateChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
              
              <button
                onClick={generateHoroscope}
                className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Calcular Horóscopo
              </button>
            </div>
          </div>
          
          {/* Panel de Resultado */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              Tu Signo es: {zodiacSign}
            </h2>
            
            <div className="mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-3xl"><img src={imgSing} alt="" /></span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">
                {name}:
              </h3>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                {horoscope ? (
                  <p className="text-white/90 leading-relaxed text-sm">
                    {horoscope}
                  </p>
                ) : (
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded animate-pulse w-4/5"></div>
                    <div className="h-4 bg-white/10 rounded animate-pulse w-3/4"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;