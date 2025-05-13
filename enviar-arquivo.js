var domain = window.location.hostname;

const fileInput = document.getElementById('fileInput');
const imgAvatar = document.getElementById('imgAvatar');

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
    const notificacao = document.getElementById("notificacao");
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (txtNomeArquivo.value.trim().length == 0) {
        notificacao.innerText = "É necessário preencher um nome para prosseguir!";
        alert(notificacao.innerText);
        txtNomeArquivo.focus();
        return false;
    }

    if (file) {
        const reader = new FileReader();

        reader.onload = async () => {
            const base64String = reader.result.split(',')[1]; // Remove o prefixo 'data:application/...' ou similar

            const jsonData = {
                nomeArquivo: file.name,
                tipoArquivo: file.type,
                conteudoBase64: base64String,
            };

            try {
                const response = await fetch('/upload/file', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData)
                });

                const data = await response.text();
                notificacao.textContent = data;
            } catch (error) {
                notificacao.textContent = 'Ocorreu um erro ao enviar o arquivo via JSON.';
                console.error(error);
            }
        };

        reader.onerror = () => {
            notificacao.innerText = 'Erro ao ler o arquivo.';
        };

        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (data URL)
    } else {
        notificacao.innerText = 'Por favor, selecione um arquivo.';
        alert(notificacao.innerText);
        fileInput.focus();
        return false;
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
    // notificacao.innerText = result.message + msgErro;
    // alert(result.message + msgErro);
});

function getFileName(filePath) {
  return filePath.split('/').pop();
}