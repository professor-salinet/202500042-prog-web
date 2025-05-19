var domain = window.location.hostname;

const fileInput = document.getElementById('fileInput');
const imgAvatar = document.getElementById('imgAvatar');
const notificacao = document.getElementById('notificacao');

fileInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      imgAvatar.src = event.target.result;
    }

    reader.readAsDataURL(file);
  }
});

document.getElementById('frmEnviarArquivo').addEventListener('submit', async (e) => {
    e.preventDefault();

    const txtNomeArquivo = document.getElementById("txtNomeArquivo");
    const nomeArquivo = txtNomeArquivo.value;
    const notificacao = document.getElementById("notificacao");
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const id = "1";

    if (txtNomeArquivo.value.trim().length == 0) {
        notificacao.innerHTML = "É necessário preencher um nome para prosseguir!";
        abrirModal(notificacao.innerHTML);
        txtNomeArquivo.focus();
        return false;
    }

    try {
        if (file) {
            const reader = new FileReader();

            reader.onload = async () => {
                const base64String = reader.result.split(',')[1]; // Remove o prefixo 'data:application/...' ou similar

                const jsonData = {
                    nomeArquivo: file.name,
                    tipoArquivo: file.type,
                    conteudoBase64: base64String,
                    id: id,
                    nome: nomeArquivo,
                    domain: domain
                };

                const response = await fetch('/upload/file', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData)
                });

                const result = await response.json();
                notificacao.innerHTML = result.message;
                abrirModal(notificacao.innerHTML);
            };

            reader.onerror = () => {
                notificacao.innerHTML = `Erro ao ler o arquivo ${file.name}.`;
            };

            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (data URL)
        } else {
            notificacao.innerHTML = 'Por favor, selecione um arquivo.';
            abrirModal(notificacao.innerHTML);
            fileInput.focus();
            return false;
        }
    } catch (error) {
        notificacao.innerHTML = 'Ocorreu um erro ao enviar o arquivo via JSON.';
        abrirModal(notificacao.innerHTML);
        console.error(error);
    }

    // const response = await fetch('/upload/file', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ nome, login, senha, domain })
    // });

    // const result = await response.json();

    // if (!result.error) {
    //     let imgTemp = document.createElement("img");
    //     imgTemp.src = `./uploads/${result.filename}`;
    //     document.body.appendChild(imgTemp);
    // }

    // let msgErro = (result.error) ? " " + result.error : "";
    // notificacao.innerHTML = result.message + msgErro;
});

function getFileName(filePath) {
  return filePath.split('/').pop();
}