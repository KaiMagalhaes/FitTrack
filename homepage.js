
// ---------------------------------------BOTAO TEMA--------------------------------------
const btnTema = document.getElementById("btnTema");

btnTema.onclick = () => {
  const elemento = document.documentElement;
  const novoTema = elemento.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  elemento.setAttribute("data-bs-theme", novoTema);
};
