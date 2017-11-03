(function() {
     var service = document.querySelectorAll('.service');
     var image = document.querySelectorAll(' .service > img');
     
 
     service[0].addEventListener('mouseover', function() {
         console.log(123)
         image[0].setAttribute('src', 'pen2.png')
     }, false);
 
     service[0].addEventListener('mouseout', function() {
         image[0].setAttribute('src', 'pen1.png')
     }, false);
 
 
     service[1].addEventListener('mouseover', function() {
         console.log(123)
         image[1].setAttribute('src', 'dev2.png')
     }, false);
 
     service[1].addEventListener('mouseout', function() {
         image[1].setAttribute('src', 'dev1.png')
     }, false);
     
     service[2].addEventListener('mouseover', function() {
         console.log(123)
         image[2].setAttribute('src', 'cust2.png');
     }, false)
     service[2].addEventListener('mouseout', function() {
         image[2].setAttribute('src', 'cust1.png')
     }, false);
     
     
     service[3].addEventListener('mouseover', function() {
         console.log(123)
         image[3].setAttribute('src', 'mark2.png')
     }, false);
 
     service[3].addEventListener('mouseout', function() {
         image[3].setAttribute('src', 'mark1.png')
     }, false)
    
    
 }())