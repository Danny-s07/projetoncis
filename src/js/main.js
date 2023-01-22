/*
obj 1- quando o usuario clicar no botão de veja trailer,deve abrir o modal com o video do trailer.
a) dar um jeito de pegar o elemento que representa o botao na tela o js
b) dar um jeito de identificar quando o usuario clica no botao
c) dar um jeito de pegar o elemento do modal no js
d) abri o modal na tela
------------------------------------------------------
obj 2- quando o usuario clicar no X devemos fechar o modal
e) dar um jeito de pegar o elemento de fechar modal usando js
f) dar um jeito de identificar quando o usuario clicar no X
g) fechar o modal

// () => - funcao quebra seta 
*/



const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");


//b) dar um jeito de identificar quando o usuario clica no botao

botaoTrailer.addEventListener("click", () =>{
    //d) abrir o modal na tela
    modal.classList.add("aberto");
    //trazendo o video de volta para uma nova rodada de exibição
    video.setAttribute("src", linkDoVideo);
})

// obj 2- quando o usuario clicar no X devemos fechar o modal
//f) dar um jeito de identificar quando o usuario clicar no X
botaoFecharModal.addEventListener("click", () =>{
    //g) fechar o modal
    modal.classList.remove("aberto");
    //parando o audio quando fechar modal, e zerando o link
    video.setAttribute("src", "");
})


