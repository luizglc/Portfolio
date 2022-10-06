window.addEventListener('scroll', function () {
  let navBar = this.document.querySelector('.navBar');
  navBar.classList.toggle('sticky', window.scrollY > 0);
})


let messageArray = ['Desenvolvedor Web - Full Stack'];
let textPosition = 0;
let speed = 100;
typewriter = () => {
  document.querySelector('.text3').innerHTML = messageArray[0].substring(0, textPosition) + "<span class='typewriter'>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) {
    setTimeout(typewriter, speed);
  }
}

window.addEventListener('load', typewriter)


