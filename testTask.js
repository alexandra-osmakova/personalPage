function counter(){
    var obj=document.getElementsByClassName('number')[0];

    obj.innerHTML= parseInt(obj.innerHTML) + 5 +"%";
    if(obj.innerHTML=="100%")
        {setTimeout(function(){},100);}
    else
    {setTimeout(counter,100);}
   }

   setTimeout(counter,100);

var arrowOnStart = 0;

function arrowMove() {
  var obj=document.getElementsByClassName('arrow')[0];
  
  arrowOnStart +=  10; 
  
  obj.style.transform = 'rotate(' + arrowOnStart + 'deg)';
  
   if(arrowOnStart==120)
        {setTimeout(function(){},100);}
    else
    {setTimeout(arrowMove,100);}
   }

   setTimeout(arrowMove,100);