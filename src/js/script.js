// On cible les éléments à modifier
const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-btn");

// Ajoute un écouteur d'événements au bouton 'toggle'
toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;
    console.log("isOpen :", isOpen, "isClosed :", isClosed);

    // Mise à jour des attributs ARIA pour l'accessibilité
    nav.ariaHidden = isOpen 
    toggle.ariaExpanded = isClosed 
});