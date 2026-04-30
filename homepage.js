
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
    const valorBusca = nmrBusca.value.trim();
    
    if (valorBusca !== "") {
        alert("Procurando: " + valorBusca);
    } else {
        alert("Digite algo para procurar.");
    }
};

nmrBusca.onkeypress = function(e) {
    if (e.key === 'Enter') {
        btnBusca.click();
    }
};