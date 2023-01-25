function blastoffTimer() {
    // this is for blastoff assignment jan.18.23


    console.log("blastoffTimer()started"); 
    // this is for the variable to keep time shawty 
    var currTime = 50;
    setTimeout(function(){ 
        console.log("currTime =" + currTime); 
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
        },0);


        //timer at 50 
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },5000);


        //timer at 45
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },10000);


        //timer at 40
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },15000);

        //timer at 35
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },20000);


        //timer at 30
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },25000)


        //timer at 25
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },30000);


        //timer at 20
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },35000);


        //timer at 15 
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },40000);


        //timer at 10
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },45000);


        //timer at 5
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },50000);


        //timer at 0
        setTimeout(function(){ 
            console.log("currTime =" + currTime); 
            currTime = currTime -5;
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left"; 
            },55000);

}