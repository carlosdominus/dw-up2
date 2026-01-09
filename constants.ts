
import { PageData } from './types';

export const DOWNSELL_DATA = {
  instructor: "Lara",
  title: "BÔNUS PARA OS",
  titleHighlight: "50 PRIMEIROS",
  subtitle: "Esta é uma oferta exclusiva de um único acesso.",
  oldPrice: "R$ 97,00",
  newPrice: "R$ 49,99",
  dailyPrice: "R$ 1,67",
  checkoutUrl: "https://www.google.com",
  bonusList: [
    { title: "Caixa Preta dos Atores Adultos", desc: "Guia com mais de 125 posições sexuais intensas.", price: "R$ 197", icon: "🔞" },
    { title: "Manual da Persuasão", desc: "Frases infalíveis para seduzir sem sequer tocar.", price: "R$ 147", icon: "🗣️" },
    { title: "Protocolo Oceano Orgásmico", desc: "Técnicas para orgasmos múltiplos e intensos.", price: "R$ 97", icon: "🌊" },
    { title: "Segredos das Fantasias", desc: "Realize os desejos mais profundos e ocultos dela.", price: "R$ 127", icon: "🎭" },
    { title: "BÔNUS SECRETO", desc: "Técnica exclusiva revelada apenas na área de membros.", price: "R$ 497", icon: "🔒" }
  ]
};

// Mantendo para compatibilidade caso necessário
export const COMMON_DATA: PageData = {
  title: "⚠️PLANO PERSONALIZADO⚠️",
  subtitle: "Ajustamos as doses exatas com base no seu perfil para resultados em até 7 dias.",
  oldPrice: "R$97,00",
  newPrice: "R$49,99",
  ctaText: "QUERO MEU PLANO + BÔNUS",
  alertText: "🚨 Oferta válida apenas para esta sessão!",
  benefits: [],
  bonusList: [],
  guaranteeDays: 30,
  checkoutUrl: "https://www.google.com"
};
