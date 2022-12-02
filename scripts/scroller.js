const scroller = document.getElementById('scroller')
const formSection = document.getElementById('sidebar')

scroller.addEventListener('click', function() {
  console.log(window.innerWidth);
  let margin = 130

  if (window.innerWidth <= 560) {
    margin = 100
  }
  const y = formSection.getBoundingClientRect().top + window.scrollY - margin;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
})

const scrollObserver = new IntersectionObserver(
  ([entry]) => {
    if (window.innerWidth >= 1250) return scroller.style.display = 'none'

    if (entry.isIntersecting) {
      scroller.style.display = 'none'
    } else {
      scroller.style.display = 'flex'
    }
  },
)

scrollObserver.observe(formSection)



