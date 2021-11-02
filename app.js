// for (let i=1; i<=100; i++){
//    document.getElementById("firsttask").innerHTML=i;
//     //  alert (i);   
//     }

//     for (let i=100; i>=1; i--){
//        document.getElementById("reversetask").innerHTML=i;  
//         // alert (i); 
//     }

//     // let time=9;
//     // if (time<12){
//     //     document.getElementById("time").innerHTML="Good Morning";   
//     // }
//     // else if (time<16){
//     //     document.getElementById("time").innerHTML="Good Afternoon";
//     // }
//     // else{
//     //     document.getElementById("time").innerHTML="Good Night";
//     // }

//     //let text = document.getElementById("text").innerHTML;
//     function btn(){
//     if (document.getElementById("text").value==="yes"){
//         document.getElementById("drink").innerHTML="I like Tea"; 
//     }
//     else{
//         document.getElementById("drink").innerHTML="I like Coffee"; 
//     }
// }

// function time(){
//     if (document.getElementById("inputtime").value <= "12"){
//         document.getElementById("timeevent").innerHTML="Its Morning Time"; 
//     }
//     else if (document.getElementById("inputtime").value<= "16"){
//         document.getElementById("timeevent").innerHTML="Its Afternoon Time"; 
//     }
//     else{
//         document.getElementById("timeevent").innerHTML="Its Night Time"; 
//     }
// }


// function mark(){
//     if (document.getElementById("marks").value <5){
//         document.getElementById("marksheet").innerHTML="Bad performance"; 
//     }
//     else if (document.getElementById("marks").value <7){
//         document.getElementById("marksheet").innerHTML="Average performance";  
//     }
//     else{
//         document.getElementById("marksheet").innerHTML="Good performance"; 
//     }
// }


// function select(){
//     if (document.getElementById("age").value<="40"){
//         if (document.getElementById("age").value<="20"){
//             document.getElementById("nested").innerHTML="You are a Child or Teenager";
//         }
//         else{
//             document.getElementById("nested").innerHTML="You are Younger now";

//         }
//     }
//     else{
//         if (document.getElementById("age").value<="60"){
//             document.getElementById("nested").innerHTML="You are at your Middleage";
//         }
//         else{
//             document.getElementById("nested").innerHTML="You are Aged";
//         }
//     }
// }




// switchcase

function timedemo(){
    var text;
    var time =document.getElementById("timedemo").value;

    switch(time) {
        case"5":  case"6":  case"7": case"8": case"9": case"10": case"11": 
        text="Good Morning";
        break;

        case"12":  case"13":  case"14": case"15": case"16": case"17":
        text="Good Afternoon";
        break;

        default:
            text="Good Night";
    }
    document.getElementById("outdemo").innerHTML = text;
}


// dowhile
var i=0;
var x=" ";
do{
    // document.getElementById("dodemo").innerHTML=i;
    x=x+i+"<br/>";
    // document.getElementById("dodemo").innerHTML=i;
                ;
}while (i <= 100);
document.getElementById("dodemo").innerHTML=x;
//  