document.addEventListener("keypress", function(event){
      allow(event.key);
});
function allow(key){
    switch (key) {
        case "Enter":
            var randomNo=Math.floor((Math.random()*100)+1); 
            alert("Your Love Percentage is "+randomNo+"%");
            break;
        default:
            console.log("Press 'Enter' to see your love percentage.");
    }
}