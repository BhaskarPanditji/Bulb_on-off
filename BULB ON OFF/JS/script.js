function light(show){
    console.log(show);
    var pic;
    if(show==0){
        pic="img/bulb-off.jpg";
    }
    else{
        pic="img/bulb-on.jpg";
    }
    
    document.getElementById('bulb').src = pic;
} 