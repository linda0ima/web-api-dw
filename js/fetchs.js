const funcaoFetch = async (url, responseNotOk) => {
    try{
        const r = await fetch(url)
        if(!r.ok) throw new Error(responseNotOk)

        return r.json()
    } catch (erro){
        console.log(erro)
    }
}

/* =========================================================== */
const fetchPersonagem = async (id) => await funcaoFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    'n há personagem pa ngm :('
)

    const fetchAllPersonagem = async (name, status, species, type, gender, pagina) => await funcaoFetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}&page=${pagina}`,
        'n há personagens pa ngm :('
    )




const fetchLocalizacao = async (id) => await funcaoFetch(
    `https://rickandmortyapi.com/api/location/${id}`,
    'n há localização pa ngm :('
)

const fetchEpisodes = async (id) => await funcaoFetch(
    `https://rickandmortyapi.com/api/episode/${id}`,
    'n há episódio pa ngm :('   
)
/* =========================================================== */

const imagemPersonagem = (personagem) => {
    const container = document.createElement("div");
    container.classList.add("personagem-container"); 

    const img = new Image();
    img.alt = personagem.name; // Atributo alt agora carrega o nome da personagem
    img.src = personagem.image;

    const name = document.createElement("p");
    name.textContent = personagem.name; // Cria um parágrafo para o nome
    name.classList.add("nome-personagem"); 

    container.appendChild(img); // Adiciona a imagem 
    container.appendChild(name); // Adiciona o nome abaixo da imagem

    return container;
};
