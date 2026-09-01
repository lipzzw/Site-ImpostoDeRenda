function calcular(){
    var salario = Number(document.getElementById("salario").value);
    document.getElementById("irpf").innerHTML = salario;
}

function calcularAliquota(salario, ir){
    return(ir / salario) * 100;
}

function faixa75(salario){
    return salario * 0.075-158.40;
}

function calcularIRPF(salario){
    if(salario <= 2112.00){
        return faixaIsento(salario);
    }
}
