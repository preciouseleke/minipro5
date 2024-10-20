function Reg(){
    var t1= document.getElementById ('t1').innerHTML;alert(t1);
     var t2= document.getElementById ('t2').innerHTML;alert(t2);
    var t3= document.getElementById ('t3').innerHTML;alert(t3);
     var t4= document.getElementById ('t4').innerHTML;alert(t4);
             if(t1 != 7.5){
                 alert('you will use 7.5kW generator');

             }else if((t2 >=7.5) && (t2 <10)){
                alert("you will use 10kW generator");
             }else if( (t3 >=10) && (t3 <15)){
                    alert("you will use15 kW generator");
             }else if((t4 >=15)){
                    alert("we do not sell");
             }

             
             



}
