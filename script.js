window.onload = screenWidth;   // we are calling screenWidth function when the window get loaded first time
window.onresize = screenWidth; // we are calling screenWidth function again when window size got resized.



function screenWidth(){
    let myWidth = window.innerWidth;
    document.getElementById('size').innerHTML = `Width: ${myWidth}px`;
}

