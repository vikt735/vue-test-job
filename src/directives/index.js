import VScroll from './VScroll';

const directives = [
  {name: 'scroll', directive: VScroll}, 
]

export default {
  install(app) {
    directives.forEach(({name, directive}) => {
      app.directive(name, directive);
    })
  }
}