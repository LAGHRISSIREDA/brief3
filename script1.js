

function choose(){
 var  var1 = document.getElementsByName('man-aut');
   var radioType = document.getElementsByClassName('type');
    if(var1[0].checked){
       for(let i=0;i<radioType.length;i++)
         radioType[i].style.display='block';
       radioType[2].style.display='none';
       radioType[5].style.display='none';
    }
    if(var1[1].checked){
      for(let i=0;i<radioType.length;i++)
       radioType[i].style.display='block';

       for(let i=0;i<radioType.length;i++)
       {
          if(i!=2 && i!=5)
            radioType[i].style.display='none';
       }
      
    }
}

function chooseCars(){
   var genre = document.getElementsByName('radio-type');
   var gazo = document.getElementsByClassName('gazoil');
   console.log("test");
   
   
   if(genre[0].checked){
      for(let i = 0;i<gazo.length;i++)
      gazo[i].style.display='block';

      for(let j=0;j<gazo.length;j++){
         if(j!=0){
            gazo[j].style.display='none';
         }
      }
   }

   if(genre[1].checked || genre[2].checked){
      for(let i = 0;i<gazo.length;i++)
      gazo[i].style.display='block';

      for(let j=0;j<gazo.length;j++){
         if(j==0){
            gazo[j].style.display='none';
         }
      }
   }

   if(genre[3].checked || genre[5].checked){
      for(let i = 0;i<gazo.length;i++)
      gazo[i].style.display='block';

      for(let j=0;j<gazo.length;j++){
         if(j!=3){
            gazo[j].style.display='none';
         }
      }
   }

   if(genre[4].checked){
      for(let i = 0;i<gazo.length;i++)
      gazo[i].style.display='block';

      for(let j=0;j<gazo.length;j++){
         if(j!=3 && j!=2){
            gazo[j].style.display='none';
         }
      }
   }

  
}

function display(){
      var days = parseInt(document.getElementById('number').value);
      var cars = document.getElementsByName('radio-type');
      var manaut = document.getElementsByName('man-aut');
      var icon = document.getElementById('money');
      var Genre = document.getElementsByName('genre');
      var car,manAut,genre,result;

      // check Cars

   for(let i=0;i<cars.length;i++){
      if(cars[i].checked){
         car=parseFloat(cars[i].value);
      }
   }

      // check manuel auto
   
   for(let i=0;i<manaut.length;i++){
      if(manaut[i].checked){
         manAut=parseFloat(manaut[i].value);
      }
   }
      

      // check genre

      for(let i=0;i<Genre.length;i++){
         if(Genre[i].checked){
            genre = parseFloat(Genre[i].value);
         }
      }

   //  display icon
      icon.style.display='block';

      // result

      result = days*(car + (car*genre) + (car*manAut));
   
   document.getElementById('result').innerHTML="Cost to be payed : "+result.toFixed(2)+" $";
   console.log("finaaal");
   
}