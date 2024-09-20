function somar(){
    var valor1 = parseInt(document.getElementById("somaValor1").value);
    var valor2 = parseInt(document.getElementById("somaValor2").value);
    var resultado = valor1 + valor2;
    alert("Soma: " + resultado);
}

function subtrair(){
    var valor1 = parseInt(document.getElementById("subtracaoValor1").value);
    var valor2 = parseInt(document.getElementById("subtracaoValor2").value);
    var resultado = valor1 - valor2;
    alert("Subtracao: " + resultado);
}

function multiplicar(){
    var valor1 = parseInt(document.getElementById("multiplicacaoValor1").value);
    var valor2 = parseInt(document.getElementById("multiplicacaoValor2").value);
    var resultado = valor1 * valor2;
    alert("Multiplicacao: " + resultado);
}

function dividir(){
    var valor1 = parseInt(document.getElementById("divisaoValor1").value);
    var valor2 = parseInt(document.getElementById("divisaoValor2").value);
    
    if (valor2 === 0) {
        alert("Erro: Divisao por zero nao permitida.");
    } else {
        var resultado = valor1 / valor2;
        alert("Divisao: " + resultado);
    }
}
