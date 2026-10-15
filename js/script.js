(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.getElementById('nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        note.textContent = 'Por favor, completa los campos obligatorios.';
        return;
      }

      var subject = encodeURIComponent('Nueva consulta desde la web — ' + name);
      var body = encodeURIComponent(
        'Nombre: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Teléfono: ' + (form.phone.value.trim() || 'No indicado') + '\n\n' +
        'Mensaje:\n' + message
      );

      window.location.href = 'mailto:hola@maritaasesoria.com?subject=' + subject + '&body=' + body;
      note.textContent = 'Abriendo tu gestor de correo para enviar la consulta…';
    });
  }
})();
