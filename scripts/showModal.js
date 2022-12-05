const scroller = document.getElementById('scroller')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('sidebar_header')

scroller.addEventListener('click', () => {
  // sidebar.classList.remove('sidebar_wrapper')
  // sidebar.classList.add('sidebar_modal')
  sidebar.style = 'position: fixed; z-index: 10000; background-color: #000;'
  header.style.display = 'flex'
})