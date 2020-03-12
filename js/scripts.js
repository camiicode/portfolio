document.addEventListener("DOMContentLoaded", function(event) {
  
  const page_me = document.getElementById("page_me");
  const get_page_me = document.querySelectorAll("#get-page_me");
  
  for (let i = 0; i < get_page_me.length; i++) {
    
    get_page_me[i].addEventListener("click", function() {

      // e.preventDefault();
      page_me.classList.toggle('bottom-0-important');
      console.log('Estable');
  
    });
    
  }

});