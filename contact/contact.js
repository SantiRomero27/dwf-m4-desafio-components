// Función para agregar contact
function addContactComponent(parentEl) {
    // Creo un elemento
    const contactEl = document.createElement("section");

    // Le doy una clase
    contactEl.setAttribute("class", "contact-section");

    // Le agrego contenido a la sección
    contactEl.innerHTML = `<div class="contact-section__content">
    <h2 class="contact-section__content-title">Contacto</h2>
    <form class="contact-form">
        <label for="name" class="contact-form__label">Nombre</label>
        <input
            type="text"
            class="contact-form__input"
            id="name"
            name="name"
        />
        <label for="email" class="contact-form__label">Email</label>
        <input
            type="email"
            class="contact-form__input"
            id="email"
            name="email"
        />
        <label for="message" class="contact-form__label"
            >Mensaje</label
        >
        <textarea
            name="message"
            class="contact-form__textarea"
            id="message"
            cols="30"
            rows="10"
        ></textarea>
        <button class="contact-form__button">Enviar</button>
    </form>
    </div>`;

    // Obtengo el form para darle un Event Listener
    const formEl = contactEl.querySelector(".contact-form");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("> El formulario fue enviado!");
    });

    // Finalmente, agrego el componente al DOM
    parentEl.appendChild(contactEl);
}
