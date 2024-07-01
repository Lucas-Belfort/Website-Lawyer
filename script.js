document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.querySelector('.whatsapp-button');

  function pulse() {
      whatsappButton.classList.toggle('pulsing');
  }

  setInterval(pulse, 2000);
});

(function() {
  emailjs.init('ulwKpxmhTssa3iN49');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_9e0u3m9';
  const templateID = 'template_u4bfodx';

  emailjs.sendForm(serviceID, templateID, this)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById('response-message').innerText = 'Mensagem enviada com sucesso!';
      }, function(error) {
          console.log('FAILED...', error);
          document.getElementById('response-message').innerText = 'Falha ao enviar mensagem. Tente novamente mais tarde.';
      });
});
