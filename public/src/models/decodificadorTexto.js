function criptografarPalavra(palavra) {
    palavra = palavra.toLowerCase(); // transforma a palavra em letras minúsculas
    
    palavra = palavra.replace(/e/g, "enter"); // substitui todas as letras "e" por "enter"
    palavra = palavra.replace(/i/g, "imes"); // substitui todas as letras "i" por "imes"
    palavra = palavra.replace(/a/g, "ai"); // substitui todas as letras "a" por "ai"
    palavra = palavra.replace(/o/g, "ober"); // substitui todas as letras "o" por "ober"
    palavra = palavra.replace(/u/g, "ufat"); // substitui todas as letras "u" por "ufat"
    
    return palavra;
  }

  function descriptografarPalavra(palavraCriptografada) {
    palavraCriptografada = palavraCriptografada.toLowerCase(); // transforma a palavra em letras minúsculas
    
    palavraCriptografada = palavraCriptografada.replace(/enter/g, "e"); // substitui todas as letras "enter" por "e"
    palavraCriptografada = palavraCriptografada.replace(/imes/g, "i"); // substitui todas as letras "imes" por "i"
    palavraCriptografada = palavraCriptografada.replace(/ai/g, "a"); // substitui todas as letras "ai" por "a"
    palavraCriptografada = palavraCriptografada.replace(/ober/g, "o"); // substitui todas as letras "ober" por "o"
    palavraCriptografada = palavraCriptografada.replace(/ufat/g, "u"); // substitui todas as letras "ufat" por "u"
    
    return palavraCriptografada;
  }

  // seleciona os elementos da página
const btns = document.getElementsByClassName("btn")
const inputResultado = document.getElementById("resultado-texto") 
const btnCriptografar = document.getElementById("criptografar");
const btnDescriptografar = document.getElementById("descriptografar");
const textArea = document.getElementById("texto-criptografado");
const botaoCopiar = document.getElementById("copiar");

// adiciona um listener para o botão "Executar"
btnCriptografar.addEventListener('click', () => {
    const texto = textArea.value;
    const resultado = criptografarPalavra(texto);
    return inputResultado.value = resultado;
});

btnDescriptografar.addEventListener('click', () => {
    const texto = textArea.value;
    const resultado = descriptografarPalavra(texto);
    return inputResultado.value = resultado;
});


// adiciona um listener para o botão "Copiar"
botaoCopiar.addEventListener('click', () => {
    inputResultado.select();
    navigator.clipboard.writeText(inputResultado.value)
      .then(() => {
        console.log('Texto copiado para a área de transferência');
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto: ', err);
      });
  });
