let scroller = document.getElementById('scroller')

const showOnScroll = () => {
  let scrollPos = window.pageYOffset

  if (scrollPos > 100) {
    scroller.style.display = 'none'
  } else {
    scroller.style.display = 'flex'
  } 
}

const showScroller = () => {
  if (window.innerWidth <= 1024) {
    document.addEventListener('scroll', showOnScroll)
  } else {
     document.removeEventListener('scroll')
  }
}

showScroller()


