const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.innerText = "ENVIANDO...";
  button.disabled = true;

  emailjs
    .sendForm(
      "service_lqwcpws",
      "template_iiwn7cd",
      this
    )
    .then(() => {
      alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS ERROR:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    })
    .finally(() => {
      button.innerText = "Enviar Mensagem";
      button.disabled = false;
    });
});
