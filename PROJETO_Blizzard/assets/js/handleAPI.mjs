console.log('handleAPI.js ON')
const url = 'https://api.brchallenges.com/api/blizzard/games'
const dropdownJogos = document.querySelector('.dropdown-jogos')
const dropdownEsportes = document.querySelector('.content-esportes')
const jogosExclusivos = document.querySelector('.main-content')
console.log(jogosExclusivos)


fetch(url).then((res)=>{
    return res.json()
}).then((data)=>{
    //console.log(data)
    data.forEach(element => {
        //console.log(element)
        //console.log(element.logo)
        criarDropdownJogos(element.logo, element.name)
        criarJogosExclusivos(element.image, element.logo, element.name, element.category)
    })
    /* let imgExc = document.querySelector('.imagem-exc')
    console.log('imgexec é',imgExc.getBoundingClientRect())
    console.log('imgexec é',imgExc.clientHeight) */
    jogosExclusivos.innerHTML += 
    `<div class="jogos-item">
        <div class="jogos-item-all flex-center">
            <div>
                <img src="assets/img/logo-blizzard.png" alt="">
                <div class="jogos-text jogos-text-all">
                    <h4><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i> Ver todos os jogos</h4>
                </div>
            </div>
        </div>
    </div>`;
}).catch(e => {
    console.log(e);
    return e;
});




function criarDropdownJogos(logo, titulo){
    //console.log('entrou na function')
    dropdownJogos.innerHTML += 
    `<div class="dropdown-jogos-item">
        <img src="${logo}" alt="${titulo}">
        <div class="blog-text">
            <p>${titulo}</p>
        </div>
    </div>`;
}

function criarJogosExclusivos(imagem,logo, titulo, categoria){

    jogosExclusivos.innerHTML +=
    `<div class="jogos-item">
        <div class="img-wrap">
        <div><img class="imagem-exc" src="${imagem}" alt="${imagem}"></div>
            <img class="jogos-exc-logo" src="${logo}" alt="${logo}">
        </div>
        <div class="jogos-text">
            <h4>${titulo}</h4>
            <p>${categoria}</p>
        </div>
    </div>`
}


/*


<div class="jogos-item">
    <div class="jogos-item-all flex-center">
        <div>
            <img src="assets/img/logo-blizzard.png" alt="">
            <div class="jogos-text jogos-text-all">
                <h4><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i> Ver todos os jogos</h4>
            </div>
        </div>
    </div>
</div>


*/