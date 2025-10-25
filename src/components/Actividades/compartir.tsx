'use client';
import { useState } from 'react';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      // intento moderno
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => fallbackCopy(url));
    } else {
      // fallback para móviles / navegadores antiguos
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // evitar scroll
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('No se pudo copiar la URL, por favor copiala manualmente.');
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="mt-12 flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md max-w-sm mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">¡Compartí esta página!</h3>
      <button
        onClick={handleCopy}
        aria-label="Copiar URL de la página"
        className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow hover:from-blue-600 hover:to-indigo-600 transition-colors"
      >
        {copied ? '¡Copiado! 📋' : 'Copiar URL'}
      </button>
      {!copied && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center break-words">
          Después podés compartirla donde quieras: WhatsApp, Instagram, Facebook...
        </p>
      )}
    </div>
  );
}
