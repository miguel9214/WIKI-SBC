document.querySelectorAll('.toggle').forEach(el => {
    el.addEventListener('click', () => {
      const content = el.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });


  function toggleAccordion(header) {
// Encuentra el cuerpo de acordeón relacionado con el encabezado
var body = header.nextElementSibling;

// Si el cuerpo está visible, lo oculta, de lo contrario lo muestra
if (body.style.display === "block") {
  body.style.display = "none";
} else {
  body.style.display = "block";
}
}


function toggleDetails(card) {
// Alterna la visibilidad del cuerpo de la tarjeta
card.classList.toggle("show");
}