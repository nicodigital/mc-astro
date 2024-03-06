function checkInitialAnimations() {

  const initialAnimations = document.querySelectorAll(".animate:not(.anim-on)");

  if (initialAnimations.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-on');
          observer.unobserve(entry.target);
        }
      });
    });

    initialAnimations.forEach(element => {
      observer.observe(element);
    });
  }
  
}

export default checkInitialAnimations;