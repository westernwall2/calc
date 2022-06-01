//Efeito de transição
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//imagem pix
const doacao = document.getElementById('doacao')
doacao.addEventListener('mouseenter', abrir)

const fecha = document.body
fecha.addEventListener('click', fechar)

const pix = document.getElementById('pix')

function abrir(){
	pix.style.display = 'block'
}
function fechar(){
	pix.style.display = 'none'
}