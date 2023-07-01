import { menuButton } from '../js/menuButton.js';
import { accordion } from '../js/accordion.js';
import { modal } from '../js/modal.js';

document.addEventListener("DOMContentLoaded", () => {
    menuButton();
    accordion();

    const globalModal = modal();
    window.openModal = globalModal.openModal; // Hacer que la función openModal sea global
    window.closeModal = globalModal.closeModal; // Hacer que la función closeModal sea global
})