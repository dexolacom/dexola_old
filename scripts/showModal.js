const scroller = document.getElementById('scroller')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('sidebar_header')
const scrollHeight =document.getElementsByClassName('main_wrapper')[0].offsetHeight
const mainWrapper = document.getElementsByClassName('main_wrapper')[0]

const cross = document.getElementsByClassName('sidebar_cross')[0]

scroller.addEventListener('click', () => {
  sidebar.style.top = '1000px'

  setTimeout(() => {
    sidebar.style = `position: fixed; overflow-y: auto;`
    document.body.style = 'overflow: hidden;'
  }, 200)

  header.style.display = 'flex'
  
})

cross.addEventListener('click', () => {
  sidebar.style = 'position: fixed; overflow-y: auto; top: 1000px'

  setTimeout(() => {
    sidebar.style = ''
  }, 200)
  
  header.style.display = 'none'
  document.body.style = ''
})
