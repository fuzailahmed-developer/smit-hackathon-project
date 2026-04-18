const toggleThemeBtn = document.querySelector('#theme-toggle')

const enableDarkTheme = () => {
  toggleThemeBtn.firstElementChild.style.display = 'none'
  toggleThemeBtn.lastElementChild.style.display = 'inline'
}
const enableLightTheme = () => {
  toggleThemeBtn.firstElementChild.style.display = 'inline'
  toggleThemeBtn.lastElementChild.style.display = 'none'
}

toggleThemeBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
    enableDarkTheme()
  } else {
    localStorage.setItem('theme', 'light')
    enableLightTheme()
  }

})

window.onload = () => {
  if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark')
    enableDarkTheme()
  } else {
    enableLightTheme()
  }
}