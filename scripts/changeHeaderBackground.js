let header = document.getElementById('header')

document.addEventListener('scroll', function () {
  let scrollPos = window.pageYOffset

  if (scrollPos > 1) {
    header.style.backgroundColor = '#000'
  } else {
    header.style.backgroundColor = 'transparent'
  }
})
