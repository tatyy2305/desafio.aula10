const form = document.getElementById("formLogin");

form.addEventListener("submit", function (event) {
event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario === "DesenvolvimentodeSistemas" && senha === "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch") {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "falhou.html";
    }
});
