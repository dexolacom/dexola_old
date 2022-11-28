// let headerBack = document.getElementById('header_background')
let header = document.getElementById('header')

document.addEventListener('scroll', function () {
  let scrollPos = window.pageYOffset

  if (scrollPos > 1) {
    header.style.backgroundColor = '#000'
    // headerBack.style.display = 'block'
  } else {
    header.style.backgroundColor = 'transparent'
    // headerBack.style.display = 'none'
  }
})
