
export default {
    mounted(el, binding) {
    el.addEventListener('click', function() {
      const element = document.querySelector(binding.value.selector);
      element.scrollIntoView({ behavior: 'smooth' });
    });
  },
  name: 'scroll'
}