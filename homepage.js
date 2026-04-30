
// ---------------------------------------BOTAO TEMA--------------------------------------
const btnTema = document.getElementById("btnTema");

btnTema.onclick = () => {
  const elemento = document.documentElement;
  const novoTema = elemento.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  elemento.setAttribute("data-bs-theme", novoTema);
};

//------------------------------Barra de pesquisa-------------------------------------------
const nmrBusca = document.getElementById('nmrBusca');
const btnBusca = document.getElementById('btnBusca');

btnBusca.onclick = function() {
    const vlr = nmrBusca.value.toLowerCase().trim();
    const crds = document.querySelectorAll('.Funcionalidades .col-lg-3');

    crds.forEach(function(elemento) {
        const txt = elemento.textContent.toLowerCase();
        
        if (vlr === "" || txt.includes(vlr)) {
            elemento.style.display = "block";
        } else {
            elemento.style.display = "none";
        }
    });
};

nmrBusca.onkeypress = function(e) {
    if (e.key === 'Enter') {
        btnBusca.click();
    }
};