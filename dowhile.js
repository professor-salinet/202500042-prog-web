function contador() { // declara a função "contador" os parênteses vazios significa que não tem parâmetro para ser enviado ou "coletado"
    const tempo = new Date(); // declaração da variável "tempo" somente leitura, a qual receberá o objeto "Date" do javascript
    let hora = tempo.getHours(); // declaração da variável "hora" temporária, a qual receberá o retorno do método "getHours"
    let minuto = tempo.getMinutes(); // declaração da variável "minuto" temporária, a qual receberá o retorno do método "getMinutes"
    let segundo = tempo.getSeconds(); // declaração da variável "segundo" temporária, a qual receberá o retorno do método "getSeconds"
    if (document.getElementById("cbxMarcarTempo").checked == true) {
        document.getElementById("div_hora").innerText = hora;
        document.getElementById("div_minuto").innerText = minuto;
        document.getElementById("div_segundo").innerText = segundo;
    }
    setInterval(contador, 1000); // essa linha apenas conta 1 segundo
    if (document.getElementById("cbxMarcarTempo").checked == false) {
        document.getElementById("div_hora").innerText = "";
        document.getElementById("div_minuto").innerText = "";
        document.getElementById("div_segundo").innerText = "";
        clearInterval();
    }
}

document.getElementById("cbxMarcarTempo").addEventListener('click', () => {
    contador();
});