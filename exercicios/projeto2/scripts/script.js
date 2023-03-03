let range = document.querySelector("#escolha-plano input[type= range]");
let valorRange = 3;
let pageview = document.querySelector("#escolha-plano p");
let preco = document.querySelector("#preco span");

range.addEventListener("input", function () {
    valorRange = parseInt(range.value);
    
    inserePlano(valorRange)
    inserePreco(valorRange)
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

function inserePreco(input) {
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