const filtros = document.getElementById("filtros");
const radios = filtros.querySelectorAll("input[type='radio']");

radios.forEach((radio) =>
  radio.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const label = document.querySelector(`label[for="${target.id}"]`);
    let subcategoria = label.innerHTML;
    const categoria = target.name;

    if (target.classList.contains("checked")){
        target.checked=false
        subcategoria=""
    } else{
        const radiochecked=document.querySelector(`input[type='radio'][name='${categoria}'].checked`)
        if(radiochecked !== null) radiochecked.classList.remove("checked")
    }

    target.classList.toggle("checked")
    filtragem[categoria]=subcategoria
    paginas.atual=1
    setPagina(paginas.atual)
    setOnImagensContainer(paginas.atual)
  })
);
