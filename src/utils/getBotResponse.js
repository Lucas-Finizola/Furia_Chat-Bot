import FallenSkin from '../assets/images/skin-fallen.png';
import YuurihSkin from '../assets/images/skin-yuurih.png';
import KsceratoSkin from '../assets/images/skin-kscerato.webp';
import CheloSkin from '../assets/images/skin-chelo.png';
import Molodoy from '../assets/images/skin-molodoy.webp';

export function getBotResponse(msg) {
  const m = msg.toLowerCase();

  if (m.includes('menu')) {
    return `📋Menu de Opções:
  1️⃣ O surgimento
  2️⃣ Em quais e-sports compete
  3️⃣ Os principais jogadores
  4️⃣ Saber a mira do jogador
  5️⃣ A skin favorita dele
  6️⃣ Elogios e sugestões
 Digite uma dessas opções para saber mais.`;
  }
  

  if (m.includes('surgimento') || m === '1') {
    return "A FURIA foi fundada em 2017 com a missão de representar o Brasil nos e-sports!";
  }

  if (m.includes('e-sports') || m === '2') {
    return "A FURIA compete em CS2, Valorant, League of Legends, Rocket League e Rainbow Six Siege!";
  }

  if (m.includes('jogadores') || m === '3') {
    return "KSCERATO, yuurih, chelo, molodoy e FalleN estão no time principal de CS2.";
  }

  if (m.includes('mira') || m === '4') {
    return "Escolha um jogador para ver a configuração de mira favorita: FalleN, yuurih, KSCERATO, chelo ou molodoy.";
  }
  if (m.includes('skin') || m === '5') {
      return "Escolha um jogador para ver a skin favorita: FalleN, yuurih, KSCERATO, chelo ou molodoy.";
    }

  if (m.includes('fallen')) {
    return {
      text: "🧙 A skin favorita do FalleN é a AWP | Dragon Lore.",
      image: FallenSkin
    };
  }

  if (m.includes('yuurih')) {
    return {
      text: "🔥 Yuurih curte a AK-47 | Fire Serpent!",
      image: YuurihSkin
    };
  }

  if (m.includes('kscerato')) {
    return {
      text: "💥 KSCERATO prefere a M4A4 | Howl.",
      image: KsceratoSkin
    };
  }

  if (m.includes('chelo')) {
    return {
      text: "⚡ chelo joga muito bem com a USP | Kill Confirmed!",
      image: CheloSkin
    };
  }

  if (m.includes('molodoy')) {
    return {
      text: "🎯 molodoy adora a AWP | Neo-Noir!",
      image: Molodoy
    };
  }

  if (m.includes('elogio') || m.includes('sugestão') || m === '6') {
    return "Pode mandar seu elogio ou sugestão aqui! A gente valoriza muito sua opinião. 🙌";
  }

 return "🤔 Hmm, não entendi o que você quis dizer. Digite [Menu] para ver as opções disponíveis.";

}