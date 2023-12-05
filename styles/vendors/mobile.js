
             
 
document.getElementById('mobile-menu').addEventListener('click', function() {
  

   var element = document.querySelector('.navcolumn');
   element.classList.toggle('visible');

   var monElement = document.getElementById('map');
   
      monElement.style.display = 'none';
      console.log('ok')
      
   

// Changement de la propriété display à "none" pour le cacher

   
});
   



           

   document.getElementById('mobile-menu-exit').addEventListener('click', function() {
   

   var element = document.querySelector('.navcolumn');
   element.classList.toggle('visible');
   var monElement = document.getElementById('map');
   
      monElement.style.display = 'block';
      console.log('ok')
   
});
   
