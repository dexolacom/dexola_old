let headerBack = document.getElementById('header_background')

document.addEventListener('scroll', function () {
  let scrollPos = window.pageYOffset

  if (scrollPos > 1) {
    headerBack.style.display = 'block'
  } else {
    headerBack.style.display = 'none'
  }
})
