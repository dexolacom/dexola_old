const scroller = document.getElementById('scroller')
const formSection = document.getElementById('form_section')

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

