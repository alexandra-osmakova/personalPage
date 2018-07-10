function counter(){
    var obj=document.getElementsByClassName('number')[0];

    obj.innerHTML= parseInt(obj.innerHTML) + 5 +"%";
    if(obj.innerHTML=="35%")
        {setTimeout(function(){},200);}
    else
    {setTimeout(counter,200);}
   }

   setTimeout(counter,200);

var arrowOnStart = 0;

function arrowMove() {
  var obj=document.getElementsByClassName('arrow')[0];
  
  arrowOnStart +=  10; 
  
  obj.style.transform = 'rotate(' + arrowOnStart + 'deg)';
  
   if(arrowOnStart==120)
        {setTimeout(function(){},200);}
    else
    {setTimeout(arrowMove,200);}
   }

   setTimeout(arrowMove,200);