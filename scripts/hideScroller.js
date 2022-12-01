let scroller = document.getElementById('scroller')
let parentHeight = document.getElementById('scroller').parentNode.offsetHeight
console.log(parentHeight)
// 1250

const showOnScroll = () => {
  // if (window.innerWidth >= 1250) return scroller.style.display = 'none'
  

  document.addEventListener('resize', function () {
    console.log(1);
    if (window.innerWidth >= 1250) return scroller.style.display = 'none'
  })


  // document.addEventListener('scroll', function () {
  //   let scrollPos = window.pageYOffset

  //   if (scrollPos > 100) {
  //     scroller.style.display = 'none'
  //   } else {
  //     scroller.style.display = 'flex'
  //   } 
  // })
}

showOnScroll()



