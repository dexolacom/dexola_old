let scroller = document.getElementById('scroller')
let parentHeigth = document.getElementById("scroller").parentNode.offsetHeight;

  const formSection = document.getElementById('form_section')

  scroller.addEventListener('click', function() {
    const y = formSection.getBoundingClientRect().top + window.scrollY - 130;
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



