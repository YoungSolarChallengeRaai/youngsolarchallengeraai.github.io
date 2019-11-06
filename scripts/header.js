const target = document.getElementById('header-target');
const header = document.getElementById('header');

observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

observer.observe(target);