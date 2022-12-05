const scroller = document.getElementById('scroller')
const sidebar = document.getElementById('sidebar')
const header = document.getElementById('sidebar_header')
const scrollHeight =document.getElementsByClassName('main_wrapper')[0].offsetHeight
const mainWrapper = document.getElementsByClassName('main_wrapper')[0]

scroller.addEventListener('click', () => {    
  header.style.display = 'flex'
  // const height = mainWrapper.getBoundingClientRect().top + document.documentElement.scrollTop
  // console.log(scrollHeight);
  // console.log(height);

  

  move('.sidebar_wrapper').y(0).duration('1s').then().set('position', 'fixed').y(0).end()
  // sidebar.style.position = 'fixed'
})  