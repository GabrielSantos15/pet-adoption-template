import { FiShare2 } from "react-icons/fi"; // Ícone de compartilhamento (opcional)
import styles from './shareButton.module.css'

export const ShareButton = ({ pet }) => {
  const handleShare = async () => {
    // Monta os dados que vão aparecer no WhatsApp/Redes Sociais
    const shareData = {
      title: `Adote o ${pet.Nome}!`,
      text: `Olha que fofura! O ${pet.Nome} está esperando por um lar na OngPet. Venha conhecer!`,
      url: window.location.href, 
    };

    try {
      // Verifica se o navegador suporta a função nativa
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Se for navegador que não suporta, copia o link
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copiado para a área de transferência!");
      }
    } catch (error) {
      console.log("Compartilhamento cancelado ou falhou:", error);
    }
  };

  return (
    <button 
      onClick={handleShare} 
      className={styles.BtnCompartilhar}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      <FiShare2 /> Compartilhar
    </button>
  );
};