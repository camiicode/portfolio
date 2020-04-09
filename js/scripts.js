document.addEventListener("DOMContentLoaded", function (event) {

  const page_me = document.getElementById("page_me");
  const get_page_me = document.querySelectorAll("#get-page_me");

  for (let i = 0; i < get_page_me.length; i++) {

    get_page_me[i].addEventListener("click", function (e) {

      e.preventDefault();
      page_me.classList.toggle('bottom-0-important');
      console.log('Estable');

    });
    
  }

  const my_projects = document.getElementById("my-projects");
  const get_my_projects = document.querySelectorAll("#get-page_projects");

  for (let i = 0; i < get_my_projects.length; i++) {

    get_my_projects[i].addEventListener("click", function (e) {

      e.preventDefault();
      my_projects.classList.toggle('left-0-important');
      console.log('Estable');

    });
    
  }

});

function fullscreen() {

  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener("load", function(){
        
  var loader = document.getElementById("preload");

  loader.classList.remove("active");

});