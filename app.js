const ratio = .1
const options = {
  root: null,      // Est l'element racine qui permet de detecter si l'element est visible ou non. C'est l'element qui sert de zone d'affichage.
  rootMargin: '0px',
  threshold: ratio  // Permet de savoir à quel moment notre systeme d'intersection va etre detecter. 
}

const handleIntersect = function (entries, observer) {  // handleIntersect: c'est notre collback. entries: sont les elements que nous allons obsevés.
  entries.forEach(function (entry) {  // entry: represente chaque element.
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target) //unobserve: Permet de retirer l'observation. Je v recuperer mon observer, et je v que tu arrete d'observer la cible de notre element actuel.
    }
  })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(handleIntersect, options) // handleIntersect: function à executer lorsqué l'element deviendra visible. En second parametre notre objet qui contient les options
  document.querySelectorAll('.reveal').forEach(function (r) {        // Je lui demande d'observer les elements qui ont pour class reveal(.reveal)
    observer.observe(r)
  })
})