function mostrarModal(titulo, url) {
    let modalTitle = document.getElementById("modalTitle");
    let ifModal = document.getElementById("ifModal");
    let modalPaginas = document.getElementById("modalPaginas");

    modalTitle.innerText = titulo;
    ifModal.src = url;
    modalPaginas.style.display = "block";
}

window.setInterval(() => {
    const date = new Date();

    var cumprimento = "";
    if (date.getHours() >= 0 && date.getHours() <= 11) {
        cumprimento = "Bom dia!";
    }

    if (date.getHours() >= 12 && date.getHours() <= 17) {
        cumprimento = "Boa tarde!";
    }

    if (date.getHours() >= 18 && date.getHours() <= 23) {
        cumprimento = "Boa noite!";
    }

    var dtAtual = "Hoje é " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var hrAtual = "Agora são " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById("cumprimento").innerText = cumprimento;
    document.getElementById("data").innerText = dtAtual;
    document.getElementById("horario").innerText = hrAtual;
}, 1000);