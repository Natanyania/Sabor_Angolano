function validarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value.trim();
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let pessoas = document.getElementById("pessoas").value;

    if (nome.trim() === "") {
        alert("Preencha o nome.");
        return false;
    }

    if (email.trim() === "" || !email.includes("@")) {
        alert("Digite um email válido.");
        return false;
    }

    if (!/^\d{9}$/.test(telefone)) {
        alert("O telefone deve ter exatamente 9 dígitos.");
        return false;
    }

    if (data === "") {
        alert("Selecione uma data.");
        return false;
    }

    if (hora === "") {
        alert("Selecione uma hora.");
        return false;
    }

    if (pessoas === "") {
        alert("Indique o número de pessoas.");
        return false;
    }

    document.getElementById("meuModal").classList.add("active");
    return true; 
}

function fecharModal() {
    document.getElementById("meuModal").classList.remove("active");
    document.querySelector("form").reset();
}
