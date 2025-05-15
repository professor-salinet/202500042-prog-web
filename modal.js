const modalFade = document.createElement("div");
modalFade.classList.add("modal");
modalFade.classList.add("fade");
modalFade.id = "modal";
modalFade.tabIndex = "-1";
modalFade.ariaLabel = "modalLabel";
modalFade.style.display = "none";
modalFade.ariaHidden = "true";

const modalDialog = document.createElement("div");
modalDialog.classList.add("modal-dialog");
modalDialog.classList.add("modal-sm");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const modalHeader = document.createElement("div");
modalHeader.classList.add("modal-header");

const modalTitle = document.createElement("h1");
modalTitle.classList.add("modal-title");
modalTitle.classList.add("fs-4");
modalTitle.id = "modalSmLabel";
modalTitle.innerText = "Notificação";

const btnCloseModal = document.createElement("button");
btnCloseModal.type = "button";
btnCloseModal.classList.add("btn-close");
btnCloseModal.dataset.bsDismiss = "modal";
btnCloseModal.ariaLabel = "Fechar";
// btnCloseModal.onclick = "fecharModal()";

const modalBody = document.createElement("div");
modalBody.classList.add("modal-body");
modalBody.innerHTML = "<p>...</p>";

modalHeader.appendChild(modalTitle);
modalHeader.appendChild(btnCloseModal);

modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);

modalDialog.appendChild(modalContent);

modalFade.appendChild(modalDialog);

document.body.appendChild(modalFade);

function fecharModal() {
    // modalFade.dispatchEvent(new Event('hide.bs.modal'));
    modalFade.classList.remove("show");
}

function abrirModal() {
    // modalFade.dispatchEvent(new Event('show.bs.modal'));
    modalFade.classList.add("show");
}

// modal.addEventListener('shown.bs.modal', () => {
//     myInput.focus();
// })

abrirModal();