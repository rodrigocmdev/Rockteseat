function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute("src", "./Rockteseat/assets/avatar.light.png")
    } else {
       img.setAttribute("src", "./Rockteseat/assets/braip-creative.png")
    } 



        // pegar a tag img 
        // subistituir a imagem 
        // se estiver ligth mode, adicionar imagem light
        // se tiver sem light mode, manter a imagem normal
}