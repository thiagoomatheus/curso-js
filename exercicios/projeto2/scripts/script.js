let range = document.querySelector("#escolha-plano input[type= range]");
let valorRange = 3;
let pageview = document.querySelector("#pageview p");
let tipoPlano = document.querySelector("#periodo-plano");
let preco = 0;
let periodo = "mês";
let precoPeriodo = document.querySelector("#preco-periodo")
const simboloMoeda = "R$";

inserePlano()
inserePrecoEPeriodo()

range.addEventListener("input", function () {
    valorRange = parseInt(range.value);
    marcaProgressoRange(valorRange);
    inserePlano(valorRange);
    inserePrecoEPeriodo()
})

function inserePlano(input) {

    if (input === 1) {
        pageview.textContent = "10K PAGEVIEWS";
    }
    else if (input === 2) {
        pageview.textContent = "50K PAGEVIEWS";
    }
    else if (input === 3) {
        pageview.textContent = "100K PAGEVIEWS";
    }
    else if (input === 4) {
        pageview.textContent = "500K PAGEVIEWS";
    }
    else {
        pageview.textContent = "1M PAGEVIEWS";
    }
}

function inserePrecoEPeriodo() {

    retornaPreco(valorRange);
    retornaPeriodo();
    
    precoPeriodo.innerHTML = `<span id= "preco">${simboloMoeda} ${preco.toFixed(2)}</span> <span id= "periodo">/ ${periodo}</span>`;
    
    tipoPlano.addEventListener("click", function () { 
        
        retornaPreco(valorRange);
        retornaPeriodo();
    
        precoPeriodo.textContent = `${simboloMoeda} ${preco.toFixed(2)} / ${periodo}`;

        precoPeriodo.innerHTML = `<span id= "preco">${simboloMoeda} ${preco.toFixed(2)}</span> <span id= "periodo">/ ${periodo}</span>`;
     
    })
        
}

function marcaProgressoRange(input) {
    if (input === 1) {
        range.style.cssText = "background: var(--Light-Grayish-Blue)";
    }
    else if (input === 2) {
        range.style.cssText = "background: linear-gradient(to left, var(--Light-Grayish-Blue) 75%, var(--Strong-Cyan) 1px)";
    }
    else if (input === 3) {
        range.style.cssText = "background: linear-gradient(to left, var(--Light-Grayish-Blue) 50%, var(--Strong-Cyan) 1px)";
    }
    else if (input === 4) {
        range.style.cssText = "background: linear-gradient(to left, var(--Light-Grayish-Blue) 25%, var(--Strong-Cyan) 1px";
    }
    else {
        range.style.cssText = "background: var(--Strong-Cyan)";
    }
}

function retornaPreco(input) {

    if (tipoPlano.checked !== true) {

        if (input === 1) {
            preco = 8.00;
        }
        else if (input === 2) {
            preco = 12.00;
        }
        else if (input === 3) {
            preco = 16.00;
        }
        else if (input === 4) {
            preco = 24.00;
        }
        else {
            preco = 36.00;
        }
    }

    else {

        if (input === 1) {
            preco = parseFloat(((8.00 * 12.00) - ((8.00 * 12.00) * 0.25)));
        }
        else if (input === 2) {
            preco = parseFloat(((12.00 * 12.00) - ((12.00 * 12.00) * 0.25)));
        }
        else if (input === 3) {
            preco = parseFloat(((16.00 * 12.00) - ((16.00 * 12.00) * 0.25)));
        }
        else if (input === 4) {
            preco = parseFloat(((24.00 * 12.00) - ((24.00 * 12.00) * 0.25)));
        }
        else {
            preco = parseFloat(((36.00 * 12.00) - ((36.00 * 12.00) * 0.25)));
        }
    }
}

function retornaPeriodo() {
    if (tipoPlano.checked === true) {
        periodo = "ano";
    }

    if (tipoPlano.checked !== true) {
        periodo = "mês";
    }
}

// function inserePrecoMensal(input) {
    // if (input === 1) {
    //     preco.textContent = "8.00";
    // }
    // else if (input === 2) {
    //     preco.textContent = "12.00";
    // }
    // else if (input === 3) {
    //     preco.textContent = "16.00";
    // }
    // else if (input === 4) {
    //     preco.textContent = "24.00";
    // }
    // else {
    //     preco.textContent = "36.00";
    // }
// }

// function inserePrecoAnual(input) {
    // if (input === 1) {
    //     let precoAnual = parseFloat(((8.00 * 12.00) - ((8.00 * 12.00) * 0.25)));
    //     preco.textContent = `${precoAnual.toFixed(2)}`;
    // }
    // else if (input === 2) {
    //     let precoAnual = parseFloat(((12.00 * 12.00) - ((12.00 * 12.00) * 0.25)));
    //     preco.textContent = `${precoAnual.toFixed(2)}`;
    // }
    // else if (input === 3) {
    //     let precoAnual = parseFloat(((16.00 * 12.00) - ((16.00 * 12.00) * 0.25)));
    //     preco.textContent = `${precoAnual.toFixed(2)}`;
    // }
    // else if (input === 4) {
    //     let precoAnual = parseFloat(((24.00 * 12.00) - ((24.00 * 12.00) * 0.25)));
    //     preco.textContent = `${precoAnual.toFixed(2)}`;
    // }
    // else {
    //     let precoAnual = parseFloat(((36.00 * 12.00) - ((36.00 * 12.00) * 0.25)));
    //     preco.textContent = `${precoAnual.toFixed(2)}`;
    // }
// }