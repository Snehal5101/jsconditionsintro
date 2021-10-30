for (let i=1; i<=100; i++){
   document.getElementById("firsttask").innerHTML=i;
    //  alert (i);   
    }

    for (let i=100; i>=1; i--){
       document.getElementById("reversetask").innerHTML=i;  
        // alert (i); 
    }

    // let time=9;
    // if (time<12){
    //     document.getElementById("time").innerHTML="Good Morning";   
    // }
    // else if (time<16){
    //     document.getElementById("time").innerHTML="Good Afternoon";
    // }
    // else{
    //     document.getElementById("time").innerHTML="Good Night";
    // }

    //let text = document.getElementById("text").innerHTML;
    function btn(){
    if (document.getElementById("text").value==="yes"){
        document.getElementById("drink").innerHTML="I like Tea"; 
    }
    else{
        document.getElementById("drink").innerHTML="I like Coffee"; 
    }
}

function time(){
    if (document.getElementById("inputtime").value <= "12"){
        document.getElementById("timeevent").innerHTML="Its Morning Time"; 
    }
    else if (document.getElementById("inputtime").value<= "16"){
        document.getElementById("timeevent").innerHTML="Its Afternoon Time"; 
    }
    else{
        document.getElementById("timeevent").innerHTML="Its Night Time"; 
    }
}


function mark(){
    if (document.getElementById("marks").value <5){
        document.getElementById("marksheet").innerHTML="Bad performance"; 
    }
    else if (document.getElementById("marks").value <7){
        document.getElementById("marksheet").innerHTML="Average performance";  
    }
    else{
        document.getElementById("marksheet").innerHTML="Good performance"; 
    }
}


function select(){
    if (document.getElementById("age").value<="40"){
        if (document.getElementById("age").value<="20"){
            document.getElementById("nested").innerHTML="You are a Child or Teenager";
        }
        else{
            document.getElementById("nested").innerHTML="You are Younger now";

        }
    }
    else{
        if (document.getElementById("age").value<="60"){
            document.getElementById("nested").innerHTML="You are at your Middleage";
        }
        else{
            document.getElementById("nested").innerHTML="You are Aged";
        }
    }
}