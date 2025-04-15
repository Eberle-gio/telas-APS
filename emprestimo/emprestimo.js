function mostrarCampoObservacao() {
    const select = document.getElementById("materiais");
    const campo = document.getElementById("campoObservacao");

    if (select.value === "Materiais Diversos") {
        campo.style.display = "block";
    } else {
        campo.style.display = "none";
    }
}