window.addEventListener("load", function (){
    const takeoff = document.getElementById('takeoff');
    const status = document.getElementById('flightStatus');
    const sBackground = document.getElementById('shuttleBackground');
    const sHeight = document.getElementById('spaceShuttleHeight');
    const down = document.getElementById('down');
    const imgObject = document.getElementById('rocket');    takeoff.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result){
            status.innerHTML = "Shuttle in flight."
            sBackground.style.backgroundColor = 'blue';
            sHeight.innerHTML = "10,000";        }
    })    landing.addEventListener("click", function (){
         let result = window.confirm("The shuttle is landing. Landing gear engaged.");
         if (result) {
             status.innerHTML = "The shuttle has landed.";
             sBackground.style.backgroundColor = 'green';
             sHeight.innerHTML = '0';
        }
    })    missionAbort.addEventListener("click", function (){
        let result = window.confirm("Mission abort.");
        if (result) {
            status.innerHTML = "Mission aborted.";
            sBackground.style.backgroundColor = 'green';
            sHeight.innerHTML = '0';
        }
    })    up.addEventListener("click", function() {
        sHeight.innerHTML = parseInt(sHeight.innerHTML) + 10000    })    
        
        down.addEventListener("click", function() {
        sHeight.innerHTML = parseInt(sHeight.innerHTML) - 10000
    })
})
 
    