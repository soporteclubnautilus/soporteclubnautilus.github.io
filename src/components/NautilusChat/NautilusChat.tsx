import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { MessageCircle, X, Send, User } from 'lucide-react';

// --- CONFIGURACIÓN CUSTOMIZABLE ---
const BOT_CONFIG = {
  name: "Nautilus Bot",
  avatar: "/images/bot-avatar.png", // Cambia esto por tu foto
  welcomeMessage: "¡Hola! Soy el asistente de Club Nautilus. ¿En qué puedo ayudarte hoy?",
  initialButtons: [
    { label: "Ver Precios", query: "precios" },
    { label: "Ver Horarios", query: "horarios" },
    { label: "Aquagym", query: "aquagym" },
  ],
  notFoundMessage: "Lo siento, no encontré información específica sobre eso. ¿Podrías intentar con el nombre de una actividad (ej: Yoga)?"
};

export default function NautilusChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  // Cargar JSON de actividades
  useEffect(() => {
    fetch('/data/actividades.json') // Asegúrate de que tu JSON esté en public/data/
      .then(res => res.json())
      .then(json => setData(json));
    
    setMessages([{ role: 'bot', text: BOT_CONFIG.welcomeMessage, isInitial: true }]);
  }, []);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const processQuery = (userQuery) => {
    const fuse = new Fuse(data, {
      keys: ['titulo', 'slug', 'descripcionBreve'],
      threshold: 0.4
    });

    const results = fuse.search(userQuery);
    const isPriceQuery = userQuery.toLowerCase().includes('precio') || userQuery.toLowerCase().includes('cuanto');
    const isScheduleQuery = userQuery.toLowerCase().includes('horario') || userQuery.toLowerCase().includes('cuando');

    if (results.length > 0) {
      const activity = results[0].item;
      let responseText = `Sobre **${activity.titulo}**: `;

      if (isPriceQuery) {
        const precios = activity.precios.map(p => `- ${p.descripcion}: $${p.valor}`).join('\n');
        responseText += `\nLos precios son:\n${precios}`;
      } else if (isScheduleQuery) {
        const dias = Object.entries(activity.horarios)
          .map(([dia, horas]) => `- **${dia}**: ${horas.join(', ')}`)
          .join('\n');
        responseText += `\nLos horarios disponibles son:\n${dias}`;
      } else {
        responseText += `${activity.descripcionBreve}\n¿Te gustaría saber los precios o los horarios de esta actividad?`;
      }
      return responseText;
    }
    return BOT_CONFIG.notFoundMessage;
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    const newMessages = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const botResponse = processQuery(text);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Botón Flotante */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center gap-3">
            <img src={BOT_CONFIG.avatar} alt="Bot" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <div>
              <h3 className="text-white font-bold leading-none">{BOT_CONFIG.name}</h3>
              <span className="text-blue-100 text-xs">En línea ahora</span>
            </div>
          </div>

          {/* Mensajes */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                }`}>
                  <div className="whitespace-pre-line">{msg.text}</div>
                  
                  {/* Botones Iniciales */}
                  {msg.isInitial && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {BOT_CONFIG.initialButtons.map((btn, idx) => (
                        <button 
                          key={idx}
                          onClick={() => handleSendMessage(btn.query)}
                          className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Escribe tu duda..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button 
              onClick={() => handleSendMessage(input)}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}