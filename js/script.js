window.addEventListener('scroll', function () {
  let navBar = this.document.querySelector('.navBar');
  navBar.classList.toggle('sticky', window.scrollY > 0);
})


let messageArray = ['Desenvolvedor Web - Front End'];
let textPosition = 0;
let speed = 100;
typewriter = () => {
  document.querySelector('.text3').innerHTML = messageArray[0].substring(0, textPosition) + "<span class='typewriter'>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) {
    setTimeout(typewriter, speed);
  }
}

window.addEventListener('load', typewriter)



const apiGit = document.querySelector('.projects-container')

function apiGitHub() {
  fetch('https://api.github.com/users/luizglc/repos')
    .then(async res => {

      if (!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let div = document.createElement('div')
        div.className = 'col-md-4 proj-1'

        div.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong><br>
        <a class="btn gitButtons" href="${item.html_url}" target="_blank">Ver projeto</a>
        
      `
        apiGit.appendChild(div)

      })

    }).catch(e => console.log(e))
}

apiGitHub()

// Nav Bar 

const menuBtn = document.getElementById('menu-btn');

function toggleMenu() {
  const moboNav = document.getElementById('moboNav');
  moboNav.classList.toggle('active');
}
menuBtn.addEventListener('click', toggleMenu);



const removeMenuBtnc = document.getElementById('removeMenu');

function removeMenu() {
  const moboNav = document.getElementById('moboNav');
  moboNav.classList.remove('active');
}

removeMenuBtnc.addEventListener('click', removeMenu);