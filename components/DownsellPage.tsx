
import React, { useState, useEffect } from 'react';
import { DOWNSELL_DATA } from '../constants';
import { ShieldCheckIcon, AlertTriangleIcon } from './Icons';

const DownsellPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Aviso de saída (PushState trick para back redirect)
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      alert("⚠️ ESPERE! Não perca sua chance de garantir 50% de DESCONTO e 5 Bônus Exclusivos. Esta oferta não aparecerá novamente!");
    };

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-green-100">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center sticky top-0 z-50 shadow-xl border-b border-red-700 overflow-hidden">
        <div className="animate-pulse flex items-center justify-center gap-2 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
          <span>⚠️</span> NÃO FECHE ESTA PÁGINA! OFERTA EXCLUSIVA <span>⚠️</span>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 pt-6 pb-20">
        {/* Header Compacto para ver o botão rápido */}
        <div className="text-center mb-6">
          <h1 className="flex flex-col items-center leading-none mb-4">
            <span className="text-2xl md:text-3xl font-black uppercase text-zinc-900 tracking-tight">
              {DOWNSELL_DATA.title}
            </span>
            <span className="text-4xl md:text-5xl font-black uppercase italic text-[#22a44a] tracking-tighter">
              {DOWNSELL_DATA.titleHighlight}
            </span>
          </h1>
          <p className="text-zinc-500 font-bold text-[10px] md:text-xs uppercase tracking-widest opacity-80">
            Você foi selecionado para uma condição especial.
          </p>
        </div>

        {/* Pricing Box - AGORA NO TOPO */}
        <div className="relative bg-white rounded-[2.5rem] border-4 border-zinc-100 p-8 md:p-10 mb-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] text-center">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-tighter shadow-lg animate-bounce">
            🔥 50% DE DESCONTO LIBERADO
          </div>

          <div className="mt-4 mb-6">
            <p className="text-zinc-300 text-lg line-through font-black italic mb-1 opacity-60">De {DOWNSELL_DATA.oldPrice}</p>
            <div className="flex justify-center items-center gap-1">
              <span className="text-2xl font-black text-zinc-400 mt-2">R$</span>
              <span className="text-7xl md:text-8xl font-black tracking-tighter leading-none text-zinc-900">49<span className="text-3xl text-zinc-400">,99</span></span>
            </div>
            <p className="text-green-600 font-black text-[10px] uppercase mt-3 tracking-widest bg-green-50 inline-block px-4 py-1 rounded-full">
              Menos de {DOWNSELL_DATA.dailyPrice} por dia
            </p>
          </div>

          <a 
            href={DOWNSELL_DATA.checkoutUrl}
            className="group relative block w-full bg-[#22a44a] hover:bg-green-500 text-white py-6 md:py-7 rounded-3xl text-xl md:text-2xl font-black uppercase tracking-tight transition-all active:scale-95 shadow-[0_15px_40px_rgba(34,164,74,0.4)] overflow-hidden animate-pulse-custom"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            QUERO GARANTIR MINHA VAGA AGORA
          </a>

          {/* Timer Compacto */}
          <div className="mt-6 flex flex-col items-center gap-1">
             <div className="flex gap-2 text-xl font-black font-mono text-zinc-900 px-4 py-1 rounded-xl">
               {formatTime(timeLeft)}
             </div>
             <p className="text-[9px] font-black text-red-600 uppercase tracking-widest">A oferta expira quando o tempo zerar!</p>
          </div>
        </div>

        {/* Intro Texto - MOVIDO PARA BAIXO DO PRIMEIRO CTA */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-xl font-black italic">Olá, aqui é a <span className="text-red-600">{DOWNSELL_DATA.instructor}!</span></h2>
          <div className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium max-w-lg mx-auto">
            <p>Seu acesso já está sendo liberado, mas preste atenção: Esta é uma atualização exclusiva e você só verá esta página <strong>uma única vez</strong>.</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h3 className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 italic">
            VOCÊ VAI RECEBER ESSES 5 BÔNUS AGORA:
          </h3>
          <div className="grid gap-3">
            {DOWNSELL_DATA.bonusList.map((bonus, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-3xl border border-zinc-100 transition-all hover:border-green-500/30 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {bonus.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] font-black text-green-600 uppercase tracking-widest">GRÁTIS</span>
                    <span className="text-zinc-300 line-through text-[9px] font-bold italic">{bonus.price}</span>
                  </div>
                  <h4 className="font-black text-zinc-900 text-xs md:text-sm uppercase leading-tight">{bonus.title}</h4>
                  <p className="text-zinc-500 text-[9px] md:text-[10px] font-medium leading-tight">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-zinc-900 text-white p-8 rounded-[2rem] mb-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-black uppercase mb-1 italic">Garantia Blindada</h4>
              <p className="text-zinc-400 text-[10px] md:text-xs font-medium leading-relaxed">
                "Se esses bônus não trouxerem os resultados prometidos, eu devolverei 100% do seu dinheiro e seguiremos amigos."
              </p>
            </div>
          </div>
        </div>

        {/* Final Warning */}
        <div className="border-4 border-dashed border-red-600/20 p-8 rounded-[2rem] text-center mb-12">
          <div className="bg-red-600/10 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
             <AlertTriangleIcon className="w-5 h-5" />
          </div>
          <p className="text-zinc-500 text-[11px] font-bold leading-relaxed">
            Se sair da página sem aproveitar a oferta, você será <span className="text-zinc-900">BLOQUEADO</span> para acessar este vídeo e nunca mais poderá vê-lo.
          </p>
        </div>

        <a 
          href={DOWNSELL_DATA.checkoutUrl}
          className="block w-full bg-[#22a44a] text-white py-6 rounded-3xl text-center text-xl font-black uppercase tracking-tight shadow-xl hover:scale-[1.02] transition-transform active:scale-95 animate-pulse-custom"
        >
          QUERO MEUS BÔNUS AGORA
        </a>

        <div className="mt-12 text-center">
           <p className="text-[9px] text-zinc-300 uppercase font-black tracking-[0.3em] mb-4">Pagamento Seguro & Discreto</p>
           <div className="flex justify-center gap-5 opacity-20 grayscale h-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
           </div>
        </div>
      </main>
    </div>
  );
};

export default DownsellPage;
