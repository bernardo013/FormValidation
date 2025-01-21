const form = document.querySelector("#container");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message");
const closeModalButton = document.querySelector("#close-modal");

// Adiciona evento ao botão de fechar
closeModalButton.addEventListener("click", () => {
    console.log("Botão de fechar clicado");
    modal.classList.add("hidden");
});

// Fecha o modal ao clicar fora do conteúdo
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

// Exibe o modal com a mensagem de erro
function showModal(message) {
    modalMessage.textContent = message; // Define o texto da mensagem
    modal.classList.remove("hidden"); // Mostra o modal
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o nome está vazio
    if (nameInput.value === "") {
        showModal("Preencha o campo de nome.");
        return;
    }

    // Verificar se o email está preenchido e é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        showModal("Preencha o campo de email corretamente.");
        return;
    }

    // Verificar se a senha está preenchida
    if (!validationPassword(passwordInput.value, 8)) {
        showModal("A senha precisa ter no mínimo 8 dígitos.");
        return;
    }

    // Verificar se a situação foi selecionada
    if (jobSelect.value === "") {
        showModal("Por favor, selecione a sua opção.");
        return;
    }

    // Verificar se a caixa de texto está preenchida
    if (messageTextArea.value === "") {
        showModal("Por favor, preencha a mensagem!");
        return;
    }

    // Se todos os campos estiverem preenchidos, envie o form
    form.submit();
});

// Função que valida email
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Função para validar a senha do usuário
function validationPassword(password, minLength) {
    return password.length >= minLength;
}
