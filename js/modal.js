// modal.js
export function modal() {
    function openModal() {
        const modal = document.getElementById('modal');
        modal.style.display = "block";
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
    }

    // Devolver los métodos que se desean utilizar fuera del ámbito de la función modal()
    return {
        openModal,
        closeModal
    };
}