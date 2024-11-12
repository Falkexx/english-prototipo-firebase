function formatPhoneNumber(phone: string, country:string): string {
  // Remove quaisquer caracteres que não sejam números
  const cleaned = phone.replace(/\D/g, '');

  // Verifica se o número tem os dígitos suficientes para o formato desejado
  if (cleaned.length === 11) {
      const countryCode = '+55';                       // Código do país fixo
      const areaCode = cleaned.slice(0, 2);            // (11)
      const mainNumber = cleaned.slice(2);            // 939395780 sem espaçamento

      // Retorna o número formatado
      return `${countryCode} (${areaCode}) ${mainNumber}`;
  } else {
      throw new Error('Número de telefone inválido');
  }
}

export default formatPhoneNumber