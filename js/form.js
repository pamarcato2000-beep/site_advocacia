const form = document.getElementById("contact-form");
const popup = document.getElementById("success-popup");
emailjs.init("VvIdNiqc5GjWd_X3v");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  const originalText = button.innerText;

  button.innerText = "ENVIANDO...";
  button.disabled = true;

  emailjs
    .sendForm(
      "service_lqwcpws",
      "template_u9ajnij",
      form
    )
    .then(() => {
      form.reset();
      showPopup();
    })
    .catch((error) => {
      console.error("EmailJS ERROR:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    })
    .finally(() => {
      button.innerText = originalText;
      button.disabled = false;
    });
});

function showPopup() {
  popup.classList.remove("opacity-0", "pointer-events-none");
  popup.querySelector("div").classList.remove("scale-90");
}

function closePopup() {
  popup.classList.add("opacity-0", "pointer-events-none");
  popup.querySelector("div").classList.add("scale-90");
}
