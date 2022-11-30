let scroller = document.getElementById('scroller')

const showOnScroll = () => {

  document.addEventListener('scroll', function () {
    let scrollPos = window.pageYOffset

    if (scrollPos > 100) {
      scroller.style.display = 'none'
    } else {
      scroller.style.display = 'flex'
    } 
  })
  
}

showOnScroll()



