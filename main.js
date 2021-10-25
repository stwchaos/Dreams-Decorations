
//abre e fecha o menu quando clicar no ícone: hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// pra fazer o botao funcionar
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar header da pag scroll*/
const header = document.querySelector('#header')
const navheight = header.offsetheight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navheight) {
    //maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor q a altura do header
    header.classList.remove('scroll')
  }
})


