var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campoDigitacao = $(".campo-digitacao");

campoDigitacao.on("input", function() {
    var campoDigitado = campoDigitacao.val();
    var palavrasDigitadas = campoDigitado.split(/\S+/).length - 1;
    
    $("#contador-palavras").text(palavrasDigitadas)
    $("#contador-caracteres").text(campoDigitado.length);
});