const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });


function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById("hora").innerText = `Hora actual: ${hora}`;
}
mostrarHora();
setInterval(mostrarHora, 60000);

const iframe = document.getElementById("iframeMusica");
const playMusicBtn = document.getElementById("playMusicBtn");

function iniciarMusica() {
  iframe.src = "https://www.youtube.com/embed/4AQrH9OCal0?autoplay=1&loop=1&playlist=4AQrH9OCal0&mute=1"; 
  document.getElementById("videoMusica").style.display = "block"; 
}

function reproducirMusica() {
  iframe.src = "https://www.youtube.com/embed/4AQrH9OCal0?autoplay=1&loop=1&playlist=4AQrH9OCal0&mute=0"; 
  playMusicBtn.disabled = true; 
  playMusicBtn.innerText = "Música Reproduciéndose";
}

window.addEventListener("load", () => {
  iniciarMusica(); 
});

playMusicBtn.addEventListener("click", reproducirMusica);
