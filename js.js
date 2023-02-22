
// Game Zone

let gamerOne = 'x';

// winner combination

function winner(){
   let box1 = document.getElementById('cube1');
   let box2 = document.getElementById('cube2');
   let box3 = document.getElementById('cube3');
   let box4 = document.getElementById('cube4');
   let box5 = document.getElementById('cube5');
   let box6 = document.getElementById('cube6');
   let box7 = document.getElementById('cube7');
   let box8 = document.getElementById('cube8');
   let box9 = document.getElementById('cube9');

   if(box1.innerHTML == 'x' && box1.innerHTML == box2.innerHTML && 
     box2.innerHTML == box3.innerHTML)
    {
        alert('Player X Win');
        rettry();
    }
    else if(box4.innerHTML == 'x' && box4.innerHTML == box5.innerHTML && 
    box5.innerHTML == box6.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box1.innerHTML == 'x'  && box1.innerHTML == box5.innerHTML && 
    box5.innerHTML == box9.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box3.innerHTML == 'x' && box3.innerHTML == box5.innerHTML && 
    box5.innerHTML == box7.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box7.innerHTML == 'x' && box7.innerHTML == box8.innerHTML && 
    box8.innerHTML == box9.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box2.innerHTML == 'x' && box2.innerHTML == box5.innerHTML && 
    box5.innerHTML == box8.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box1.innerHTML == 'x'  && box1.innerHTML == box4.innerHTML && 
    box4.innerHTML == box7.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box2.innerHTML == 'x' && box2.innerHTML != '' && box2.innerHTML == box5.innerHTML && 
    box5.innerHTML == box8.innerHTML){
        alert('Player O Win');
        rettry();
    }
    else if(box3.innerHTML == 'x'  && box3.innerHTML == box6.innerHTML && 
    box6.innerHTML == box9.innerHTML){
        alert('Player X Win');
        rettry();
    }
    else if(box1.innerHTML == 'o'  && box1.innerHTML == box2.innerHTML && 
    box2.innerHTML == box3.innerHTML)
   {
       alert('Player O Win');
       rettry();
   }
   else if(box4.innerHTML == 'o'  && box4.innerHTML == box5.innerHTML && 
   box5.innerHTML == box6.innerHTML){
       alert('Player O Win');
       rettry();
   }
   else if(box7.innerHTML == 'o'  && box7.innerHTML == box8.innerHTML && 
   box8.innerHTML == box9.innerHTML){
       alert('Player O Win');
       rettry();
   }
   else if(box1.innerHTML == 'o' && box1.innerHTML != '' && box1.innerHTML == box5.innerHTML && 
    box5.innerHTML == box9.innerHTML){
        alert('Player O Win');
        rettry();
    }
    else if(box3.innerHTML == 'o'  && box3.innerHTML == box5.innerHTML && 
    box5.innerHTML == box7.innerHTML){
        alert('Player O Win');
        rettry();
    }
    else if(box2.innerHTML == 'o'  && box2.innerHTML == box5.innerHTML && 
    box5.innerHTML == box8.innerHTML){
        alert('Player O Win');
        rettry();
    }
    else if(box1.innerHTML == 'o'  && box1.innerHTML == box4.innerHTML && 
    box4.innerHTML == box7.innerHTML){
        alert('Player O Win');
        rettry();
    }
    else if(box2.innerHTML == 'o'  && box2.innerHTML == box5.innerHTML && 
    box5.innerHTML == box8.innerHTML){
        alert('Player O Win');
        rettry();
    }
    else if(box3.innerHTML == 'o' && box3.innerHTML == box6.innerHTML && 
    box6.innerHTML == box9.innerHTML){
        alert('Player O Win');
        rettry();
    }   
}



// making x and o
function startGaming(ele){
    if(gamerOne === 'x' && ele.innerHTML == ''){
        ele.innerHTML = 'x'
        gamerOne = 'o'
    }
    else if(gamerOne === 'o' && ele.innerHTML == ''){
        ele.innerHTML = 'o'
        gamerOne = 'x'
    }
    else if(ele.innerHTML[0] == 'x' && ele.innerHTML[1] == 'x' 
    && ele.innerHTML[2] == 'x'){
        alert(1)
    }
    winner();
}



function rettry(){
    location.reload()
     
}