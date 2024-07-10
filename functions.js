// Obter elementos do DOM
var floatingIcon = document.getElementById("floating-help-icon");
var modal = document.getElementById("help-modal");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no ícone, abre o modal
floatingIcon.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica no (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
