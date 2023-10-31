window.addEventListener('scroll', ()=>{

})

const text = document.querySelector(".creators__text-cont");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", () => {
  const isVisible = isElementInViewport(text);
  isVisible? text.classList.add('smooth'): text.classList.remove('smooth')
});