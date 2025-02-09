import { useRef } from "react";
import html2canvas from "html2canvas";

function Share() {
  const shareRef = useRef<HTMLDivElement>(null);

  const handleShareClick = () => {
    if (shareRef.current) {
      // Captura a área da tela indicada pelo shareRef (você pode ajustar o que deseja capturar)
      html2canvas(shareRef.current).then((canvas) => {
        // Converter o canvas em uma imagem base64
        const imageUrl = canvas.toDataURL("image/png");

        // Agora você pode compartilhar essa imagem, por exemplo, no Facebook ou WhatsApp
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
        
        // Abre o link para compartilhar no Facebook
        window.open(shareUrl, "_blank");
      });
    }
  };

  return (
    <button
      onClick={handleShareClick}
      className="w-full h-[58px] px-8 py-[18px] bg-[#f14968] rounded-[100px] shadow-[4px_8px_24px_0px_rgba(241,73,104,0.25)] justify-center items-center gap-2.5 inline-flex"
    >
      <p className="text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
        Compartilhar
      </p>
    </button>
  );
}

export default Share;
