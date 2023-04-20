function gritar() {
    alert("AHHHHHHHHHHHHHHHHHHHHHHHH!!!!!");
}

function perguntar() {
    var nome;
    nome = prompt("Qual seu nome? ");
    alert("Olá, " + nome);
}

function mudar_texto() {
    var h1 = document.getElementsByTagName("h1");
    if(h1[0].innerText == "Olá, Gafanhoto!") {
        h1[0].innerText = "Evolua seu lado Geek!";
    } else {
        h1[0].innerText = "Olá, Gafanhoto!";
    }
  
}

function incrementar() {
    var p1 = document.getElementById("p1");
    p1.innerText = parseInt(p1.innerText) + 1;
}