function calcularPorcentagemAliquota(salario, ir) {
    if (!salario || salario <= 0 || !ir || ir <= 0) {
        return 0;
    }
    return (ir / salario) * 100;
}


function calcularFaixa1(baseCalculo) {
    return 0;
}

function calcularFaixa2(baseCalculo) {

    if (baseCalculo <= 2826.65) {
        return (baseCalculo * 0.075) - 158.40;
    }
    return (2826.65 * 0.075) - 158.40; 
}

function calcularFaixa3(baseCalculo) {
    
    if (baseCalculo <= 3751.05) {
        return (baseCalculo * 0.15) - 370.40;
    }
    return (3751.05 * 0.15) - 370.40;
}

function calcularFaixa4(baseCalculo) {
   
    if (baseCalculo <= 4664.68) {
        return (baseCalculo * 0.225) - 651.73;
    }
    return (4664.68 * 0.225) - 651.73;
}

function calcularFaixa5(baseCalculo) {
    
    return (baseCalculo * 0.275) - 884.96;
}


function calcularImpostoDevido(salario) {
    let imposto = 0;

    if (salario <= 2112.00) {
        imposto = calcularFaixa1(salario);
    } else if (salario <= 2826.65) {
        imposto = calcularFaixa2(salario);
    } else if (salario <= 3751.05) {
        imposto = calcularFaixa3(salario);
    } else if (salario <= 4664.68) {
        imposto = calcularFaixa4(salario);
    } else {
        imposto = calcularFaixa5(salario);
    }

    return imposto > 0 ? imposto : 0;
}


function processarCalculo() {
    const inputSalario = document.getElementById('salario').value;
    const salario = parseFloat(inputSalario);

    if (isNaN(salario) || salario < 0) {
        return;
    }

    const valorIR = calcularImpostoDevido(salario);
    const aliquotaEfetiva = calcularPorcentagemAliquota(salario, valorIR);

    document.getElementById('valIrpf').innerText = `R$ ${valorIR.toFixed(2).replace('.', ',')}`;
    document.getElementById('valAliquota').innerText = `${aliquotaEfetiva.toFixed(2).replace('.', ',')}%`;
    
    document.getElementById('resultado').style.display = 'block';
}

function limparCampos() {
    document.getElementById('salario').value = '';
    document.getElementById('valIrpf').innerText = 'R$ 0,00';
    document.getElementById('valAliquota').innerText = '0,00%';
    document.getElementById('resultado').style.display = 'none';
}
