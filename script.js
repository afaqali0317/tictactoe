 while(p1==p2 || p1=='' || p2==''){
alert('Please Enter The players Names (Names must be distinct) . ');
var p1 =prompt("Enter 1st player name");
var p2 =prompt("Enter 2nd player name");
}

document.getElementById("p1name").innerHTML=p1;
document.getElementById("p2name").innerHTML=p2;

let p1won=0;
let p2won=0;
var turn= p1;
var cldiv=[];

function change(ndx) {
         let val = document.getElementById('d'+ndx);
        
        if(val.innerHTML=='' && turn==p1){
                     val.innerHTML='O';
                      cldiv[ndx]=val.innerHTML; 
                      val.removeAttribute("onclick");
                      test(ndx); 
                      turn=p2;}
        else if(val.innerHTML=='' && turn==p2){
                        val.innerHTML='X'; cldiv[ndx]=val.innerHTML;
                        cldiv[ndx]=val.innerHTML; 
                        val.removeAttribute("onclick"); 
                        test(ndx); 
                        turn=p1;}
        else{}
}

function test(ndx) {
            
                if( cldiv[1]!=undefined  && cldiv[1]==cldiv[2] && cldiv[2]==cldiv[3]){won();}
            else if(cldiv[4]!=undefined  && cldiv[4]==cldiv[5] && cldiv[5]==cldiv[6]){won();}
            else if(cldiv[7]!=undefined  && cldiv[7]==cldiv[8] && cldiv[8]==cldiv[9]){won();}
            else if(cldiv[1]!=undefined  && cldiv[1]==cldiv[4] && cldiv[4]==cldiv[7]){won();}
            else if(cldiv[2]!=undefined  && cldiv[2]==cldiv[5] && cldiv[5]==cldiv[8]){won();}
            else if(cldiv[3]!=undefined  && cldiv[3]==cldiv[6] && cldiv[6]==cldiv[9]){won();}
            else if(cldiv[1]!=undefined  && cldiv[1]==cldiv[5] && cldiv[5]==cldiv[9]){won();}
            else if(cldiv[3]!=undefined  && cldiv[3]==cldiv[5] && cldiv[5]==cldiv[7]){won();}
}


function won(){     
                    alert('Hurray! '+turn+' has won the match.' ); 
                    if(turn==p1){p1won++;
                                    document.getElementById("p1won").innerHTML='WON : '+p1won;
                                    location.reload();}
                    else if(turn==p2){p2won++;
                        document.getElementById("p2won").innerHTML='WON : '+p2won;
                        location.reload();
               }}

function Reload(){location.reload();}