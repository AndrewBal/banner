document.addEventListener('DOMContentLoaded', () => {
  sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.addEventListener('mouseover', function (e) {
      this.classList.add('active');
      [].forEach.call(sections, function (el) {
        if (el !== this) {
          el.classList.add('hidden')
        } else {
          el.classList.remove('hidden')
        }
      }, this);
    })
    section.addEventListener('mouseout', function (e) {
      this.classList.remove('active');
      sections.forEach((section) => {
        section.classList.remove('hidden')
      })
    })
  })
})


