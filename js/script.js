
function soma(n1, n2) {
    resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = (resultado);
}
function subtracao(n1, n2) {
    resultado = n1 - n2
    document.getElementById("resultado").innerHTML = (resultado);
}
function multiplicacao(n1, n2) {
    resultado = n1 * n2
    document.getElementById("resultado").innerHTML = (resultado);
}
function divisao(n1, n2) {
    resultado = n1 / n2
    document.getElementById("resultado").innerHTML = (resultado);
}

function Calcular() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let op = document.getElementById("op").value;
    switch (op) {
        case '+':
            soma(n1, n2, op)
            break
        case '-':
            subtracao(n1, n2, op)
            break
        case '*':
            multiplicacao(n1, n2, op)
            break
        case '/':
            if (n2 == 0) {
                document.getElementById("resultado").innerHTML = "Não Existe divisão por 0"
            } else {
                divisao(n1, n2, op)
            }
            break
        default:
            document.getElementById("resultado").innerHTML = "Opção Inválida!"

    }
}