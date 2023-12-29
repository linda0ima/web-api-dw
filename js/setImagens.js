const navegadorPaginas = document.getElementById("navegadorPaginas");
const navPaginasBotoes = {
    atras: navegadorPaginas.querySelectorAll("button")[0],
    pagAtual: navegadorPaginas.querySelector("span"),
    proximo: navegadorPaginas.querySelectorAll("button")[1],
};

let paginas = {
    atual: 1,
    max: -1,
};

const setPagina = (pagina) => (navPaginasBotoes.pagAtual.innerHTML = pagina);
setPagina(paginas.atual);

//////////////////////////////////////////////
//////////////////////////////////////////////
//conteudo/imagens

const imagensContainer = document.getElementById("imagensContainer");
let debug = [];
const setOnImagensContainer = (pagina) => {
    imagensContainer.innerHTML = "";
    fetchAllPersonagem(
        filtragem.name,
        filtragem.status,
        filtragem.species,
        filtragem.type,
        filtragem.gender,
        pagina
    ).then((r) => {
        debug = r.results;
        paginas.max = r.info.pages;
        personagensAtuais = r.results;
        personagensAtuais.forEach((personagem) =>
            imagensContainer.append(imagemPersonagem(personagem))
        );
    });
};
setOnImagensContainer(paginas.atual);

//////////////////////////////////////////////
//////////////////////////////////////////////

navPaginasBotoes.atras.addEventListener("click", (e) => {
    if (paginas.atual > 1) {
        paginas.atual--;
        setPagina(paginas.atual);
        setOnImagensContainer(paginas.atual);
    }
});

navPaginasBotoes.proximo.addEventListener("click", (e) => {
    if (paginas.atual < paginas.max) {
        paginas.atual++;
        setPagina(paginas.atual);
        setOnImagensContainer(paginas.atual);
    }
});

let lastScrollTop = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////
//para a barra de navegação desaparecer

window.addEventListener("scroll", () => {
    const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        document.getElementById("navBar").style.top = "-250px"; // Esconde a barra de navegação
    } else {
        document.getElementById("navBar").style.top = "0"; // Mostra a barra de navegação
    }

    lastScrollTop = currentScrollTop;
});

//////////////////////////////////////////////
//////////////////////////////////////////////
// ordenar alfabeticamente

let ordenacaoAscendente = true;

ordenarBtn.addEventListener("click", () => {
    ordenacaoAscendente = !ordenacaoAscendente;

    personagensAtuais.sort((a, b) => {
        if (ordenacaoAscendente) {
            return a.name.localeCompare(b.name); // Ordenação ascendente (A-Z)
        } else {
            return b.name.localeCompare(a.name); // Ordenação descendente (Z-A)
        }
    });

    imagensContainer.innerHTML = "";

    personagensAtuais.forEach((personagem) => {
        imagensContainer.appendChild(imagemPersonagem(personagem));
    });
});

