const scroller = document.getElementById('scroller')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('sidebar_header')

scroller.addEventListener('click', () => {
  sidebar.classList.add('.slide-top')
  header.style.display = 'flex'
})