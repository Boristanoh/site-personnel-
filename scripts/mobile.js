
             
 
document.getElementById('mobile-menu').addEventListener('click', function() {
  

   var element = document.querySelector('.navcolumn');
   element.classList.toggle('visible');

   var monElement = document.getElementById('map');
   if (monElement){
      monElement.style.display = 'none';
      console.log('ok')
   }
   var infoAccueil = document.querySelector('.infoaccueil');
      if (infoAccueil){
         infoAccueil.style.visibility = 'hidden';
         console.log('ok none')
   }
   var infoAbout = document.querySelector('.infoabout');
   if (infoAbout){
      infoAbout.style.visibility = 'hidden';
      console.log('ok none')
}
   var infoPacours = document.querySelector('.infoparcours');
   if (infoPacours ){
      infoPacours .style.visibility = 'hidden';
      console.log('ok none')
   }

   var infoPortfolio = document.querySelector('.infoportfolio');
   if (infoPortfolio){
      infoPortfolio.style.visibility = 'hidden';
      console.log('ok none')
   }
   var infoContact = document.querySelector('.infocontact');
   if (infoContact){
      infoContact.style.visibility = 'hidden';
      console.log('ok none')
   }
      
      
   

// Changement de la propriété display à "none" pour le cacher

   
});
   



           

   document.getElementById('mobile-menu-exit').addEventListener('click', function() {
   

   var element = document.querySelector('.navcolumn');
   element.classList.toggle('visible');
   var monElement = document.getElementById('map');
      if (monElement){
         monElement.style.display = 'block';
         console.log('ok')
   }
   var infoAccueil = document.querySelector('.infoaccueil');
      if (infoAccueil){
         infoAccueil.style.visibility = 'visible';
         console.log('ok')
   }

   var infoAbout = document.querySelector('.infoabout');
   if (infoAbout){
      infoAbout.style.visibility = 'visible';
      console.log('ok')
}

   var infoPacours = document.querySelector('.infoparcours');
   if (infoPacours ){
      infoPacours .style.visibility = 'visible';
      console.log('ok')
   }
   
   var infoPortfolio = document.querySelector('.infoportfolio');
   if (infoPortfolio){
      infoPortfolio.style.visibility = 'visible';
      console.log('ok')
}
   var infoContact = document.querySelector('.infocontact');
   if (infoContact){
      infoContact.style.visibility = 'visible';
      console.log('ok')
   }
});
   
