const menu = document.querySelector('.menu')
const navBar = document.querySelector('.navBar')
const links = navBar.getElementsByTagName('a')

function removeShowClass() {
  menu.classList.remove('show')
  document.body.classList.remove('noScroll')
  menu.textContent = 'Menu'
}

;[...links].forEach((link) => {
  link.addEventListener('click', () => {
    if (!menu.classList.contains('show')) {
      removeShowClass()
    }
  })
})

window.addEventListener('resize', function () {
  if (this.innerWidth > 950 && menu.classList.contains('show')) {
    removeShowClass()
  }
})

menu.addEventListener('click', function () {
  if (!menu.classList.contains('show')) {
    menu.textContent = 'Close'
    menu.classList.add('show')
    document.body.classList.add('noScroll')
  } else {
    removeShowClass()
  }
})
