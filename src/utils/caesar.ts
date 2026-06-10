/**
 * Criptografa um texto usando a Cifra de César com um determinado deslocamento (chave).
 * Mantém maiúsculas, minúsculas, espaços, números e pontuações.
 */
export function encryptCaesar(text: string, shift: number): string {
  // Garante que o deslocamento esteja no intervalo de 0 a 25
  const normalizedShift = ((shift % 26) + 26) % 26;

  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Letras Maiúsculas (A-Z: 65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
      }
      // Letras Minúsculas (a-z: 97-122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
      }

      // Retorna caracteres especiais, números e espaços sem alterar
      return char;
    })
    .join("");
}

/**
 * Descriptografa um texto aplicando o deslocamento inverso.
 */
export function decryptCaesar(text: string, shift: number): string {
  const normalizedShift = ((shift % 26) + 26) % 26;
  // Descriptografar é o mesmo que criptografar com o deslocamento complementar (26 - shift)
  return encryptCaesar(text, 26 - normalizedShift);
}