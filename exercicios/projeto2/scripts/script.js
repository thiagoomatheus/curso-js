let range = document.querySelector("#escolha-plano input[type= range]");
let valorRange = 3;
let pageview = document.querySelector("#escolha-plano p");
let preco = document.querySelector("#preco span");

let tipoPlano = document.querySelector("#periodo-plano");

range.addEventListener("input", function () {
    valorRange = parseInt(range.value);

    marcaProgressoRange(valorRange)
    inserePlano(valorRange)
    inserePreco()
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

function inserePreco() {

    inserePrecoMensal(valorRange);

    if (tipoPlano.checked === true) {
        inserePrecoAnual(valorRange)
    }

    tipoPlano.addEventListener("click", function    () { 
        
        if (tipoPlano.checked === true) {
            inserePrecoAnual(valorRange);
        }

        if (tipoPlano.checked !== true) {
            inserePrecoMensal(valorRange)
        }
     
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

function inserePrecoMensal(input) {
    if (input === 1) {
        preco.textContent = "8.00";
    }
    else if (input === 2) {
        preco.textContent = "12.00";
    }
    else if (input === 3) {
        preco.textContent = "16.00";
    }
    else if (input === 4) {
        preco.textContent = "24.00";
    }
    else {
        preco.textContent = "36.00";
    }
}

function inserePrecoAnual(input) {
    if (input === 1) {
        let precoAnual = parseFloat(((8.00 * 12.00) - ((8.00 * 12.00) * 0.25)));
        preco.textContent = `${precoAnual.toFixed(2)}`;
    }
    else if (input === 2) {
        let precoAnual = parseFloat(((12.00 * 12.00) - ((12.00 * 12.00) * 0.25)));
        preco.textContent = `${precoAnual.toFixed(2)}`;
    }
    else if (input === 3) {
        let precoAnual = parseFloat(((16.00 * 12.00) - ((16.00 * 12.00) * 0.25)));
        preco.textContent = `${precoAnual.toFixed(2)}`;
    }
    else if (input === 4) {
        let precoAnual = parseFloat(((24.00 * 12.00) - ((24.00 * 12.00) * 0.25)));
        preco.textContent = `${precoAnual.toFixed(2)}`;
    }
    else {
        let precoAnual = parseFloat(((36.00 * 12.00) - ((36.00 * 12.00) * 0.25)));
        preco.textContent = `${precoAnual.toFixed(2)}`;
    }
}